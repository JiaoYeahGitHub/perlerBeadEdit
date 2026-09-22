import './style.css';
import { Editor } from './components/Editor.js';

/**
 * Perler 豆子编辑器 — 入口
 *
 * 依据 Unity 工程 `E:/yujiaoWorkSpace/perler` 的豆子渲染实现（Master_Bead_Shader 系列 +
 * BeadMaterialBank + bead_config.json）还原：
 *   - 上传豆子模型（默认 Resources/GLB/perlerbead.glb）
 *   - 逐豆颜色（_BaseColor，sRGB→线性）与逐类型 BSDF（_MaterialType/_Roughness/_Metallic/_IOR/_Thickness）实时预览
 *   - 导出 256×256 豆子图标（背景 = 豆子颜色、散落铺满的同色豆子、13px 圆角透明留白）
 *   - 导出整体配置表 bead_config.json（含每类 _material BSDF 基础值）
 */
const editor = new Editor();
editor.init();
