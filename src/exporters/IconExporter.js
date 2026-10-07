import { ICON_SPEC } from '../core/BeadStage.js';

/**
 * IconExporter — 导出 256×256 豆子图标。
 *
 * 构图规则对齐参考图 `public/bead_13.png`（取自旧工程 perler3D 的
 * `Assets/Resources/Beads/bead_13.png`；perlerSteam 已删除该目录，仅作规格参考）：
 *   1. 场景 = 豆子色的地面 + ICON_SPEC.beadCount 颗同色同材质豆子按重力堆叠（BeadStage，透视相机取景）；
 *   2. 用 iconCamera 渲染成透明底画布；
 *   3. 在渲染结果「之下」铺一层圆角矩形纯色（豆子颜色）—— 保证背景像素恒等于豆子颜色；
 *   4. 按同一圆角矩形做 alpha 遮罩 —— 内容区（13..242）保持不透明，四周透明。
 *
 * 命名沿用旧版约定 `Beads/<name>.png`（`Resources/Beads/` 目录在 perlerSteam 已删除，
 * 因此这里只是保持与旧数据一致的命名，落地位置由程序侧决定）。
 */
export class IconExporter {
  /**
   * @param {import('../components/Viewport.js').Viewport} viewport
   * @param {import('../core/BeadStage.js').BeadStage} stage
   */
  constructor(viewport, stage) {
    this.viewport = viewport;
    this.stage = stage;
  }

  /** 渲染当前场景 → 铺背景 → 圆角遮罩，返回 256×256 画布 */
  capture() {
    const canvas = this.viewport.renderToCanvas(this.stage.iconCamera, ICON_SPEC.size);
    const ctx = canvas.getContext('2d');
    fillRoundedBackground(ctx, this.stage.beadColor);
    applyRoundedMask(ctx);
    return canvas;
  }

  /** 文件内名（ZIP 与游戏 Resources/Beads 目录一致） */
  static fileName(bead) {
    return `${bead.name}.png`;
  }
}

/** 在已有渲染内容之下铺圆角矩形纯色（背景 = 豆子颜色，与豆子像素是否覆盖无关） */
function fillRoundedBackground(ctx, color) {
  const { size, inset, radius } = ICON_SPEC;
  ctx.save();
  ctx.globalCompositeOperation = 'destination-over';
  ctx.fillStyle = color;
  ctx.beginPath();
  roundRectPath(ctx, inset, inset, size - inset * 2, size - inset * 2, radius);
  ctx.fill();
  ctx.restore();
}

/** 内容区外清零 alpha：destination-in + 圆角矩形路径 */
function applyRoundedMask(ctx) {
  const { size, inset, radius } = ICON_SPEC;
  ctx.save();
  ctx.globalCompositeOperation = 'destination-in';
  ctx.fillStyle = '#000';
  ctx.beginPath();
  roundRectPath(ctx, inset, inset, size - inset * 2, size - inset * 2, radius);
  ctx.fill();
  ctx.restore();
}

/** 圆角矩形路径（圆弧圆角，与 BeadStage 底板几何一致） */
function roundRectPath(ctx, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}
