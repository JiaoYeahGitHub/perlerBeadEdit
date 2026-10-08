import * as THREE from 'three';
import { applyBeadMaterial } from './BeadMaterial.js';
import { BEAD_LAYERS } from './Layers.js';

/**
 * BoardStage — 棋盘（perlergrid.glb 单格瓦片阵列）+ 棋盘上的豆子（模拟关卡场景）。
 *
 * 对标 Unity 工程 perlerSteam 的 `PerlerGrid`：
 *   - 棋盘不是"一块整盘模型"，而是**单格瓦片** `Assets/Resources/GLB/perlergrid.glb`
 *     按格阵实例化（`PerlerGrid.InstantiateBoard`）：格距 `_cellSize = 2.6`、`_spacing = 0`
 *     （`PerlerGrid.cs:16-19`），瓦片 `localPosition.y = -2`（`:186-190`），
 *     再按材质 `CombineMeshes` 合批（本模块用 InstancedMesh 达到同样的 draw call 量级）。
 *   - 盘面尺寸 = 关卡像素数据尺寸（`Initialize(beadPrefab, data)` 覆盖默认 54×54，`:133-134`）。
 *   - 摆放补偿：GLB 从 Blender 导出时原点可能在脚印角落，游戏实测"脚印中心相对原点的 XZ 偏移"
 *     后补偿（`GetFootprintCenter`，`:143-158`），这里按同一规则计算。
 *   - 豆子：同一模板按 `BeadFitScale = _cellSize / mesh.bounds.size.x` 缩放（`:344-345`，
 *     豆子模型宽 2.5984 → 1.0006），落在格心、`y = 0`（`:347-368`）。
 *
 * 棋盘瓦片材质：glb 带 `KHR_materials_transmission 0.6` + `ior 1.7` + baseColor 0.8 + roughness 0.5
 * + doubleSided。Built-in 管线 **不支持真透射**，glTFast 走近似
 * （`BuiltInMaterialGenerator.cs:348-377` → `MaterialGenerator.cs:476-485`：baseColor 为灰 → 
 * `alpha = 1 × (1 - 0.6) = 0.4`，`SetAlphaModeTransparent`：Blend One / OneMinusSrcAlpha、
 * ZWrite Off、Queue 3000；`SetFloat(CullMode, 0)` 双面）。
 * 因此这里**刻意不用 three 的真透射**（transmission/refraction），而是同一套降级语义：
 * `transparent + premultipliedAlpha + opacity 0.4 + depthWrite false + DoubleSide`。
 */

/** 游戏常量（Unity 单位，与 three 世界单位 1:1） */
export const BOARD_SPEC = {
  cellSize: 2.6,      // PerlerGrid._cellSize
  spacing: 0,         // PerlerGrid._spacing
  tileY: -2,          // PerlerGrid 瓦片摆放高度
  beadY: 0,           // PerlerGrid 豆子摆放高度
  defaultTiles: 1,    // 「只展示棋盘」默认格数
  defaultCols: 32,    // 「棋盘 + 豆子」默认盘面
  defaultRows: 32,
  defaultFillRatio: 0.35, // 盘上豆子默认填充密度（不铺满）
  defaultFillSeed: 20261008,
  maxTiles: 64,       // 上限：64×64 与关卡数据同量级（4096 格）
  // 游戏相机（PerlerGameManager.cs:68-74 + GridZoomController.cs:13-14,31-34）
  camera: {
    fov: 100,
    pitchDeg: 90,          // 正俯视
    minDistance: 20,
    maxDistance: 90,
    defaultDistance: 80,
  },
};

/** 棋盘瓦片材质：复刻 glTFast 在 Built-in 管线下的透射降级 */
export function boardTileMaterial(baseColor = 0xcccccc, opacity = 0.4) {
  const mat = new THREE.MeshStandardMaterial({
    color: baseColor,          // glTF baseColorFactor 0.8（sRGB）→ #CCCCCC
    roughness: 0.5,
    metalness: 0,
    side: THREE.DoubleSide,    // glTF doubleSided → Cull Off
    transparent: true,
    premultipliedAlpha: true,  // Blend One / OneMinusSrcAlpha
    opacity,                   // 1 × (1 - transmissionFactor)
    depthWrite: false,         // ZWrite Off
  });
  mat.name = 'perlergrid_degrated_transmission';
  return mat;
}

export class BoardStage {
  /** @param {THREE.Scene} scene */
  constructor(scene) {
    this.scene = scene;

    /** @type {{root:THREE.Object3D, size:THREE.Vector3}|null} 棋盘瓦片模板（原始，未被改写） */
    this.tileTemplate = null;
    /** @type {{root:THREE.Object3D, size:THREE.Vector3}|null} 豆子模板（原始） */
    this.beadTemplate = null;

    this.tiles = BOARD_SPEC.defaultTiles;
    this.cols = BOARD_SPEC.defaultCols;
    this.rows = BOARD_SPEC.defaultRows;
    /** 棋盘瓦片的实际阵列（「只展示棋盘」= tiles×tiles；「棋盘 + 豆子」= cols×rows） */
    this.boardCells = { cols: BOARD_SPEC.defaultTiles, rows: BOARD_SPEC.defaultTiles };
    /** 盘上豆子分布：随机填充比例（1 = 铺满）与随机种子 */
    this.fillRatio = BOARD_SPEC.defaultFillRatio;
    this.fillSeed = BOARD_SPEC.defaultFillSeed;
    /** 当前实际填充的豆子数量（只读，供界面显示） */
    this.beadCount = 0;

    /** @type {THREE.Group} 棋盘瓦片 */
    this.boardGroup = new THREE.Group();
    this.boardGroup.name = 'board';
    /** @type {THREE.Group} 棋盘上的豆子 */
    this.beadGroup = new THREE.Group();
    this.beadGroup.name = 'board-beads';
    scene.add(this.boardGroup, this.beadGroup);

    this._tileMat = boardTileMaterial();
    this._beadMat = applyBeadMaterial(null, { color: '#ffffff', alpha: 1 }, {
      index: 0, roughness: 0.6, metallic: 0, transparent: false,
    });
  }

  /** 棋盘瓦片模板（默认 public/models/perlergrid.glb） */
  setTileTemplate(model) {
    this.tileTemplate = model ? { root: model.root, size: model.size } : null;
    this._rebuildBoard();
  }

  /** 豆子模板（与「只展示豆子」模式共用的同一份原始模板） */
  setBeadTemplate(model) {
    this.beadTemplate = model ? { root: model.root, size: model.size } : null;
    this._rebuildBeads();
  }

  /** 只展示棋盘：格数 n×n（默认 1） */
  setTileCount(n) {
    this.tiles = clampInt(n, 1, BOARD_SPEC.maxTiles, BOARD_SPEC.defaultTiles);
    this.boardCells = { cols: this.tiles, rows: this.tiles };
    if (this.boardGroup.visible) this._rebuildBoard();
  }

  /** 棋盘 + 豆子：盘面大小（棋盘瓦片与豆子共用同一尺寸） */
  setBoardSize(cols, rows) {
    this.cols = clampInt(cols, 1, BOARD_SPEC.maxTiles, BOARD_SPEC.defaultCols);
    this.rows = clampInt(rows, 1, BOARD_SPEC.maxTiles, BOARD_SPEC.defaultRows);
    this.boardCells = { cols: this.cols, rows: this.rows };
    this._rebuildBoard();
    this._rebuildBeads();
  }

  /** 恢复「只展示棋盘」的 N×N 阵列（从场景模式切回棋盘模式时调用） */
  setBoardTilesMode() {
    this.boardCells = { cols: this.tiles, rows: this.tiles };
    this._rebuildBoard();
  }

  /** 棋盘上的豆子颜色/材质（场景模式：整盘用同一颗豆子） */
  setBeadStyle(bead, type) {
    applyBeadMaterial(this._beadMat, bead, type);
    this._beadMat.needsUpdate = true;
  }

  /**
   * 盘上豆子的分布：按 `ratio` 随机填充（不再是每格一颗）。
   * 同一 `seed` + 同一盘面 → 同一份分布（可复现，便于美术对照截图）；
   * `ratio = 1` 即铺满（旧行为）。
   */
  setBeadFill({ ratio, seed } = {}) {
    if (ratio !== undefined) this.fillRatio = Math.min(1, Math.max(0, Number(ratio) || 0));
    if (seed !== undefined) this.fillSeed = Number(seed) || 0;
    this._rebuildBeads();
  }

  /** 各模式的可见性：棋盘瓦片 / 盘上豆子 */
  setVisible(showBoard, showBeads) {
    this.boardGroup.visible = showBoard;
    this.beadGroup.visible = showBeads;
    if (showBoard) this._rebuildBoard();
    if (showBeads) this._rebuildBeads();
  }

  /** 当前可见内容的外接尺寸（世界单位），用于视距适配提示 */
  get extent() {
    const step = BOARD_SPEC.cellSize + BOARD_SPEC.spacing;
    let w = 0;
    let h = 0;
    if (this.boardGroup.visible) {
      w = Math.max(w, this.boardCells.cols * step);
      h = Math.max(h, this.boardCells.rows * step);
    }
    if (this.beadGroup.visible) {
      w = Math.max(w, this.cols * step);
      h = Math.max(h, this.rows * step);
    }
    if (w === 0) {
      w = this.tiles * step;
      h = this.tiles * step;
    }
    return { w, h };
  }

  /**
   * 镜面环境反射强度（Unity `RenderSettings.reflectionIntensity`）：
   * 用各材质的 `envMapIntensity` 承载（three 的环境贴图同时驱动漫反射与镜面，属已知近似）。
   */
  setEnvIntensity(value) {
    this._beadMat.envMapIntensity = value;
    this._tileMat.envMapIntensity = value;
    this._beadMat.needsUpdate = true;
    this._tileMat.needsUpdate = true;
  }

  /**
   * 游戏视角取景：正俯视（pitch 90）+ Unity 竖直 FOV 100 + 视距在 20..90（默认 80）。
   * 与游戏唯一差异：注视点取盘面中心，而 Unity 的 `GridZoomController` 默认中心是 (0,0,-10)
   * （按旧盘面尺寸取的偏移），这里以盘面为准，视距仍按游戏区间可调。
   */
  frameGameView(camera, target, distance = BOARD_SPEC.camera.defaultDistance) {
    const d = THREE.MathUtils.clamp(distance, BOARD_SPEC.camera.minDistance, BOARD_SPEC.camera.maxDistance);
    target.set(0, 0, 0);
    camera.fov = BOARD_SPEC.camera.fov;
    camera.near = 1;
    camera.far = 1000;
    camera.position.set(0, d, 0);
    camera.up.set(0, 0, -1); // 正俯视时给相机一个稳定的"上"方向（盘面 -Z 朝上）
    camera.updateProjectionMatrix();
    camera.lookAt(target);
  }

  /** 按 FOV 与视距估算画面能容纳的盘面尺寸（用于提示当前视距是否装得下） */
  fitAt(distance) {
    const half = Math.tan(THREE.MathUtils.degToRad(BOARD_SPEC.camera.fov / 2)) * distance;
    return half * 2;
  }

  _rebuildBoard() {
    disposeChildren(this.boardGroup);
    if (!this.tileTemplate) return;

    const step = BOARD_SPEC.cellSize + BOARD_SPEC.spacing;
    const cols = this.boardCells.cols;
    const rows = this.boardCells.rows;
    const startX = -((cols - 1) * step) / 2;
    const startZ = -((rows - 1) * step) / 2;
    const cells = [];
    for (let ix = 0; ix < cols; ix++) {
      for (let iz = 0; iz < rows; iz++) {
        cells.push(new THREE.Vector3(startX + ix * step, BOARD_SPEC.tileY, -(startZ + iz * step)));
      }
    }
    for (const inst of buildInstancedMeshes(this.tileTemplate.root, cells, {
      align: alignFor(this.tileTemplate.root),
      material: this._tileMat,
    })) {
      this.boardGroup.add(inst);
    }
  }

  _rebuildBeads() {
    disposeChildren(this.beadGroup);
    this.beadCount = 0;
    if (!this.beadTemplate) return;

    const step = BOARD_SPEC.cellSize + BOARD_SPEC.spacing;
    const startX = -((this.cols - 1) * step) / 2;
    const startZ = -((this.rows - 1) * step) / 2;

    // BeadFitScale = _cellSize / 模板宽（PerlerGrid.cs:344-345）
    const width = this.beadTemplate.size.x > 0.01 ? this.beadTemplate.size.x : 1;
    const align = alignFor(this.beadTemplate.root, BOARD_SPEC.cellSize / width);

    /**
     * 随机填充：逐格抽签决定是否落子（逐格调用 rand()，先取数再比较，
     * 因此改密度 = 同一份图案的子集，调密度不会整盘重排）。
     * 同一 seed + 同一盘面 → 完全相同的分布，便于美术复现截图；ratio = 1 即铺满。
     */
    const rand = mulberry32(
      (Math.imul(this.fillSeed | 0, 73856093) ^ Math.imul(this.cols, 19349663) ^ Math.imul(this.rows, 83492791)) >>> 0,
    );
    const cells = [];
    for (let ix = 0; ix < this.cols; ix++) {
      for (let iz = 0; iz < this.rows; iz++) {
        const roll = rand();
        if (this.fillRatio < 1 && roll >= this.fillRatio) continue;
        cells.push(new THREE.Vector3(startX + ix * step, BOARD_SPEC.beadY, -(startZ + iz * step)));
      }
    }
    // 密度再低也至少留一颗（否则界面看起来像"没反应"）
    if (cells.length === 0) cells.push(new THREE.Vector3(0, BOARD_SPEC.beadY, 0));

    for (const inst of buildInstancedMeshes(this.beadTemplate.root, cells, {
      align,
      material: this._beadMat,
    })) {
      this.beadGroup.add(inst);
    }
    this.beadCount = cells.length;
  }

  dispose() {
    disposeChildren(this.boardGroup);
    disposeChildren(this.beadGroup);
    this.scene.remove(this.boardGroup, this.beadGroup);
    this._tileMat.dispose();
    this._beadMat.dispose();
  }
}

// ─── 工具 ─────────────────────────────────────────────

function clampInt(v, min, max, fallback) {
  const n = Math.round(Number(v));
  return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : fallback;
}

/** 确定性随机：同一 seed → 同一份盘面分布（截图可复现） */
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

/**
 * 模板 → 每个网格相对模板根节点的局部矩阵。
 * 根节点自身的矩阵会被消掉，因此"根节点带位移/旋转"（GLB 常见）不会影响实例摆放。
 */
function meshLocalMatrices(root) {
  root.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const out = [];
  root.traverse(child => {
    if (!child.isMesh) return;
    out.push({ mesh: child, local: new THREE.Matrix4().multiplyMatrices(inv, child.matrixWorld) });
  });
  return out;
}

/** 模板根空间 AABB 的水平中心（对应游戏 `GetFootprintCenter` 的 XZ 偏移） */
function footprintCenter(root) {
  const box = new THREE.Box3();
  const v = new THREE.Vector3();
  for (const { mesh, local } of meshLocalMatrices(root)) {
    mesh.geometry.computeBoundingBox();
    const bb = mesh.geometry.boundingBox;
    if (!bb) continue;
    for (const x of [bb.min.x, bb.max.x]) {
      for (const y of [bb.min.y, bb.max.y]) {
        for (const z of [bb.min.z, bb.max.z]) {
          box.expandByPoint(v.set(x, y, z).applyMatrix4(local));
        }
      }
    }
  }
  if (box.isEmpty()) return new THREE.Vector2(0, 0);
  const c = box.getCenter(new THREE.Vector3());
  return new THREE.Vector2(c.x, c.z);
}

/** 对齐矩阵：先按 scale 缩放，再把脚印中心移到原点（与游戏的 localScale + 偏移补偿一致） */
function alignFor(root, scale = 1) {
  const c = footprintCenter(root);
  return new THREE.Matrix4()
    .makeScale(scale, scale, scale)
    .premultiply(new THREE.Matrix4().makeTranslation(-c.x * scale, 0, -c.y * scale));
}

/**
 * 把模板的每个网格做成一份 InstancedMesh，逐格写入 `T(cell) × align × 网格局部矩阵`。
 * 模板网格数 = draw call 数（棋盘瓦片 2 个、豆子 1 个），与游戏 `CombineMeshes` 同级。
 */
function buildInstancedMeshes(root, cells, { align, material }) {
  const out = [];
  for (const { mesh, local } of meshLocalMatrices(root)) {
    const inst = new THREE.InstancedMesh(mesh.geometry, material, cells.length);
    inst.name = `${root.name || 'template'}:${mesh.name || 'mesh'}`;
    inst.frustumCulled = false;
    // 图层 1：只进交互视口，不进图标渲染（图标走图层 0 的独立场景）
    inst.layers.set(BEAD_LAYERS.preview);
    const m = new THREE.Matrix4();
    const cellMat = new THREE.Matrix4();
    for (let i = 0; i < cells.length; i++) {
      cellMat.makeTranslation(cells[i].x, cells[i].y, cells[i].z);
      m.multiplyMatrices(cellMat, align).multiply(local);
      inst.setMatrixAt(i, m);
    }
    inst.instanceMatrix.needsUpdate = true;
    out.push(inst);
  }
  return out;
}

function disposeChildren(group) {
  for (const child of [...group.children]) {
    group.remove(child);
    if (child.isInstancedMesh) child.dispose();
  }
}
