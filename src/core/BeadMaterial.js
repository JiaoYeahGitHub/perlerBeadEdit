import * as THREE from 'three';

/**
 * BeadMaterial — Unity `Perler/Master_Bead_Shader` 的 three.js 等价物。
 *
 * Unity 侧 `surf surf(Standard)` 是金属工作流的 GGX 材质，其暴露给画面的量只有
 * Albedo / Metallic / Smoothness(= 1 - _Roughness) / Alpha，正好等于 three 的
 * `MeshStandardMaterial`（metalness / roughness / color / opacity；介质 F0 固定 0.04 ≈ IOR 1.45）。
 * 因此这里不引入 transmission / clearcoat —— 游戏 shader 里没有，加上会偏离游戏观感。
 *
 * 颜色：游戏侧 `BeadMaterialBank.Make`（perlerSteam
 * `Assets/Scripts/Perler/BeadMaterialBank.cs:84-88`）把 sRGB hex 显式 `Mathf.GammaToLinearSpace`
 * 后写入 `_BaseColor`；three 在 `ColorManagement.enabled`（默认 true）下 `Color.setStyle('#RRGGBB')`
 * 同样做精确的 sRGB→Linear 转换，两者一致。Alpha 两侧都不做转换。
 *
 * 注意（与游戏机制的差异，不影响观感）：游戏按 (类型 × 颜色) 烘焙 `sharedMaterial` 并开 GPU Instancing，
 * 编辑器只用一个共享材质对象 + InstancedMesh / 单颗克隆，不缓存材质。
 *
 * @param {THREE.Material|null} target 复用已有材质（避免逐次分配）
 * @param {{color:string, alpha:number}} bead
 * @param {import('./BeadTypes.js').BeadTypeDef} type
 * @returns {THREE.MeshStandardMaterial}
 */
export function applyBeadMaterial(target, bead, type) {
  const mat = target instanceof THREE.MeshStandardMaterial
    ? target
    : new THREE.MeshStandardMaterial();

  mat.color.setStyle(bead.color); // sRGB hex → 线性工作空间（等价 GammaToLinearSpace）
  mat.metalness = type.metallic;
  mat.roughness = type.roughness;
  mat.opacity = type.transparent ? bead.alpha : 1; // shader: o.Alpha = 1.0 / base.a
  mat.transparent = type.transparent;
  mat.depthWrite = !type.transparent; // shader: ZWrite Off
  mat.side = THREE.DoubleSide; // 源 GLB 材质 doubleSided: true
  mat.needsUpdate = true;
  return mat;
}

/**
 * 背景板材质：Unity 工程没有对应物，是图标构图的一部分。
 * 用无光照材质（MeshBasicMaterial），保证导出的图标背景像素 == 豆子颜色本身
 * （需求：图标背景图颜色与豆子颜色相同；参考图 bead_13.png 边缘底色 #ec8982 ≈ 配置色 #EC8C84）。
 */
export function applyPlateMaterial(target, bead) {
  const mat = target instanceof THREE.MeshBasicMaterial ? target : new THREE.MeshBasicMaterial();
  mat.color.setStyle(bead.color);
  mat.toneMapped = false; // 关闭色调映射，背景像素 = 精确的豆子颜色
  mat.needsUpdate = true;
  return mat;
}

/** sRGB hex → 0-1 分量（仅内部使用，导出的线性值走 baseColorLinear） */
function hexToRgb01(hex) {
  const c = hex.replace('#', '');
  return [
    parseInt(c.slice(0, 2), 16) / 255,
    parseInt(c.slice(2, 4), 16) / 255,
    parseInt(c.slice(4, 6), 16) / 255,
  ];
}

const srgbToLinear = (v) => (v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));

/**
 * sRGB hex → 线性 RGBA，即游戏 `_BaseColor` 的实际取值
 * （PerlerBead.cs:170-177：RGB 走 GammaToLinearSpace，Alpha 原样）。
 */
export function baseColorLinear(hex, alpha = 1) {
  const [r, g, b] = hexToRgb01(hex).map(srgbToLinear);
  return [r, g, b, alpha];
}
