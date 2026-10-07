import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { BEAD_LAYERS } from '../core/Layers.js';
import { SkyboxLibrary } from '../core/SkyboxLibrary.js';

/**
 * 光照：perlerSteam **没有任何实时灯光**——场景里的 Directional Light 物体 `m_IsActive: 0`
 * （`Perler.unity:141`），`PerlerGameManager.SetupScene` 里建主光/补光的代码整段被注释
 * （`:79-100`），全工程无 `AddComponent<Light>`。豆子的照明完全来自天空盒：
 * `ambientMode = Skybox`（`ambientIntensity 1`）+ `defaultReflectionMode = Skybox`
 * （`reflectionIntensity 1`）（`PerlerGameManager.cs:191-198`）。
 *
 * 因此这里的平行光默认强度为 **0**（不参与照明），仅作为美术调色的可选"补光"保留；
 * 真正的光照基准是 `SkyboxLibrary` 提供的天空盒（环境光 + 环境反射）。
 * 强度语义：three 的平行光辐照度 = color × intensity，BRDF 含 1/π，与 Unity 的
 * `albedo × NdotL × lightColor`（1/π 已折进力度）相差一个 π 因子，故要让"补光"与
 * Unity 侧同强度可比的取值为 intensity ≈ π。
 */
const KEY_LIGHT_DEFAULTS = {
  color: 0xfff4d6, // perlerSteam 场景灯颜色 #FFF4D6（当前 inactive，仅作补光默认值）
  direction: [0.321, 0.766, 0.556],
  intensity: 0,
};

/**
 * Viewport — three.js 渲染视口：WebGL 渲染器 + 天空盒光照 + 交互相机 + 逐帧循环。
 *
 * 相机由各模式注册的取景函数摆放（`setFramer`）：
 *   - 「只展示豆子」：`BeadStage.framePreview`（3/4 视角看单颗豆子，图层 preview）；
 *   - 「只展示棋盘」/「棋盘 + 豆子」：`BoardStage.frameGameView`（正俯视 + Unity FOV 100）。
 * 图标内容（底板 + 散落豆子）在图层 0，只被 `BeadStage.iconCamera` 看到。
 *
 * 渲染器开启 alpha（清屏透明）：豆子模式由 CSS 棋盘背景衬底；游戏视角模式则由天空穹顶铺满背景。
 */
export class Viewport {
  constructor(container, scene) {
    this.container = container;
    this.scene = scene;
    this._animationId = null;
    this._framer = null;

    this._init();

    /** 天空盒（光照基准 + 游戏视角背景） */
    this.skybox = new SkyboxLibrary(this.renderer, scene);
    this.skybox.dome.layers.set(BEAD_LAYERS.preview); // 天空只进交互视口，不进图标渲染
    /** 天空盒就绪的 Promise（导出图标前可 await，确保环境光/反射已生效） */
    this.envReady = this.skybox.init();

    this._animate();
  }

  _init() {
    const { clientWidth: w, clientHeight: h } = this.container;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0); // 透明底
    this.renderer.shadowMap.enabled = false; // 游戏豆子/棋盘都不接收阴影
    this.renderer.toneMapping = THREE.NoToneMapping; // 游戏无色调映射（Built-in 无 PostProcess）
    this.container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(45, (w || 1) / (h || 1), 0.01, 500);
    this.camera.layers.set(BEAD_LAYERS.preview); // 交互视口只看 preview 层

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.1;
    this.controls.minDistance = 0.3;
    this.controls.maxDistance = 200;
    this.controls.target.set(0, 0, 0);

    // 可选补光：默认强度 0 = 与游戏一致（游戏无实时灯）
    this.keyLight = new THREE.DirectionalLight(KEY_LIGHT_DEFAULTS.color, KEY_LIGHT_DEFAULTS.intensity);
    this._setKeyLightPosition(KEY_LIGHT_DEFAULTS.direction);
    this.keyLight.layers.enable(BEAD_LAYERS.preview);
    this.scene.add(this.keyLight);

    this._resizeObserver = new ResizeObserver(() => this._resize());
    this._resizeObserver.observe(this.container);
  }

  _setKeyLightPosition(direction) {
    this.keyLight.position.fromArray(direction).normalize().multiplyScalar(100);
  }

  /** 补光参数（颜色 / 方向 / 强度）；强度 0 即关闭 */
  setKeyLight(patch = {}) {
    if (patch.color !== undefined) this.keyLight.color.set(patch.color);
    if (patch.direction) this._setKeyLightPosition(patch.direction);
    if (patch.intensity !== undefined) this.keyLight.intensity = Math.max(0, Number(patch.intensity));
  }

  /** 注册取景函数（由各模式提供）：fn(camera, target) 摆放相机并写回注视点 */
  setFramer(fn) {
    this._framer = fn;
    this.resetView();
  }

  setTool(tool) {
    this.controls.enableRotate = tool !== 'none';
    this.controls.enablePan = tool !== 'select';
    this.controls.enableZoom = true;
  }

  resetView() {
    if (this._framer) {
      this._framer(this.camera, this.controls.target);
    } else {
      this.camera.position.set(1.2, 1.7, 1.2);
      this.controls.target.set(0, 0, 0);
    }
    this.controls.update();
  }

  _resize() {
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    if (w === 0 || h === 0) return;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  _animate() {
    this._animationId = requestAnimationFrame(() => this._animate());
    this.controls.update();
    this.skybox.syncDome(this.camera);
    this.renderer.render(this.scene, this.camera);
  }

  /**
   * 以指定相机渲染到 size×size 的 2D 画布（透明底），随后恢复实时画布尺寸与视图。
   * 全程同步执行：不产生可见闪烁，也无需 preserveDrawingBuffer。
   */
  renderToCanvas(camera, size) {
    const r = this.renderer;
    const prevRatio = r.getPixelRatio();
    const prevW = this.container.clientWidth;
    const prevH = this.container.clientHeight;

    r.setPixelRatio(1);
    r.setSize(size, size, false);
    r.render(this.scene, camera);

    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    canvas.getContext('2d').drawImage(r.domElement, 0, 0);

    r.setPixelRatio(prevRatio);
    r.setSize(prevW, prevH, false);
    r.render(this.scene, this.camera);
    return canvas;
  }

  dispose() {
    if (this._animationId) cancelAnimationFrame(this._animationId);
    this._resizeObserver?.disconnect();
    this.controls.dispose();
    this.skybox.dispose();
    this.renderer.dispose();
  }
}
