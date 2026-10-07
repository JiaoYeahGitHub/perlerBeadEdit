/**
 * 渲染图层划分（three 的 `Object3D.layers` 过滤）。
 *
 * 0 (icon)    图标渲染专用：底板 + 堆叠豆子 —— 只被 `BeadStage.iconCamera` 看到，
 *             用于导出 256×256 豆子图标（`IconExporter` 用该相机单独渲染）。
 * 1 (preview) 交互视口内容：单颗预览豆子（「只展示豆子」）、天空穹顶、
 *             棋盘瓦片与盘上豆子（「只展示棋盘」/「棋盘 + 豆子」）。
 *             这样切换模式时不会让棋盘/豆子混进图标渲染。
 */
export const BEAD_LAYERS = { icon: 0, preview: 1 };

/** 把对象（及其所有网格子节点）放到指定图层 */
export function assignLayer(root, layer) {
  root.traverse(child => child.layers.set(layer));
}
