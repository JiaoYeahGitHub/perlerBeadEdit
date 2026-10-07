import * as THREE from 'three';
import { EXRLoader } from 'three/addons/loaders/EXRLoader.js';

/**
 * SkyboxLibrary — 天空盒资源库（光照与背景的唯一来源）。
 *
 * 对标 Unity 工程 perlerSteam：
 *   - 天空盒材质：`Assets/Resources/Materials/<id>.mat`，内置 `Skybox/Cubemap`，
 *     贴图 `Assets/Resources/SkyBox/<file>`（forest.exr，导入为 Cubemap，textureShape 2）。
 *   - 材质参数：`_Tint` / `_Exposure` / `_Rotation`（Unity 的 Cubemap 天空盒把 tint 再乘 2，
 *     故 0.5 灰 = 中性）。
 *   - 环境：进关卡时 `PerlerGameManager.EnterGameEnvironment` 设
 *     `RenderSettings.skybox = 该材质`、`ambientMode = Skybox`、`ambientIntensity = 1`、
 *     `defaultReflectionMode = Skybox`、`reflectionIntensity = 1`
 *     → 漫反射环境光（SH）与镜面环境反射都来自这张天空盒；相机 clearFlags 也切成 Skybox
 *       （`PerlerGameManager.cs:191-198`），即游戏画面背景就是天空盒。
 *   - 场景里没有任何实时灯光（`Perler.unity` 的 Directional Light 物体 m_IsActive: 0，
 *     `PerlerGameManager.cs:79-100` 建灯代码整段注释）→ 天空盒是唯一照明来源。
 *
 * three 侧等价物：
 *   - 背景：自绘天空穹顶（等距柱状采样 + tint/exposure/rotation），保证 tint 逐通道生效；
 *     `scene.background` 无法做逐通道 tint，因此不用它。
 *   - IBL：`scene.environment = PMREM(同一张 EXR)`，`scene.environmentIntensity = 环境光强度`。
 *     近似说明：Unity 的 ambientIntensity（漫反射 SH）与 reflectionIntensity（镜面反射）可独立调节，
 *     three 的环境贴图同时驱动漫反射与镜面，这里用 `环境光强度` 映射前者、各材质的
 *     `envMapIntensity` 映射后者（同一材质内两者会被一起缩放，属已知近似）。
 */

const MANIFEST_URL = 'skyboxes/manifest.json';

/** Unity Cubemap 天空盒的 tint 增益（shader 内 tint * 2） */
const UNITY_TINT_GAIN = 2;

export class SkyboxLibrary {
  /**
   * @param {import('three').WebGLRenderer} renderer
   * @param {import('three').Scene} scene
   */
  constructor(renderer, scene) {
    this.renderer = renderer;
    this.scene = scene;

    /** @type {Array<{id:string,name:string,file:string,defaults:object}>} */
    this.entries = [];
    /** @type {Map<string, {exr:import('three').Texture, pmrem:import('three').Texture, url:string}>} */
    this._cache = new Map();
    /** @type {{id:string, tint:[number,number,number], exposure:number, rotation:number, ambientIntensity:number, reflectionIntensity:number}|null} */
    this.state = null;
    this._pmrem = new THREE.PMREMGenerator(renderer);
    this._pmrem.compileEquirectangularShader();

    this.dome = createDome();
    this.dome.visible = false;
    scene.add(this.dome);
  }

  async init() {
    const res = await fetch(MANIFEST_URL);
    if (!res.ok) throw new Error(`天空盒清单读取失败：${res.status} ${MANIFEST_URL}`);
    const data = await res.json();
    this.entries = data.skyboxes ?? [];
    if (this.entries.length === 0) throw new Error('天空盒清单为空');
    await this.select(this.entries[0].id);
    return this.state;
  }

  entry(id) {
    return this.entries.find(e => e.id === id) ?? this.entries[0];
  }

  /** 选择天空盒（用其 defaults 重置参数），返回新状态 */
  async select(id) {
    const entry = this.entry(id);
    const asset = await this._load(entry);
    this.state = {
      id: entry.id,
      tint: [...entry.defaults.tint],
      exposure: entry.defaults.exposure,
      rotation: entry.defaults.rotation,
      ambientIntensity: entry.defaults.ambientIntensity,
      reflectionIntensity: entry.defaults.reflectionIntensity,
    };
    this.scene.environment = asset.pmrem;
    this._applyUniforms();
    return this.state;
  }

  /** 调整参数（局部覆盖），返回新状态 */
  setParams(patch) {
    if (!this.state) return null;
    if (patch.tint) this.state.tint = [...patch.tint];
    for (const key of ['exposure', 'rotation', 'ambientIntensity', 'reflectionIntensity']) {
      if (patch[key] !== undefined) this.state[key] = Number(patch[key]);
    }
    this._applyUniforms();
    return this.state;
  }

  /** 恢复当前天空盒在 Unity 材质里的原始参数 */
  resetParams() {
    if (!this.state) return null;
    const entry = this.entry(this.state.id);
    return this.setParams({ ...entry.defaults, tint: [...entry.defaults.tint] });
  }

  /** 背景可见性：游戏视角（棋盘 / 棋盘+豆子）显示天空盒，豆子特写用透明底衬 CSS 棋盘格 */
  setBackdropVisible(visible) {
    this.dome.visible = visible;
  }

  /** 每帧调用：穹顶跟随相机并缩放到裁剪面内（等效 Unity 的天空盒始终包住相机） */
  syncDome(camera) {
    if (!this.dome.visible) return;
    this.dome.position.copy(camera.position);
    // 穹顶半径必须落在 (near, far) 之间，否则会被近/远裁剪面切开；
    // 游戏视角 near = 1、far = 1000，豆子特写 near = 0.01、far = 50，故按相机自适应。
    const radius = Math.max(camera.near * 4, Math.min(camera.far * 0.5, 500));
    this.dome.scale.setScalar(radius);
    this.dome.updateMatrixWorld(true);
  }

  get ready() {
    return this.state !== null;
  }

  _applyUniforms() {
    const { tint, exposure, rotation } = this.state;
    const u = this.dome.material.uniforms;
    u.tint.value.set(tint[0], tint[1], tint[2]).multiplyScalar(UNITY_TINT_GAIN);
    u.exposure.value = exposure;
    u.rotation.value = THREE.MathUtils.degToRad(rotation);
    this.scene.environmentIntensity = this.state.ambientIntensity;
  }

  async _load(entry) {
    const cached = this._cache.get(entry.id);
    if (cached) {
      this.dome.material.uniforms.tex.value = cached.exr;
      return cached;
    }
    const url = `skyboxes/${entry.file}`;
    const exr = await new EXRLoader().loadAsync(url);
    exr.mapping = THREE.EquirectangularReflectionMapping;
    const pmrem = this._pmrem.fromEquirectangular(exr).texture;
    const asset = { exr, pmrem, url };
    this._cache.set(entry.id, asset);
    this.dome.material.uniforms.tex.value = exr;
    return asset;
  }

  dispose() {
    this._pmrem.dispose();
    for (const asset of this._cache.values()) {
      asset.exr.dispose();
      asset.pmrem.dispose();
    }
    this._cache.clear();
    this.dome.geometry.dispose();
    this.dome.material.dispose();
    this.scene.remove(this.dome);
  }
}

/** 等距柱状天空穹顶：tint / exposure / rotation 与 Unity Skybox/Cubemap 对齐 */
function createDome() {
  const geometry = new THREE.SphereGeometry(1, 48, 24);
  const material = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    depthTest: false,
    fog: false,
    uniforms: {
      tex: { value: null },
      tint: { value: new THREE.Color(1, 1, 1) },
      exposure: { value: 1 },
      rotation: { value: 0 },
    },
    vertexShader: /* glsl */`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */`
      uniform sampler2D tex;
      uniform vec3 tint;
      uniform float exposure;
      uniform float rotation;
      varying vec3 vDir;

      const float PI = 3.141592653589793;

      void main() {
        float c = cos(rotation), s = sin(rotation);
        vec3 dir = vec3(c * vDir.x - s * vDir.z, vDir.y, s * vDir.x + c * vDir.z);
        vec2 uv = vec2(atan(dir.z, dir.x), acos(clamp(dir.y, -1.0, 1.0))) / vec2(2.0 * PI, PI);
        vec3 col = texture2D(tex, uv).rgb * tint * exposure;
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
  });
  const dome = new THREE.Mesh(geometry, material);
  dome.frustumCulled = false;
  dome.renderOrder = -1000;
  dome.name = 'SkyDome';
  return dome;
}
