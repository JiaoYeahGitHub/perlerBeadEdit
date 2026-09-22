import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EXRLoader } from 'three/addons/loaders/EXRLoader.js';
import { BEAD_LAYERS } from '../core/BeadStage.js';

/**
 * 游戏光照还原（Unity 工程 perler）：
 *   - 场景唯一平行光：SampleScene.unity m_Color {1, 0.95686275, 0.8392157} = #FFF4D6，intensity 1；
 *     四元数 (0.40821788, -0.23456968, 0.10938163, 0.8754261) 的 forward = q·(0,0,1) = (-0.321, -0.766, 0.556)，
 *     取反得「指向光源」方向，Unity(z) → three(-z) 后为 (0.321, 0.766, 0.556)。
 *   - 环境：PerlerGameManager.EnterGameEnvironment 把 skybox 设为 Resources/SkyBox/forest.exr，
 *     ambientMode = Skybox、ambientIntensity = 1、reflectionIntensity = 1
 *     → three 侧等价于 scene.environment = PMREM(forest.exr)、environmentIntensity = 1
 *       （金属豆子的可见颜色 = baseColor × 环境反射，与游戏一致）。
 *   - Unity Built-in 管线没有后期/色调映射（无 PostProcess/Volume/Bloom），故 NoToneMapping。
 *   - 豆子 receiveShadows = false（PerlerBead.cs:57），因此整个场景不开阴影贴图。
 *
 * 光照强度说明：Unity 侧漫反射约定为 albedo × NdotL × lightColor（1/π 已折进力度），
 * three 的平行光辐照度为 color × intensity 且 BRDF 含 1/π，故取 intensity ≈ π 与游戏亮度对齐；
 * 该值经与参考图 public/bead_13.png 的实测亮度校准（见 Editor 中的常量）。
 */
const GAME_LIGHT = {
  color: 0xfff4d6,
  intensity: Math.PI,
  direction: [0.321, 0.766, 0.556],
};
const ENV_INTENSITY = 1;

/** 环境贴图：与游戏 skybox 同源的 HDRI */
const ENV_URL = 'forest.exr';

/**
 * Viewport — three.js 渲染视口：WebGL 渲染器 + 交互相机 + 游戏同源光照/环境 + 逐帧循环。
 *
 * 视口只显示单颗豆子（BeadStage.preview，图层 BEAD_LAYERS.preview）；
 * 图标内容（底板 + 散落豆子）在另一图层，由 IconExporter 用 iconCamera 单独渲染。
 * 渲染器开启 alpha（清屏透明）：实时预览时由 CSS 棋盘背景衬底，图标渲染则以透明底参与圆角遮罩合成。
 */
export class Viewport {
  constructor(container, scene) {
    this.container = container;
    this.scene = scene;
    this._animationId = null;
    this._framer = null;

    this._init();
    /** 环境贴图就绪的 Promise（图标导出前可 await，确保金属反射已生效） */
    this.envReady = this._loadEnvironment();
    this._animate();
  }

  _init() {
    const { clientWidth: w, clientHeight: h } = this.container;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0); // 透明底
    this.renderer.shadowMap.enabled = false; // 游戏豆子不接收阴影
    this.renderer.toneMapping = THREE.NoToneMapping; // 游戏无色调映射
    this.container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(45, (w || 1) / (h || 1), 0.01, 500);
    this.camera.layers.set(BEAD_LAYERS.preview); // 交互视口只看单颗预览豆子

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.1;
    this.controls.minDistance = 0.3;
    this.controls.maxDistance = 30;
    this.controls.target.set(0, 0, 0);

    const light = new THREE.DirectionalLight(GAME_LIGHT.color, GAME_LIGHT.intensity);
    light.position.set(...GAME_LIGHT.direction).normalize().multiplyScalar(10);
    light.layers.enable(BEAD_LAYERS.preview); // 光源需同时照到图标层与预览层
    this.scene.add(light);

    this.resetView();

    this._resizeObserver = new ResizeObserver(() => this._resize());
    this._resizeObserver.observe(this.container);
  }

  /**
   * 注册取景函数（由 BeadStage 提供）：fn(camera, target) 摆放相机并写回注视点。
   */
  setFramer(fn) {
    this._framer = fn;
    this.resetView();
  }

  async _loadEnvironment() {
    try {
      const exr = await new EXRLoader().loadAsync(ENV_URL);
      exr.mapping = THREE.EquirectangularReflectionMapping;
      const pmrem = new THREE.PMREMGenerator(this.renderer);
      this.scene.environment = pmrem.fromEquirectangular(exr).texture;
      this.scene.environmentIntensity = ENV_INTENSITY;
      pmrem.dispose();
      exr.dispose();
    } catch (err) {
      // 环境缺失时仅剩平行光：金属类豆子会明显变暗，需在界面上告知
      console.error(`[Viewport] 环境贴图 ${ENV_URL} 载入失败`, err);
      this.scene.environment = null;
      throw err;
    }
  }

  setTool(tool) {
    this.controls.enableRotate = tool === 'orbit';
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
    this.renderer.dispose();
  }
}
