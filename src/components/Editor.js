import { Viewport } from './Viewport.js';
import { BeadLibrary } from '../core/BeadLibrary.js';
import { BeadStage, ICON_SPEC } from '../core/BeadStage.js';
import { BeadModelLoader, disposeObject } from '../core/BeadModelLoader.js';
import { IconExporter } from '../exporters/IconExporter.js';
import { buildZip } from '../exporters/ZipWriter.js';
import { canvasToBlob, canvasToBytes, downloadBlob, downloadText } from '../exporters/downloads.js';
import { BEAD_TYPES, CURRENCIES } from '../core/BeadTypes.js';
import { baseColorLinear } from '../core/BeadMaterial.js';

/**
 * Editor — 拼豆豆子编辑器主控。
 *
 * 职责：
 *   1. 上传/切换豆子模型（模板网格）；
 *   2. 逐豆颜色 + 逐类型 BSDF 的实时预览（与 Unity 工程 perler 的 Master_Bead_Shader 对齐）；
 *   3. 生成 / 下载 256×256 豆子图标（背景 = 豆子颜色，散落铺满的同色豆子）；
 *   4. 导出整体配置表 JSON（bead_config.json + _material BSDF）。
 */
export class Editor {
  constructor() {
    this._library = new BeadLibrary();
    this._stage = new BeadStage();
    this._loader = new BeadModelLoader();
    this._iconExporter = null;
    /** @type {Map<string,{canvas:HTMLCanvasElement,url:string,version:string}>} 豆子 id → 已生成图标 */
    this._iconCache = new Map();
    /** @type {{name:string,root:import('three').Object3D}|null} */
    this._model = null;
    this._notifTimeout = null;
    this._syncHandle = 0;
    this._envReady = false;
    this._exporting = false;
  }

  async init() {
    const container = document.getElementById('canvas-container');
    if (!container) throw new Error('Viewport container not found');

    this._library.onChange(() => this._scheduleSync());
    this._loader.onChange(model => this._onTemplateChanged(model));

    this._viewport = new Viewport(container, this._stage.scene);
    this._viewport.setFramer((camera, target) => this._stage.framePreview(camera, target));
    this._iconExporter = new IconExporter(this._viewport, this._stage);

    this._wireToolbar();
    this._wirePanelTabs();
    this._wireBeadList();
    this._wireBeadProps();
    this._wireBsdfControls();
    this._wireModelUpload();
    this._wireExport();

    this._sync();

    this._viewport.envReady
      .catch(err => this._notify(`环境贴图加载失败：${err.message}`, 'error'))
      .finally(() => {
        // 环境贴图（金属/玻璃的反射来源）就绪后再补一次同步，避免首张图标缺少反射
        this._envReady = true;
        this._scheduleSync();
      });

    try {
      await this._loader.loadDefault();
    } catch (err) {
      this._notify(`默认豆子模型加载失败：${err.message}`, 'error');
    }
  }

  // ─── 同步 ──────────────────────────────────────────

  /** 合并同一帧内的多次变更（拖色/拖滑杆时避免重复渲染 DOM） */
  _scheduleSync() {
    if (this._syncHandle) return;
    this._syncHandle = requestAnimationFrame(() => {
      this._syncHandle = 0;
      this._sync();
    });
  }

  _sync() {
    const bead = this._library.active;
    const type = this._library.activeType;
    if (!bead) return;

    this._stage.setBead(bead, type);

    this._renderBeadList();
    this._syncBeadFields(bead, type);
    this._syncBsdfFields(type);
    this._refreshActiveIcon(bead, type);
    this._syncStatusLine(bead, type);
    this._syncConfigPreview();
  }

  _syncStatusLine(bead, type) {
    const total = this._library.beads.length;
    const index = this._library.beads.indexOf(bead) + 1;
    const badge = document.getElementById('bead-badge');
    if (badge) badge.textContent = `${bead.name} · ${type.key} · ${bead.color}`;
    const status = document.getElementById('status-bead');
    if (status) {
      status.textContent = `${index}/${total} 颗豆子 · 模型 ${this._model?.name ?? '加载中…'}`;
    }
  }

  // ─── 豆子列表 ──────────────────────────────────────

  _wireBeadList() {
    document.getElementById('btn-add-bead')?.addEventListener('click', () => {
      const bead = this._library.add({ typeIndex: this._library.activeType.index });
      this._notify(`已新建 ${bead.name}`, 'success');
    });

    document.getElementById('btn-duplicate-bead')?.addEventListener('click', () => {
      const bead = this._library.duplicate(this._library.activeId);
      if (bead) this._notify(`已复制为 ${bead.name}`, 'success');
    });

    document.getElementById('btn-remove-bead')?.addEventListener('click', () => {
      const bead = this._library.active;
      if (!bead) return;
      this._iconCache.delete(bead.id);
      this._library.remove(bead.id);
      this._notify(`已删除 ${bead.name}`, 'success');
    });
  }

  _renderBeadList() {
    const listEl = document.getElementById('bead-list');
    if (!listEl) return;

    const rows = this._library.beads.map(bead => {
      const type = this._library.getTypeDef(bead.typeIndex);
      const entry = this._iconCache.get(bead.id);
      const fresh = entry && entry.version === this._iconVersion(bead, type);
      const thumb = entry
        ? `<img class="bead-thumb${fresh ? '' : ' stale'}" src="${entry.url}" alt="" title="${fresh ? '' : '参数已改动，图标待重新生成'}" />`
        : `<span class="bead-thumb swatch" style="--c:${bead.color}"></span>`;
      const active = bead.id === this._library.activeId ? ' active' : '';
      return `<div class="bead-item${active}" data-id="${bead.id}">${thumb}
        <span class="bead-name">${escapeHtml(bead.name)}</span>
        <span class="bead-type type-${type.index}">${type.key}</span>
      </div>`;
    });

    listEl.innerHTML = rows.join('') || '<div class="empty-state">暂无豆子</div>';
    listEl.querySelectorAll('.bead-item').forEach(item => {
      item.addEventListener('click', () => this._library.setActive(item.dataset.id));
    });
  }

  // ─── 豆子属性 ──────────────────────────────────────

  _wireBeadProps() {
    const nameEl = document.getElementById('bead-name');
    const colorEl = document.getElementById('bead-color');
    const hexEl = document.getElementById('bead-color-hex');
    const alphaEl = document.getElementById('bead-alpha');

    nameEl?.addEventListener('change', () => this._library.update(this._library.activeId, { name: nameEl.value }));

    colorEl?.addEventListener('input', () => {
      hexEl.value = colorEl.value.toUpperCase();
      this._library.update(this._library.activeId, { color: colorEl.value });
    });

    hexEl?.addEventListener('change', () => {
      this._library.update(this._library.activeId, { color: hexEl.value });
      hexEl.value = this._library.active.color.toUpperCase();
    });

    alphaEl?.addEventListener('input', () => {
      this._library.update(this._library.activeId, { alpha: parseFloat(alphaEl.value) });
    });

    // 材质类型按钮：随类型表生成
    const typeList = document.getElementById('bead-types');
    if (typeList) {
      typeList.innerHTML = BEAD_TYPES
        .map(t => `<button class="preset-btn" data-type="${t.index}" title="${escapeHtml(t.desc)}">${t.label}</button>`)
        .join('');
      typeList.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', () =>
          this._library.update(this._library.activeId, { typeIndex: parseInt(btn.dataset.type, 10) }));
      });
    }
  }

  _syncBeadFields(bead, type) {
    const nameEl = document.getElementById('bead-name');
    if (nameEl && document.activeElement !== nameEl) nameEl.value = bead.name;

    const colorEl = document.getElementById('bead-color');
    if (colorEl) colorEl.value = bead.color;
    const hexEl = document.getElementById('bead-color-hex');
    if (hexEl && document.activeElement !== hexEl) hexEl.value = bead.color.toUpperCase();

    const alphaRow = document.getElementById('row-alpha');
    const alphaEl = document.getElementById('bead-alpha');
    if (alphaRow) alphaRow.hidden = !type.transparent;
    if (alphaEl && document.activeElement !== alphaEl) alphaEl.value = String(bead.alpha);
    setText('val-bead-alpha', bead.alpha.toFixed(2));

    setText('bead-basecolor-linear', baseColorLinear(bead.color, bead.alpha).map(v => v.toFixed(4)).join(', '));

    const typeDesc = document.getElementById('type-desc');
    if (typeDesc) typeDesc.textContent = `${type.desc} · ${type.shader} · ${type.materialName}`;

    document.querySelectorAll('#bead-types .preset-btn').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.dataset.type, 10) === type.index);
    });
  }

  // ─── BSDF（逐类型共享材质） ────────────────────────

  _wireBsdfControls() {
    const bindings = [
      { id: 'bsdf-roughness', key: 'roughness', valId: 'val-bsdf-roughness' },
      { id: 'bsdf-metallic', key: 'metallic', valId: 'val-bsdf-metallic' },
      { id: 'bsdf-ior', key: 'ior', valId: 'val-bsdf-ior' },
      { id: 'bsdf-thickness', key: 'thickness', valId: 'val-bsdf-thickness' },
    ];

    for (const { id, key, valId } of bindings) {
      const el = document.getElementById(id);
      if (!el) continue;
      el.addEventListener('input', () => {
        this._library.updateType(this._library.activeType.index, { [key]: parseFloat(el.value) });
        setText(valId, el.value);
      });
    }

    const currency = document.getElementById('bsdf-currency');
    if (currency) {
      currency.innerHTML = CURRENCIES.map(c => `<option value="${c}">${c}</option>`).join('');
      currency.addEventListener('change', () =>
        this._library.updateType(this._library.activeType.index, { currency: currency.value }));
    }

    document.getElementById('btn-reset-type')?.addEventListener('click', () => {
      this._library.resetType(this._library.activeType.index);
      this._notify(`已恢复 ${this._library.activeType.key} 的游戏默认 BSDF`, 'success');
    });
  }

  _syncBsdfFields(type) {
    setValue('bsdf-roughness', 'val-bsdf-roughness', type.roughness);
    setValue('bsdf-metallic', 'val-bsdf-metallic', type.metallic);
    setValue('bsdf-ior', 'val-bsdf-ior', type.ior);
    setValue('bsdf-thickness', 'val-bsdf-thickness', type.thickness);
    setText('bsdf-smoothness', (1 - type.roughness).toFixed(4));
    setText('bsdf-materialtype', `${type.index} (${type.key})`);
    setText('bsdf-shader', `${type.shader} · ${type.materialName}`);

    const currency = document.getElementById('bsdf-currency');
    if (currency) currency.value = type.currency;
  }

  // ─── 豆子模型 ──────────────────────────────────────

  _wireModelUpload() {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const btnSelect = document.getElementById('btn-select-file');

    btnSelect?.addEventListener('click', () => fileInput.click());
    fileInput?.addEventListener('change', () => {
      if (fileInput.files.length > 0) this._loadModelFile(fileInput.files[0]);
      fileInput.value = '';
    });

    dropZone?.addEventListener('dragover', e => {
      e.preventDefault();
      dropZone.classList.add('drag-over');
    });
    dropZone?.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
    dropZone?.addEventListener('drop', e => {
      e.preventDefault();
      dropZone.classList.remove('drag-over');
      if (e.dataTransfer.files.length > 0) this._loadModelFile(e.dataTransfer.files[0]);
    });

    document.getElementById('btn-default-model')?.addEventListener('click', () => this._loadModelFile(null));
  }

  async _loadModelFile(file) {
    try {
      if (file) await this._loader.loadFromFile(file);
      else await this._loader.loadDefault();
      this._notify(`豆子模型：${this._loader.current.name}`, 'success');
    } catch (err) {
      this._notify(`模型加载失败：${err.message}`, 'error');
    }
  }

  _onTemplateChanged(model) {
    const previous = this._model;
    this._model = model;
    this._stage.setTemplate(model);
    if (previous && previous.root !== model.root) disposeObject(previous.root);

    this._iconCache.clear(); // 换模型 → 全部图标需重新生成

    const info = document.getElementById('model-info');
    if (info) {
      info.innerHTML = `<div><span>名称</span><b>${escapeHtml(model.name)}</b></div>
        <div><span>三角面</span><b>${model.triangles.toLocaleString()}</b></div>
        <div><span>尺寸 (x/y/z)</span><b>${[model.size.x, model.size.y, model.size.z]
          .map(v => v.toFixed(3)).join(' / ')}</b></div>`;
    }
    this._scheduleSync();
  }

  // ─── 图标 ──────────────────────────────────────────

  /** 影响图标像素的全部输入；一致则复用已生成的图标 */
  _iconVersion(bead, type) {
    return [bead.color, bead.alpha, type.index, type.roughness, type.metallic, this._model?.name ?? ''].join('|');
  }

  _refreshActiveIcon(bead, type) {
    const entry = this._iconCache.get(bead.id);
    const version = this._iconVersion(bead, type);
    if (entry && entry.version === version) {
      this._showIconPreview(entry.url);
      return;
    }
    // 模板或环境贴图未就绪时先不渲染（envReady 完成后会重新同步）
    if (!this._model || !this._envReady) return;

    const canvas = this._iconExporter.capture();
    const url = canvas.toDataURL('image/png');
    this._iconCache.set(bead.id, { canvas, url, version });
    this._showIconPreview(url);
  }

  _showIconPreview(url) {
    const img = document.getElementById('icon-preview');
    if (img) img.src = url;
    const status = document.getElementById('icon-status');
    if (status) {
      status.textContent = `${ICON_SPEC.size} × ${ICON_SPEC.size} · ${ICON_SPEC.beadCount} 颗随机散落 · 透明留白 ${ICON_SPEC.inset}px · 圆角 ${ICON_SPEC.radius}px · 背景 = 豆子颜色`;
    }
  }

  /** 逐颗渲染全部豆子图标（生成与下载共用） */
  async _generateAllIcons() {
    if (!this._model) {
      this._setIconStatus('豆子模型未就绪，无法生成图标');
      return 0;
    }
    await this._viewport.envReady.catch(() => {});
    const beads = [...this._library.beads];
    let done = 0;
    for (const bead of beads) {
      const type = this._library.getTypeDef(bead.typeIndex);
      const version = this._iconVersion(bead, type);
      const cached = this._iconCache.get(bead.id);
      if (!cached || cached.version !== version) {
        this._stage.setBead(bead, type);
        const canvas = this._iconExporter.capture();
        this._iconCache.set(bead.id, { canvas, url: canvas.toDataURL('image/png'), version });
      }
      done++;
      if (done % 6 === 0) {
        this._setIconStatus(`生成中… ${done}/${beads.length}`);
        await nextTick(); // 让状态文字有机会上屏
      }
    }

    const active = this._library.active;
    const activeType = this._library.activeType;
    if (active) this._stage.setBead(active, activeType);
    this._renderBeadList();
    if (active) this._showIconPreview(this._iconCache.get(active.id)?.url ?? '');
    this._setIconStatus(`已生成 ${beads.length} 张图标`);
    return beads.length;
  }

  _setIconStatus(text) {
    const el = document.getElementById('icon-export-status');
    if (el) el.textContent = text;
  }

  // ─── 导出 ──────────────────────────────────────────

  _wireExport() {
    document.getElementById('btn-gen-icon')?.addEventListener('click', () => {
      const bead = this._library.active;
      if (!bead) return;
      this._iconCache.delete(bead.id);
      this._sync();
      this._notify(`已生成 ${bead.name} 图标`, 'success');
    });

    document.getElementById('btn-download-icon')?.addEventListener('click', async () => {
      const bead = this._library.active;
      if (!bead) return;
      const entry = await this._ensureIcon(bead);
      downloadBlob(await canvasToBlob(entry.canvas), IconExporter.fileName(bead));
      this._notify(`已下载 ${IconExporter.fileName(bead)}`, 'success');
    });

    document.getElementById('btn-gen-all-icons')?.addEventListener('click', async () => {
      if (this._exporting) return;
      this._exporting = true;
      try {
        const count = await this._generateAllIcons();
        this._notify(`已生成 ${count} 张图标`, 'success');
      } finally {
        this._exporting = false;
      }
    });

    document.getElementById('btn-download-icons')?.addEventListener('click', async () => {
      if (this._exporting) return;
      this._exporting = true;
      try {
        if (await this._generateAllIcons() === 0) return;
        const files = [];
        for (const bead of this._library.beads) {
          const entry = this._iconCache.get(bead.id);
          if (!entry) continue;
          files.push({ name: IconExporter.fileName(bead), data: await canvasToBytes(entry.canvas) });
        }
        downloadBlob(buildZip(files), 'bead_icons.zip');
        this._notify(`已打包 ${files.length} 张图标`, 'success');
      } finally {
        this._exporting = false;
      }
    });

    document.getElementById('btn-export-config')?.addEventListener('click', () => {
      downloadText(this._configJson(), 'bead_config.json');
      this._notify('已导出 bead_config.json', 'success');
    });
  }

  async _ensureIcon(bead) {
    const type = this._library.getTypeDef(bead.typeIndex);
    const version = this._iconVersion(bead, type);
    const cached = this._iconCache.get(bead.id);
    if (cached && cached.version === version) return cached;
    await this._viewport.envReady.catch(() => {});
    this._stage.setBead(bead, type);
    const canvas = this._iconExporter.capture();
    const entry = { canvas, url: canvas.toDataURL('image/png'), version };
    this._iconCache.set(bead.id, entry);
    const active = this._library.active;
    if (active) this._stage.setBead(active, this._library.activeType);
    return entry;
  }

  _configJson() {
    return JSON.stringify(this._library.toConfig({
      model: this._model?.name ?? null,
      beadCount: this._library.beads.length,
      iconSize: [ICON_SPEC.size, ICON_SPEC.size],
    }), null, 2);
  }

  /** 仅当「导出」页签可见时刷新预览，避免拖滑杆时反复重排大段 JSON */
  _syncConfigPreview() {
    const pre = document.getElementById('config-preview');
    if (!pre || !document.getElementById('tab-export')?.classList.contains('active')) return;
    pre.textContent = this._configJson();
  }

  // ─── 工具栏 / 面板标签 ────────────────────────────

  _wireToolbar() {
    const toolBtns = document.querySelectorAll('.tb-btn[data-tool]');
    toolBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        toolBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this._viewport.setTool(btn.dataset.tool);
      });
    });
    document.querySelector('.tb-btn[data-tool="orbit"]')?.classList.add('active');
    document.getElementById('btn-reset-view')?.addEventListener('click', () => this._viewport.resetView());

    document.addEventListener('keydown', e => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
      if (e.key.toLowerCase() === 'w') document.querySelector('.tb-btn[data-tool="orbit"]')?.click();
      if (e.key.toLowerCase() === 'e') document.querySelector('.tb-btn[data-tool="pan"]')?.click();
    });
  }

  _wirePanelTabs() {
    document.querySelectorAll('.panel-tabs').forEach(tabBar => {
      tabBar.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
          const parent = tab.closest('.panel');
          tabBar.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          parent.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
          document.getElementById(`tab-${tab.dataset.tab}`)?.classList.add('active');
          if (tab.dataset.tab === 'export') this._syncConfigPreview();
        });
      });
    });
  }

  // ─── 提示 ──────────────────────────────────────────

  _notify(msg, type = 'info') {
    const statusText = document.getElementById('status-text');
    if (statusText) statusText.textContent = msg;

    if (this._notifTimeout) clearTimeout(this._notifTimeout);
    document.querySelector('.notification')?.remove();

    const div = document.createElement('div');
    div.className = `notification ${type}`;
    div.textContent = msg;
    document.body.appendChild(div);

    this._notifTimeout = setTimeout(() => {
      div.remove();
      this._notifTimeout = null;
    }, 3000);
  }
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setValue(inputId, valueId, value) {
  const el = document.getElementById(inputId);
  if (el && document.activeElement !== el) el.value = String(value);
  setText(valueId, formatNum(value));
}

function formatNum(v) {
  return String(Math.round(v * 100) / 100);
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function nextTick() {
  return new Promise(resolve => setTimeout(resolve, 0));
}
