import * as THREE from 'three';
import { applyBeadMaterial, applyPlateMaterial } from './BeadMaterial.js';
import { getType } from './BeadTypes.js';
import { BEAD_LAYERS } from './Layers.js';

/**
 * 图标规格。
 *
 * 画幅对齐参考图 `public/bead_13.png`（该图取自**旧工程 perler3D** 的
 * `Assets/Resources/Beads/bead_13.png`；perlerSteam 已删除 `Resources/Beads/` 目录，
 * 因此它只作为构图/圆角规格的参考，不代表 perlerSteam 的运行时渲染）：
 *   256×256 RGBA；参考图不透明内容区恰为 13..242（四边 13px 透明）；圆角拟合半径 ≈ 44px @230px。
 *
 * 相机：`camera` 段驱动透视相机的 fov / 俯角 / 方位 / 取景上限（tiltDeg = 0 即正俯视）。
 * 游戏侧参考：Unity `PerlerGameManager` 的相机为 fov **100**、位置 (0,45,-70)、near/far 0.1/1000
 * （`PerlerGameManager.cs:68-74`），进关卡后由 `GridZoomController` 锁成 Pitch 90（正俯视）、
 * 视距 20~90（默认 80）（`GridZoomController.cs:13-14,31-34`）；图标构图与游戏相机无关，
 * 这里的 fov 38 / 俯角 1° 是按参考图 `public/bead_13.png` 拟合的编辑器取景。
 */
export const ICON_SPEC = {
  size: 256,
  inset: 13,
  radius: 44,

  beadCount: 1000, // 图标内的豆子数量
  beadScale: 0.05, // 单颗豆子水平最大边（底板边长 = 1）
  tiltDeg: 90, // 每颗豆子的随机倾斜幅度（度）：俯仰/侧倾各取 ±tiltDeg，偏航 0..360°
  margin: 0, // 豆子外沿与底板边界的最小留白
  dropCandidates: 100, // 每颗豆子尝试的落点数，取势能最低者（模拟摇实/自然坍落）
  dropEpsilon: 0, // 落点微小抬升，避免与地面共面导致 z-fighting
  reposeSlope: 0.35, // 休止角斜率（高度/半径）：豆堆越靠中心越高，≈19° 的堆角

  camera: {
    fov: 38,
    tiltDeg: 1, // 与竖直方向的夹角：0 = 正俯视（无透视感），越大越侧向
    azimuthDeg: 0, // 绕竖直轴偏转，避免完全对称的"证件照"取景
    ndcLimit: 1, // 内容投影须落在 ±ndcLimit 内（内容框为 ±230/256 = ±0.898）
  },
};

const PLATE_SIZE = 1; // 底板边长（世界单位）
/** 底板（= 图标内容框）的圆角半径，与 IconExporter 的 alpha 遮罩同一比例 */
const ROUND_RADIUS = (ICON_SPEC.radius / (ICON_SPEC.size - ICON_SPEC.inset * 2)) * PLATE_SIZE;
const GROUND_SIZE = 8; // 地面平面尺寸：足以铺满画幅（同色，视觉上不可见边界）
/** 高度场网格边长 = 豆子尺寸 / 此值 */
const GRID_DIVISIONS = 3;

/**
 * BeadStage — 场景内容：
 *   - 地面：豆子色的无光照平面（仅图标相机可见），同时作为物理承托面 y = 0；
 *   - 图标豆子：ICON_SPEC.beadCount 颗、各带随机倾斜角，按「重力落点 + 高度场支撑面」逐颗堆叠；
 *   - 预览豆子：一颗居中的豆子，供交互视口观察材质与颜色。
 */
export class BeadStage {
  constructor() {
    this.scene = new THREE.Scene();

    this._groundMat = applyPlateMaterial(null, { color: '#ffffff' });
    this._ground = new THREE.Mesh(new THREE.PlaneGeometry(GROUND_SIZE, GROUND_SIZE), this._groundMat);
    this._ground.rotation.x = -Math.PI / 2; // 平面位于 XZ，法线朝 +Y
    this._ground.layers.set(BEAD_LAYERS.icon);
    this.scene.add(this._ground);

    /** @type {THREE.Group} 图标用：堆叠豆子 */
    this.scatter = new THREE.Group();
    this.scene.add(this.scatter);

    /** @type {THREE.Group} 视口用：单颗豆子 */
    this.preview = new THREE.Group();
    this.scene.add(this.preview);

    this._beadMat = applyBeadMaterial(null, { color: '#ffffff', alpha: 1 }, getType(0));

    /** @type {THREE.Object3D|null} 归一化模板（水平最大边 = 1，底面贴 y = 0） */
    this._template = null;
    /** @type {THREE.Vector3|null} 归一化模板尺寸（未缩放） */
    this._templateSize = null;
    /** @type {Float32Array|null} 高度场（每格堆顶高度），随布局重建 */
    this._heightField = null;
    this._layoutSeed = null;
    /** 当前豆子颜色（sRGB hex），供图标背景填充使用 */
    this.beadColor = '#ffffff';

    const cam = ICON_SPEC.camera;
    this.iconCamera = new THREE.PerspectiveCamera(cam.fov, 1, 0.05, 100);
    this.iconCamera.layers.set(BEAD_LAYERS.icon);
  }

  /**
   * 设置豆子模型模板（预览豆子与堆叠豆子均由它克隆）。
   * 先克隆再归一化：`model.root` 保持原始姿态（BoardStage 的盘上豆子要用未改写过的模板）。
   * @param {{root:THREE.Object3D, name:string}} model
   */
  setTemplate(model) {
    this._template = normalizeTemplate(model.root.clone(true));
    this._templateSize = new THREE.Box3().setFromObject(this._template).getSize(new THREE.Vector3());
    this._layoutSeed = null;
    this._rebuild(model.name);
  }

  /**
   * 应用豆子颜色与材质类型。名字未变则不重排堆叠布局 —— 调色/调参时构图保持稳定。
   * @param {{name:string,color:string,alpha:number}} bead
   * @param {import('./BeadTypes.js').BeadTypeDef} type
   */
  setBead(bead, type) {
    applyBeadMaterial(this._beadMat, bead, type);
    applyPlateMaterial(this._groundMat, bead);
    this.beadColor = bead.color;
    if (this._template && this._layoutSeed !== bead.name) this._rebuild(bead.name);
  }

  /** 单颗预览豆子的可见性（「只展示棋盘」/「棋盘 + 豆子」模式隐藏它） */
  setPreviewVisible(visible) {
    this.preview.visible = visible;
  }

  /**
   * 镜面环境反射强度（对应 Unity `RenderSettings.reflectionIntensity`）：
   * three 的环境贴图同时驱动漫反射与镜面，这里用材质的 `envMapIntensity` 承载反射部分。
   */
  setEnvIntensity(value) {
    this._beadMat.envMapIntensity = value;
    this._beadMat.needsUpdate = true;
  }

  /**
   * 把交互视口的透视相机摆到单颗豆子的取景位置。
   * @param {THREE.PerspectiveCamera} camera
   * @param {THREE.Vector3} target 写入相机注视点（OrbitControls 的 target）
   */
  framePreview(camera, target) {
    const distance = 2.4;
    const k = distance * 0.577; // (1,1,1)/√3 → 3/4 视角
    target.set(0, 0.5, 0);
    camera.position.set(k, 0.5 + k, k);
    camera.near = 0.01;
    camera.far = 50;
    camera.updateProjectionMatrix();
    camera.lookAt(target);
  }

  /**
   * 图标用：逐颗堆叠 ICON_SPEC.beadCount 颗豆子，每颗豆子带随机倾斜角。
   *
   * 物理模型（高度场 + 有向包围盒）：
   *   1. 每颗豆子随机定朝向：偏航 0..360°，俯仰/侧倾各取 ±ICON_SPEC.tiltDeg；
   *   2. 高度场（XZ 网格）记录每格当前堆顶高度；豆子按**有向包围盒**参与碰撞：
   *      - 水平投影 = 竖直直线与该 OBB 的相交判定（板闸法，精确，不用 AABB，避免把斜豆当成大方块而虚高）；
   *      - 堆顶写入 = 该豆子顶面（斜面）在格心处的高度，而不是常数高度；
   *   3. 每颗豆子随机取 dropCandidates 个落点，取「势能」最小者落下：
   *      势能 = 支撑面高度 + reposeSlope × 离中心距离（休止角）—— 先铺满低处，再往中间堆成锥/穹顶；
   *   4. 支撑面高度 = 其水平投影覆盖的各格堆顶最大值；豆子中心落在该高度 + 自身最低点偏移处；
   *   5. 因此豆体在任意格内都不会低于该格已有的堆顶 —— 倾斜的豆子也不会互相穿透；
   *   6. 落点范围按该豆子的 AABB 半宽收缩并做圆角矩形判定，保证整颗豆子都在框内。
   */
  _layout(seedKey = '') {
    const source = this._template;
    const size = this._templateSize;
    if (!source || !size) return;

    const rand = mulberry32(hashString(seedKey));
    const scale = ICON_SPEC.beadScale;
    const tilt = THREE.MathUtils.degToRad(ICON_SPEC.tiltDeg);
    const half = new THREE.Vector3((size.x / 2) * scale, (size.y / 2) * scale, (size.z / 2) * scale);
    const limit = PLATE_SIZE / 2 - ICON_SPEC.margin;

    // 高度场（网格边长 cell；pad = 半格，用于把「按格离散」的边界漏判做成保守判定）
    const cell = scale / GRID_DIVISIONS;
    const pad = cell / 2;
    const gridN = Math.ceil(PLATE_SIZE / cell) + 1;
    const heights = new Float32Array(gridN * gridN);
    this._heightField = heights;
    const cellRange = (center, halfExtent) => {
      const lo = Math.floor((center - halfExtent - cell / 2 + PLATE_SIZE / 2) / cell);
      const hi = Math.ceil((center + halfExtent + cell / 2 + PLATE_SIZE / 2) / cell);
      return [Math.max(0, lo), Math.min(gridN - 1, hi)];
    };
    const cellCenter = (index) => -PLATE_SIZE / 2 + (index + 0.5) * cell;

    // 每颗豆子复用的暂存量
    const euler = new THREE.Euler();
    const rotation = new THREE.Matrix4();
    const inverse = new THREE.Matrix4();
    const local = new THREE.Vector3();
    const upLocal = new THREE.Vector3();
    const normal = new THREE.Vector3();
    const topOffset = new THREE.Vector3();

    this._clearGroup(this.scatter);
    for (let i = 0; i < ICON_SPEC.beadCount; i++) {
      // 1) 随机朝向（含倾斜）
      euler.set((rand() * 2 - 1) * tilt, rand() * Math.PI * 2, (rand() * 2 - 1) * tilt);
      rotation.makeRotationFromEuler(euler);
      inverse.copy(rotation).transpose();
      const ext = rotatedHalfExtents(rotation, half); // AABB 半尺寸（用于框内判定与遍历范围）
      const spanX = Math.max(0, limit - ext.x);
      const spanZ = Math.max(0, limit - ext.z);
      normal.set(0, 1, 0).applyMatrix4(rotation); // 顶面/底面法线（世界）
      topOffset.set(0, half.y, 0).applyMatrix4(rotation); // 中心 → 顶面中心
      upLocal.set(0, 1, 0).applyMatrix4(inverse); // 世界竖直方向在局部坐标下

      /**
       * 竖直直线（相对豆子中心偏移 dx,dz）是否穿过该豆子 —— 精确的水平投影判定（板闸法）。
       * `expand` 把局部 x/z 两轴外扩指定量：写高度场时用半格（保守覆盖，堵住按格离散的边界漏判，
       * 这是「不穿透」的关键）；查询支撑面时用 0（否则豆子会踩在半个格子外的邻豆上，堆高虚增）。
       */
      const hits = (dx, dz, expand = 0) => {
        local.set(dx, 0, dz).applyMatrix4(inverse);
        let tMin = -Infinity;
        let tMax = Infinity;
        for (let a = 0; a < 3; a++) {
          const qa = local.getComponent(a);
          const na = upLocal.getComponent(a);
          const ha = half.getComponent(a) + (a === 1 ? 0 : expand);
          if (Math.abs(na) < 1e-6) {
            if (Math.abs(qa) > ha) return false;
            continue;
          }
          let t1 = (-ha - qa) / na;
          let t2 = (ha - qa) / na;
          if (t1 > t2) {
            const swap = t1;
            t1 = t2;
            t2 = swap;
          }
          if (t1 > tMin) tMin = t1;
          if (t2 < tMax) tMax = t2;
          if (tMin > tMax) return false;
        }
        return true;
      };

      /** 支撑面高度 = 投影覆盖格子中的最高堆顶 */
      const supportAt = (x, z) => {
        const [i0, i1] = cellRange(x, ext.x);
        const [j0, j1] = cellRange(z, ext.z);
        let top = 0;
        for (let gi = i0; gi <= i1; gi++) {
          const cx = cellCenter(gi);
          for (let gj = j0; gj <= j1; gj++) {
            if (!hits(cx - x, cellCenter(gj) - z)) continue;
            const h = heights[gj * gridN + gi];
            if (h > top) top = h;
          }
        }
        return top;
      };

      /** 顶面（斜面）写入高度场 */
      const raise = (x, z, centerY) => {
        const topX = x + topOffset.x;
        const topY = centerY + topOffset.y;
        const topZ = z + topOffset.z;
        const [i0, i1] = cellRange(x, ext.x);
        const [j0, j1] = cellRange(z, ext.z);
        for (let gi = i0; gi <= i1; gi++) {
          const cx = cellCenter(gi);
          for (let gj = j0; gj <= j1; gj++) {
            const cz = cellCenter(gj);
            if (!hits(cx - x, cz - z, pad)) continue; // 写入按半格外扩：覆盖到豆子实际投影所在的所有格子
            const y = topY - (normal.x * (cx - topX) + normal.z * (cz - topZ)) / normal.y;
            const idx = gj * gridN + gi;
            if (y > heights[idx]) heights[idx] = y;
          }
        }
      };

      // 2) 取势能最低的落点
      let best = null;
      for (let k = 0; k < ICON_SPEC.dropCandidates; k++) {
        const x = (rand() - 0.5) * 2 * spanX;
        const z = (rand() - 0.5) * 2 * spanZ;
        if (!boxInsideRoundedRect(x, z, ext.x, ext.z, PLATE_SIZE / 2, ROUND_RADIUS)) continue;
        const support = supportAt(x, z);
        const score = support + ICON_SPEC.reposeSlope * Math.hypot(x, z);
        if (!best || score < best.score) best = { x, z, support, score };
      }
      // 候选全部被圆角排除时退回底板中心（中心必然在框内）
      if (!best) best = { x: 0, z: 0, support: supportAt(0, 0) };

      // 3) 落到支撑面上：最低点贴合支撑面
      const centerY = best.support + ext.y + ICON_SPEC.dropEpsilon;
      raise(best.x, best.z, centerY);

      // 4) 组装：pivot 负责位置与缩放，holder 绕豆子自身中心旋转
      const pivot = new THREE.Group();
      pivot.position.set(best.x, centerY, best.z);
      pivot.scale.setScalar(scale);
      const holder = new THREE.Group();
      holder.rotation.copy(euler);
      const clone = source.clone();
      clone.position.set(0, -half.y / scale, 0); // 把模板中心移到 holder 原点 → 旋转绕中心
      holder.add(clone);
      pivot.add(holder);
      this._adopt(clone, BEAD_LAYERS.icon);
      this.scatter.add(pivot);
    }

    this._layoutSeed = seedKey;
    this._fitIconCamera();
  }

  /** 视口用：一颗居中的豆子（保持模型原始朝向） */
  _buildPreview() {
    this._clearGroup(this.preview);
    const clone = this._template.clone();
    this._adopt(clone, BEAD_LAYERS.preview);
    this.preview.add(clone);
  }

  /** 重建预览豆子与堆叠布局 */
  _rebuild(seedKey) {
    this._buildPreview();
    this._layout(seedKey);
  }

  _adopt(clone, layer) {
    clone.traverse(child => {
      if (!child.isMesh) return;
      child.material = this._beadMat;
      child.castShadow = false;
      child.receiveShadow = false; // 游戏 PerlerBead.cs:53 receiveShadows = false
      child.layers.set(layer);
    });
  }

  _clearGroup(group) {
    // 几何/材质与模板共享，此处只解除引用
    for (const child of [...group.children]) group.remove(child);
  }

  /**
   * 图标取景：把相机放在倾斜方向上，迭代求距离与偏移，使整个豆堆的投影恰好落在内容框内
   * （±camera.ndcLimit）。豆堆有高度、投影会随堆高外扩，因此按实际豆堆取景。
   */
  _fitIconCamera() {
    const cam = this.iconCamera;
    const cfg = ICON_SPEC.camera;

    // 取景对象 = 实际豆堆（逐颗豆子的世界包围盒角点）；地面只是同色背景，不参与取景
    const points = [];
    const box = new THREE.Box3();
    for (const child of this.scatter.children) {
      box.setFromObject(child);
      for (const c of boxCorners(box)) points.push(c);
    }
    if (points.length === 0) {
      for (const c of boxCorners(new THREE.Box3(
        new THREE.Vector3(-PLATE_SIZE / 2, 0, -PLATE_SIZE / 2),
        new THREE.Vector3(PLATE_SIZE / 2, 0, PLATE_SIZE / 2),
      ))) points.push(c);
    }
    const corners = points;
    const tilt = THREE.MathUtils.degToRad(cfg.tiltDeg);
    const azimuth = THREE.MathUtils.degToRad(cfg.azimuthDeg);
    const dir = new THREE.Vector3(
      Math.sin(tilt) * Math.sin(azimuth),
      Math.cos(tilt),
      Math.sin(tilt) * Math.cos(azimuth),
    ).normalize();

    const aim = new THREE.Box3().setFromPoints(corners).getCenter(new THREE.Vector3());
    const halfAt = (distance) => Math.tan(THREE.MathUtils.degToRad(cam.fov) / 2) * distance; // aspect = 1

    const place = (distance) => {
      cam.position.copy(aim).addScaledVector(dir, distance);
      cam.lookAt(aim);
      cam.updateMatrixWorld(true);
      cam.updateProjectionMatrix();
    };

    let distance = 1;
    for (let pass = 0; pass < 4; pass++) {
      // 1) 距离：maxAbs 随距离单调递减 → 二分求「投影恰好落在 ±ndcLimit」
      let lo = 0.05;
      let hi = 60;
      for (let i = 0; i < 48; i++) {
        const mid = (lo + hi) / 2;
        place(mid);
        if (projectExtent(cam, corners).maxAbs > cfg.ndcLimit) lo = mid;
        else hi = mid;
      }
      distance = hi;

      // 2) 居中：把相机与注视点一起沿自身右/上方向平移，使投影包围盒中心回到画面中心
      //    （相机平移 +T 会让画面内容向 -T 方向移动，故取正号）
      place(distance);
      const e = projectExtent(cam, corners);
      const halfSpan = halfAt(distance);
      const right = new THREE.Vector3().setFromMatrixColumn(cam.matrixWorld, 0);
      const up = new THREE.Vector3().setFromMatrixColumn(cam.matrixWorld, 1);
      aim.addScaledVector(right, e.centerX * halfSpan).addScaledVector(up, e.centerY * halfSpan);
    }

    // 收尾：按最终距离重新摆位并设置裁剪面（near/far 需覆盖整个豆堆）
    cam.near = Math.max(0.02, distance * 0.1);
    cam.far = distance * 4;
    place(distance);
  }

  dispose() {
    this._clearGroup(this.scatter);
    this._clearGroup(this.preview);
    this._ground.geometry.dispose();
    this._groundMat.dispose();
    this._beadMat.dispose();
  }
}

/**
 * 旋转后包围盒的半尺寸（世界单位）。
 * 盒以原点为中心、局部半尺寸为 half，世界半宽 = |R| 行绝对值 × half。
 */
function rotatedHalfExtents(rotation, half) {
  const e = rotation.elements; // 列主序
  return {
    x: Math.abs(e[0]) * half.x + Math.abs(e[4]) * half.y + Math.abs(e[8]) * half.z,
    y: Math.abs(e[1]) * half.x + Math.abs(e[5]) * half.y + Math.abs(e[9]) * half.z,
    z: Math.abs(e[2]) * half.x + Math.abs(e[6]) * half.y + Math.abs(e[10]) * half.z,
  };
}

/** 包围盒 8 个角点 */
function boxCorners(box) {
  const out = [];
  for (const x of [box.min.x, box.max.x]) {
    for (const y of [box.min.y, box.max.y]) {
      for (const z of [box.min.z, box.max.z]) out.push(new THREE.Vector3(x, y, z));
    }
  }
  return out;
}

/** 豆子（按轴对齐包围盒）四角是否都落在圆角底板内 */
function boxInsideRoundedRect(x, z, halfX, halfZ, limit, radius) {
  for (const dx of [-halfX, halfX]) {
    for (const dz of [-halfZ, halfZ]) {
      if (!insideRoundedRect(x + dx, z + dz, limit, radius)) return false;
    }
  }
  return true;
}

function insideRoundedRect(x, z, limit, radius) {
  const cx = Math.abs(x);
  const cz = Math.abs(z);
  if (cx > limit || cz > limit) return false;
  const inner = limit - radius;
  if (cx <= inner || cz <= inner) return true;
  const dx = cx - inner;
  const dz = cz - inner;
  return dx * dx + dz * dz <= radius * radius;
}

/** 角点投影到 NDC 后的包围范围 */
function projectExtent(camera, corners) {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  const v = new THREE.Vector3();
  for (const corner of corners) {
    v.copy(corner).project(camera);
    if (v.x < minX) minX = v.x;
    if (v.x > maxX) maxX = v.x;
    if (v.y < minY) minY = v.y;
    if (v.y > maxY) maxY = v.y;
  }
  return {
    minX,
    maxX,
    minY,
    maxY,
    maxAbs: Math.max(Math.abs(minX), Math.abs(maxX), Math.abs(minY), Math.abs(maxY)),
    centerX: (minX + maxX) / 2,
    centerY: (minY + maxY) / 2,
  };
}

/**
 * 归一化模板：水平最大边（x/z 中较大者）缩放到 1，水平居中，底面贴 y = 0。
 * 对应游戏 `PerlerGrid.cs:344-345  BeadFitScale = _cellSize / beadMesh.bounds.size.x`。
 */
function normalizeTemplate(root) {
  const wrapper = new THREE.Group();
  wrapper.add(root);

  const size = new THREE.Box3().setFromObject(root).getSize(new THREE.Vector3());
  const footprint = Math.max(size.x, size.z);
  const scale = footprint > 0 ? 1 / footprint : 1;
  wrapper.scale.setScalar(scale);

  wrapper.updateMatrixWorld(true);
  const world = new THREE.Box3().setFromObject(wrapper);
  const center = world.getCenter(new THREE.Vector3());
  root.position.x -= center.x / scale;
  root.position.z -= center.z / scale;
  root.position.y -= world.min.y / scale;
  wrapper.updateMatrixWorld(true);
  return wrapper;
}

/** 确定性随机：同一颗豆子名字 → 同一份堆叠构图（图标可复现） */
function mulberry32(seed) {
  let a = seed >>> 0;
  return function next() {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
