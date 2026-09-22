import { cloneTypes, DEFAULT_BEAD_COLOR, TYPE_ORDER } from './BeadTypes.js';
import { baseColorLinear } from './BeadMaterial.js';

const STORAGE_KEY = 'perler3d.bead-editor.v1';

const DEFAULT_ALPHA = 1; // 游戏 PerlerBead.SetBead → ApplyColor(color, 1f)：逐豆 alpha 恒为 1

/**
 * BeadLibrary — 豆子库：豆子（逐豆颜色）+ 材质类型（逐类型 BSDF）的唯一数据源。
 *
 * 与游戏数据结构对齐：
 *   - 逐豆：`{name, color}`（bead_config.json），另加 `_BaseColor.a`（透明 shader 读取的 alpha）；
 *   - 逐类型：`_MaterialType/_Roughness/_Metallic/_IOR/_Thickness` 走共享材质，同类豆子共用
 *     （BeadMaterialBank.cs:48-52 —— 游戏里 4 类 = 4 个共享 Material，逐豆只经 MPB 改颜色）。
 */
export class BeadLibrary {
  constructor() {
    this.beads = [];
    this.types = cloneTypes();
    this._activeId = null;
    this._seq = 0;
    this._listeners = new Set();
    this._restore();
    if (this.beads.length === 0) this.add();
    else if (!this.beads.some(b => b.id === this._activeId)) this._activeId = this.beads[0].id;
  }

  onChange(fn) {
    this._listeners.add(fn);
  }

  _emit() {
    for (const fn of this._listeners) fn(this);
  }

  get activeId() {
    return this._activeId;
  }

  get active() {
    return this.beads.find(b => b.id === this._activeId) ?? null;
  }

  /** 当前选中豆子所属的类型定义（取自本库的类型表，含用户改过的 BSDF 值） */
  get activeType() {
    return this.getTypeDef(this.active?.typeIndex ?? 0);
  }

  /** 按索引取类型定义（用户可改的 BSDF 值都在 this.types 上） */
  getTypeDef(index) {
    return this.types.find(t => t.index === index) ?? this.types[0];
  }

  /** 该类型下的豆子（导出时按类型分组用） */
  beadsOfType(index) {
    return this.beads.filter(b => b.typeIndex === index);
  }

  // ─── 豆子 CRUD ─────────────────────────────────────

  /**
   * 新建豆子。
   * @param {object} [patch] 覆盖字段（{name, color, alpha, typeIndex}）
   */
  add(patch = {}) {
    const bead = {
      id: `b${++this._seq}`,
      name: patch.name ?? this._nextName(),
      color: patch.color ?? DEFAULT_BEAD_COLOR,
      alpha: patch.alpha ?? DEFAULT_ALPHA,
      typeIndex: patch.typeIndex ?? 0,
    };
    this.beads.push(bead);
    this._activeId = bead.id;
    this._commit();
    return bead;
  }

  /** 复制豆子（颜色/类型一致，名字顺延） */
  duplicate(id) {
    const src = this.beads.find(b => b.id === id);
    if (!src) return null;
    return this.add({ color: src.color, alpha: src.alpha, typeIndex: src.typeIndex });
  }
  remove(id) {
    const idx = this.beads.findIndex(b => b.id === id);
    if (idx < 0) return;
    this.beads.splice(idx, 1);
    if (this.beads.length === 0) {
      this.add(); // 豆子库永远至少保留一颗，界面与预览始终有内容
      return;
    }
    if (this._activeId === id) {
      this._activeId = this.beads[Math.min(idx, this.beads.length - 1)].id;
    }
    this._commit();
  }

  update(id, patch) {
    const bead = this.beads.find(b => b.id === id);
    if (!bead) return;
    if (patch.name !== undefined) bead.name = sanitizeName(patch.name);
    if (patch.color !== undefined) bead.color = normalizeHex(patch.color);
    if (patch.alpha !== undefined) bead.alpha = clamp01(patch.alpha);
    if (patch.typeIndex !== undefined) bead.typeIndex = patch.typeIndex;
    this._commit();
  }

  setActive(id) {
    if (!this.beads.some(b => b.id === id) || this._activeId === id) return;
    this._activeId = id;
    this._emit();
  }

  // ─── 材质类型（共享 BSDF） ─────────────────────────

  /** 修改某类型的 BSDF 值（影响该类型下所有豆子的实时预览） */
  updateType(index, patch) {
    const type = this.types.find(t => t.index === index);
    if (!type) return;
    for (const key of ['roughness', 'metallic', 'ior', 'thickness']) {
      if (patch[key] !== undefined) type[key] = Math.max(0, Number(patch[key]) || 0);
    }
    if (patch.currency !== undefined) type.currency = patch.currency;
    this._commit();
  }

  /** 恢复该类型在游戏里的原始 BSDF 值（BeadMaterialBank.cs:49-52） */
  resetType(index) {
    const original = cloneTypes().find(t => t.index === index);
    if (!original) return;
    Object.assign(this.types.find(t => t.index === index), {
      roughness: original.roughness,
      metallic: original.metallic,
      ior: original.ior,
      thickness: original.thickness,
      currency: original.currency,
    });
    this._commit();
  }

  // ─── 持久化 ────────────────────────────────────────

  _nextName() {
    let max = 0;
    for (const b of this.beads) {
      const m = /^bead_(\d+)$/.exec(b.name);
      if (m) max = Math.max(max, parseInt(m[1], 10));
    }
    return `bead_${max + 1}`;
  }

  _commit() {
    this._persist();
    this._emit();
  }

  _persist() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        beads: this.beads,
        types: this.types,
        activeId: this._activeId,
        seq: this._seq,
      }));
    } catch {
      // 隐私模式 / 配额不足：编辑器仍可正常工作，仅不落盘
    }
  }

  _restore() {
    let raw = null;
    try {
      raw = localStorage.getItem(STORAGE_KEY);
    } catch {
      return false;
    }
    if (!raw) return false;
    try {
      const data = JSON.parse(raw);
      if (!Array.isArray(data.beads)) return false;
      this.beads = data.beads.map(b => ({
        id: b.id,
        name: b.name,
        color: normalizeHex(b.color),
        alpha: clamp01(b.alpha ?? DEFAULT_ALPHA),
        typeIndex: Number.isInteger(b.typeIndex) ? b.typeIndex : 0,
      }));
      // 用户改过的 BSDF 值叠加到当前类型表上（按 index 对齐，避免版本漂移）
      for (const t of data.types ?? []) {
        const target = this.types.find(x => x.index === t.index);
        if (!target) continue;
        const reset = cloneTypes().find(x => x.index === t.index);
        target.roughness = Number.isFinite(t.roughness) ? t.roughness : reset.roughness;
        target.metallic = Number.isFinite(t.metallic) ? t.metallic : reset.metallic;
        target.ior = Number.isFinite(t.ior) ? t.ior : reset.ior;
        target.thickness = Number.isFinite(t.thickness) ? t.thickness : reset.thickness;
        if (t.currency) target.currency = t.currency;
      }
      this._activeId = data.activeId ?? null;
      this._seq = Number.isInteger(data.seq) ? data.seq : this.beads.length;
      return true;
    } catch {
      return false;
    }
  }

  // ─── 导出 ──────────────────────────────────────────

  /**
   * 生成游戏可用的配置表。
   *
   * 顶层 4 个键（Basic/Matallic/Metta/Transparent）与
   * `Assets/Resources/Configs/bead_config.json` 结构完全一致，可整体替换该文件
   * （Unity `JsonUtility` 会忽略下划线开头的额外字段，因此 BSDF 数据可安全附带）。
   */
  toConfig(meta = {}) {
    const out = {};
    for (const key of TYPE_ORDER) {
      const type = this.types.find(t => t.key === key);
      const beads = this.beadsOfType(type.index);
      out[key] = {
        currency: type.currency,
        _material: materialRow(type),
        beads: beads.map(b => ({
          name: b.name,
          color: b.color.toUpperCase(),
          _alpha: round(b.alpha),
          _baseColor: baseColorLinear(b.color, b.alpha).map(round),
          _icon: `Beads/${b.name}.png`,
        })),
      };
    }
    out._meta = {
      generator: 'perler3d-edt',
      generatedAt: new Date().toISOString(),
      source: 'Unity 工程 perler (Assets/Scripts/Perler/BeadMaterialBank.cs + Master_Bead_Shader*)',
      colorSpace: 'beads[].color 为 sRGB hex；_baseColor 为写入 _BaseColor 的线性 RGBA（GammaToLinearSpace）',
      shaderNote: '_MaterialType/_IOR/_Thickness 在 Master_Bead_Shader 内被赋值但 surf() 未读取，不影响画面',
      ...meta,
    };
    return out;
  }
}

/** 类型 → 一行 BSDF 表（数值与 Unity 共享材质逐项对应） */
function materialRow(type) {
  return {
    _MaterialType: type.index,
    shader: type.shader,
    materialName: type.materialName,
    _Roughness: round(type.roughness),
    _Smoothness: round(1 - type.roughness),
    _Metallic: round(type.metallic),
    _IOR: round(type.ior),
    _Thickness: round(type.thickness),
    _Transparent: type.transparent,
  };
}

function round(v) {
  return Math.round(v * 10000) / 10000;
}

function clamp01(v) {
  const n = Number(v);
  return Number.isFinite(n) ? Math.min(1, Math.max(0, n)) : DEFAULT_ALPHA;
}

function normalizeHex(hex) {
  if (typeof hex !== 'string') return DEFAULT_BEAD_COLOR;
  const m = /^#?([0-9a-fA-F]{6})$/.exec(hex.trim());
  return m ? `#${m[1].toLowerCase()}` : DEFAULT_BEAD_COLOR;
}

function sanitizeName(name) {
  const s = String(name).trim().replace(/[\\/:*?"<>|]/g, '_');
  return s.length > 0 ? s : 'bead';
}
