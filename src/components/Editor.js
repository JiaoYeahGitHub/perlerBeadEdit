import { Viewport } from './Viewport.js';
import { BeadLibrary } from '../core/BeadLibrary.js';
import { BeadStage, ICON_SPEC } from '../core/BeadStage.js';
import { BoardStage, BOARD_SPEC } from '../core/BoardStage.js';
import { BeadModelLoader, disposeObject, DEFAULT_BOARD_MODEL } from '../core/BeadModelLoader.js';
import { IconExporter } from '../exporters/IconExporter.js';
import { buildZip } from '../exporters/ZipWriter.js';
import { canvasToBlob, canvasToBytes, downloadBlob, downloadText } from '../exporters/downloads.js';
import { BEAD_TYPES, CURRENCIES } from '../core/BeadTypes.js';
import { baseColorLinear } from '../core/BeadMaterial.js';

/**
 * Editor — Perler 编辑器主控（对标 Unity 工程 perlerSteam）。
 *
 * 三种展示模式（`#mode-switch`）：
 *   - `bead`  只展示豆子：单颗豆子 + 逐豆颜色 / 逐类型 BSDF 编辑 + 256×256 图标导出；
 *   - `board` 只展示棋盘：上传棋盘瓦片模型，按 N×N（默认 1）阵列，正俯视游戏视角；
 *   - `scene` 棋盘 + 豆子：盘面默认 32×32，用选定的豆子每格一颗，模拟关卡场景。
 *
 * 光照基准 = `SkyboxLibrary`（游戏里没有任何实时灯，照明来自天空盒的环境光 + 环境反射）。
 * 导出的豆子图标仍走图层 0 的独立图标场景，不受棋盘 / 天空盒可见性影响。
 */
export class Editor {
  constructor() {
    this._library = new BeadLibrary();
    this._stage = new BeadStage();
    this._board = new BoardStage(this._stage.scene);
    /** 豆子模型模板加载器 */
    this._loader = new BeadModelLoader();
    /** 棋盘瓦片模板加载器（默认 public/models/perlergrid.glb） */
    this._boardLoader = new BeadModelLoader(DEFAULT_BOARD_MODEL);
    this._iconExporter = null;
    /** @type {Map<string,{canvas:HTMLCanvasElement,url:string,version:string}>} 豆子 id → 已生成图标 */
    this._iconCache = new Map();
    /** @type {{name:string,root:import('three').Object3D}|null} 豆子模板 */
    this._model = null;
    /** @type {{name:string,root:import('three').Object3D}|null} 棋盘瓦片模板 */
    this._boardModel = null;
    /** @type {'bead'|'board'|'scene'} */
    this._mode = 'bead';
    /** 场景模式参数（盘面大小 / 视距 / 用哪颗豆子 / 可见性 / 随机填充） */
    this._scene = {
      cols: BOARD_SPEC.defaultCols,
      rows: BOARD_SPEC.defaultRows,
      distance: BOARD_SPEC.camera.defaultDistance,
      beadId: null,
      showBoard: true,
      showBeads: true,
      fillRatio: BOARD_SPEC.defaultFillRatio,
      fillSeed: BOARD_SPEC.defaultFillSeed,
    };
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
    this._boardLoader.onChange(model => this._onBoardTemplateChanged(model));

    this._viewport = new Viewport(container, this._stage.scene);
    this._iconExporter = new IconExporter(this._viewport, this._stage);

    this._wireToolbar();
    this._wirePanelTabs();
    this._wireModeSwitch();
    this._wireBeadList();
    this._wireBeadProps();
    this._wireBsdfControls();
    this._wireModelUpload();
    this._wireBoardUpload();
    this._wireSkybox();
    this._wireScene();
    this._wireExport();

    this._applyMode(this._mode);
    this._sync();

    this._viewport.envReady
      .catch(err => this._notify(`天空盒加载失败：${err.message}`, 'error'))
      .then(state => {
        if (state) this._syncSkyboxFields();
      })
      .finally(() => {
        // 天空盒（环境光/反射来源）就绪后再补一次同步，避免首张图标缺少环境光
        this._envReady = true;
        this._scheduleSync();
      });

    try {
      await this._loader.loadDefault();
    } catch (err) {
      this._notify(`默认豆子模型加载失败：${err.message}`, 'error');
    }
    try {
      await this._boardLoader.loadDefault();
    } catch (err) {
      this._notify(`默认棋盘模型加载失败：${err.message}`, 'error');
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

    // 盘上豆子：场景模式用「场景」页选定的豆子（默认跟随当前编辑的豆子）
    const scene = this._sceneBead();
    this._board.setBeadStyle(scene.bead, scene.type);

    this._renderBeadList();
    this._syncBeadFields(bead, type);
    this._syncBsdfFields(type);
    this._refreshActiveIcon(bead, type);
    this._syncStatusLine(bead, type);
    this._syncSceneFields();
    this._syncConfigPreview();
  }

  /** 场景模式当前使用的豆子：显式选择优先，否则跟随正在编辑的豆子 */
  _sceneBead() {
    const picked = this._scene.beadId ? this._library.beads.find(b => b.id === this._scene.beadId) : null;
    const bead = picked ?? this._library.active;
    return { bead, type: this._library.getTypeDef(bead.typeIndex) };
  }

  _syncStatusLine(bead, type) {
    const total = this._library.beads.length;
    const index = this._library.beads.indexOf(bead) + 1;
    const badge = document.getElementById('bead-badge');
    if (badge) badge.textContent = `${bead.name} · ${type.key} · ${bead.color}`;

    const modeBadge = document.getElementById('mode-badge');
    if (modeBadge) modeBadge.textContent = this._modeSummary();

    const status = document.getElementById('status-bead');
    if (status) {
      status.textContent = `${index}/${total} 颗豆子 · 豆子模型 ${this._model?.name ?? '加载中…'} · 棋盘模型 ${this._boardModel?.name ?? '加载中…'}`;
    }
  }

  /** 视口左上角的一行状态：当前模式 + 关键尺寸 */
  _modeSummary() {
    if (this._mode === 'bead') return '只展示豆子 · 单颗预览 + 图标导出';
    if (this._mode === 'board') {
      return `只展示棋盘 · ${this._board.tiles} × ${this._board.tiles} 格 · 格距 ${BOARD_SPEC.cellSize}`;
    }
    const bead = this._sceneBead().bead;
    const cells = this._board.cols * this._board.rows;
    const fill = this._board.fillRatio >= 1 ? '铺满' : `${this._board.beadCount}/${cells} 颗`;
    return `棋盘 + 豆子 · ${this._scene.cols} × ${this._scene.rows} 格 · 豆子 ${bead?.name ?? '—'} · ${fill}`;
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
    this._board.setBeadTemplate(model); // 盘上豆子用同一份原始模板
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
    const sky = this._viewport?.skybox?.state;
    const skybox = sky
      ? [sky.id, sky.tint.join(','), sky.exposure, sky.rotation, sky.ambientIntensity, sky.reflectionIntensity].join(',')
      : '';
    return [
      bead.color, bead.alpha, type.index, type.roughness, type.metallic,
      this._model?.name ?? '', skybox, this._viewport?.keyLight.intensity ?? 0,
    ].join('|');
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
    const sky = this._viewport.skybox.state;
    return JSON.stringify(this._library.toConfig({
      model: this._model?.name ?? null,
      beadCount: this._library.beads.length,
      iconSize: [ICON_SPEC.size, ICON_SPEC.size],
      board: {
        model: this._boardModel?.name ?? null,
        cellSize: BOARD_SPEC.cellSize,
        tileY: BOARD_SPEC.tileY,
        sceneCols: this._scene.cols,
        sceneRows: this._scene.rows,
        fillRatio: this._board.fillRatio,
        fillSeed: this._board.fillSeed,
        beadCount: this._board.beadCount,
      },
      lighting: sky ? {
        skybox: sky.id,
        tint: sky.tint,
        exposure: sky.exposure,
        rotation: sky.rotation,
        ambientIntensity: sky.ambientIntensity,
        reflectionIntensity: sky.reflectionIntensity,
        keyLightIntensity: this._viewport.keyLight.intensity,
      } : null,
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

  // ─── 展示模式 ──────────────────────────────────────

  _wireModeSwitch() {
    document.querySelectorAll('#mode-switch .seg-btn').forEach(btn => {
      btn.addEventListener('click', () => this._applyMode(btn.dataset.mode));
    });
  }

  /**
   * 切换展示模式：可见性 + 相机取景 + 面板聚焦。
   * 图标渲染走图层 0 的独立图标场景，与这里的可见性无关（导出功能在三种模式下都可用）。
   */
  _applyMode(mode) {
    this._mode = ['bead', 'board', 'scene'].includes(mode) ? mode : 'bead';

    document.querySelectorAll('#mode-switch .seg-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === this._mode);
    });

    const isBead = this._mode === 'bead';
    this._stage.setPreviewVisible(isBead);
    this._syncBoardVisibility();
    this._viewport.skybox.setBackdropVisible(!isBead);

    if (isBead) {
      this._viewport.setFramer((camera, target) => this._stage.framePreview(camera, target));
    } else {
      this._viewport.setFramer((camera, target) =>
        this._board.frameGameView(camera, target, this._scene.distance));
    }

    if (this._mode === 'scene') {
      this._board.setBoardSize(this._scene.cols, this._scene.rows);
      this._board.setBeadFill({ ratio: this._scene.fillRatio, seed: this._scene.fillSeed });
    } else this._board.setTileCount(this._board.tiles);

    this._viewport.resetView();
    this._scheduleSync();
  }

  /** 棋盘 / 盘上豆子的可见性（「场景」页的复选框 + 当前模式） */
  _syncBoardVisibility() {
    const scene = this._mode === 'scene';
    this._board.setVisible(
      this._mode === 'board' || (scene && this._scene.showBoard),
      scene && this._scene.showBeads,
    );
  }

  // ─── 棋盘模型 ──────────────────────────────────────

  _wireBoardUpload() {
    const dropZone = document.getElementById('board-drop-zone');
    const fileInput = document.getElementById('board-file-input');

    document.getElementById('btn-board-select-file')?.addEventListener('click', () => fileInput?.click());
    fileInput?.addEventListener('change', () => {
      if (fileInput.files.length > 0) this._loadBoardFile(fileInput.files[0]);
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
      if (e.dataTransfer.files.length > 0) this._loadBoardFile(e.dataTransfer.files[0]);
    });
    document.getElementById('btn-default-board-model')?.addEventListener('click', () => this._loadBoardFile(null));

    const tiles = document.getElementById('board-tiles');
    tiles?.addEventListener('input', () => {
      this._board.setTileCount(tiles.value);
      setText('val-board-tiles', String(this._board.tiles));
      if (this._mode === 'board') this._viewport.resetView();
      this._scheduleSync();
    });

    const cols = document.getElementById('scene-cols');
    const rows = document.getElementById('scene-rows');
    const applySize = () => {
      this._board.setBoardSize(cols?.value, rows?.value);
      if (cols) cols.value = String(this._board.cols);
      if (rows) rows.value = String(this._board.rows);
      if (this._mode === 'scene') this._viewport.resetView();
      this._scheduleSync();
    };
    cols?.addEventListener('change', applySize);
    rows?.addEventListener('change', applySize);
  }

  async _loadBoardFile(file) {
    try {
      if (file) await this._boardLoader.loadFromFile(file);
      else await this._boardLoader.loadDefault();
      this._notify(`棋盘模型：${this._boardLoader.current.name}`, 'success');
    } catch (err) {
      this._notify(`棋盘模型加载失败：${err.message}`, 'error');
    }
  }

  _onBoardTemplateChanged(model) {
    const previous = this._boardModel;
    this._boardModel = model;
    this._board.setTileTemplate(model);
    if (previous && previous.root !== model.root) disposeObject(previous.root);

    const info = document.getElementById('board-model-info');
    if (info) {
      info.innerHTML = `<div><span>名称</span><b>${escapeHtml(model.name)}</b></div>
        <div><span>三角面</span><b>${model.triangles.toLocaleString()}</b></div>
        <div><span>尺寸 (x/y/z)</span><b>${[model.size.x, model.size.y, model.size.z]
          .map(v => v.toFixed(3)).join(' / ')}</b></div>`;
    }
    if (this._mode !== 'bead') this._viewport.resetView();
    this._scheduleSync();
  }

  // ─── 光照 / 天空盒 ─────────────────────────────────

  _wireSkybox() {
    const key = document.getElementById('keylight-intensity');
    key?.addEventListener('input', () => {
      this._viewport.setKeyLight({ intensity: parseFloat(key.value) });
      setText('val-keylight-intensity', key.value);
      this._scheduleSync();
    });

    this._viewport.envReady.then(() => {
      const lib = this._viewport.skybox;

      const select = document.getElementById('skybox-select');
      if (select) {
        select.innerHTML = lib.entries
          .map(e => `<option value="${e.id}">${escapeHtml(e.name)}</option>`).join('');
        select.value = lib.state.id;
        select.addEventListener('change', async () => {
          try {
            await lib.select(select.value);
            this._syncSkyboxFields();
            this._notify(`天空盒：${lib.entry(select.value).name}`, 'success');
          } catch (err) {
            this._notify(`天空盒切换失败：${err.message}`, 'error');
          }
        });
      }

      for (const { id, key: param, valId } of [
        { id: 'skybox-exposure', key: 'exposure', valId: 'val-skybox-exposure' },
        { id: 'skybox-rotation', key: 'rotation', valId: 'val-skybox-rotation' },
        { id: 'skybox-ambient', key: 'ambientIntensity', valId: 'val-skybox-ambient' },
        { id: 'skybox-reflection', key: 'reflectionIntensity', valId: 'val-skybox-reflection' },
      ]) {
        const el = document.getElementById(id);
        el?.addEventListener('input', () => {
          lib.setParams({ [param]: parseFloat(el.value) });
          setText(valId, el.value);
          if (param === 'reflectionIntensity') this._applyReflectionIntensity();
          this._scheduleSync();
        });
      }

      const tint = document.getElementById('skybox-tint');
      tint?.addEventListener('input', () => {
        lib.setParams({ tint: hexToRgb01(tint.value) });
        this._scheduleSync();
      });

      document.getElementById('btn-skybox-reset')?.addEventListener('click', () => {
        lib.resetParams();
        this._syncSkyboxFields();
        this._notify('已恢复天空盒的 Unity 材质默认值', 'success');
      });

      this._syncSkyboxFields();
    }).catch(() => { /* 失败提示已在 init 里给出 */ });
  }

  _syncSkyboxFields() {
    const lib = this._viewport.skybox;
    if (!lib.ready) return;
    const { id, tint, exposure, rotation, ambientIntensity, reflectionIntensity } = lib.state;
    const entry = lib.entry(id);

    const select = document.getElementById('skybox-select');
    if (select) select.value = id;
    const tintEl = document.getElementById('skybox-tint');
    if (tintEl) tintEl.value = rgb01ToHex(tint);
    setValue('skybox-exposure', 'val-skybox-exposure', exposure);
    setValue('skybox-rotation', 'val-skybox-rotation', rotation);
    setValue('skybox-ambient', 'val-skybox-ambient', ambientIntensity);
    setValue('skybox-reflection', 'val-skybox-reflection', reflectionIntensity);
    setText('skybox-source', `${entry.unityMaterial} · 贴图 ${entry.file}`);
    this._applyReflectionIntensity();
  }

  /**
   * 反射强度：Unity 的 `reflectionIntensity` 只影响镜面环境反射，
   * three 的环境贴图同时驱动漫反射与镜面，这里用各材质的 `envMapIntensity` 承载（已知近似）。
   */
  _applyReflectionIntensity() {
    const v = this._viewport.skybox.state?.reflectionIntensity ?? 1;
    this._stage.setEnvIntensity(v);
    this._board.setEnvIntensity(v);
  }

  // ─── 场景（棋盘 + 豆子） ───────────────────────────

  _wireScene() {
    document.getElementById('scene-bead-select')?.addEventListener('change', e => {
      this._scene.beadId = e.target.value || null;
      this._scheduleSync();
    });

    // 随机填充密度：改密度 = 同一份随机图案的子集（不会整盘重排）
    const ratio = document.getElementById('scene-fill-ratio');
    ratio?.addEventListener('input', () => {
      this._board.setBeadFill({ ratio: parseFloat(ratio.value) });
      this._scene.fillRatio = this._board.fillRatio;
      if (this._scene.fillRatio >= 1) this._scene.fillRatio = 1;
      setText('val-scene-fill-ratio', this._board.fillRatio.toFixed(2));
      this._scheduleSync();
    });

    // 换一批随机分布：只换种子（同一 seed + 同一盘面 → 同一份分布，可复现）
    document.getElementById('btn-random-beads')?.addEventListener('click', () => {
      this._scene.fillSeed = (Math.random() * 0xffffffff) >>> 0;
      this._board.setBeadFill({ seed: this._scene.fillSeed });
      this._scheduleSync();
      const cells = this._board.cols * this._board.rows;
      this._notify(`随机填充：${this._board.beadCount} / ${cells} 颗（种子 ${this._scene.fillSeed}）`, 'success');
    });

    const dist = document.getElementById('scene-distance');
    dist?.addEventListener('input', () => {
      this._scene.distance = parseFloat(dist.value);
      setText('val-scene-distance', dist.value);
      this._syncFitHint();
      if (this._mode !== 'bead') this._viewport.resetView();
    });

    document.getElementById('scene-show-board')?.addEventListener('change', e => {
      this._scene.showBoard = e.target.checked;
      this._syncBoardVisibility();
      this._scheduleSync();
    });
    document.getElementById('scene-show-beads')?.addEventListener('change', e => {
      this._scene.showBeads = e.target.checked;
      this._syncBoardVisibility();
      this._scheduleSync();
    });
  }

  _syncSceneFields() {
    const select = document.getElementById('scene-bead-select');
    if (select) {
      const options = this._library.beads.map(bead => {
        const type = this._library.getTypeDef(bead.typeIndex);
        return `<option value="${bead.id}">${escapeHtml(bead.name)} · ${type.key} · ${bead.color}</option>`;
      });
      const signature = options.join('|');
      if (select.dataset.signature !== signature) {
        select.dataset.signature = signature;
        const keep = this._scene.beadId;
        select.innerHTML = '<option value="">跟随当前编辑豆子</option>' + options;
        select.value = keep && this._library.beads.some(b => b.id === keep) ? keep : '';
      }
    }

    const cols = document.getElementById('scene-cols');
    if (cols && document.activeElement !== cols) cols.value = String(this._board.cols);
    const rows = document.getElementById('scene-rows');
    if (rows && document.activeElement !== rows) rows.value = String(this._board.rows);

    setValue('board-tiles', 'val-board-tiles', this._board.tiles);
    setValue('scene-fill-ratio', 'val-scene-fill-ratio', this._board.fillRatio);
    this._scene.fillRatio = this._board.fillRatio;

    const count = document.getElementById('scene-bead-count');
    if (count) {
      const cells = this._board.cols * this._board.rows;
      const pct = Math.round(this._board.fillRatio * 100);
      count.textContent = `已填充 ${this._board.beadCount} / ${cells} 颗 · 密度 ${pct}% · 种子 ${this._board.fillSeed}`;
    }

    this._syncFitHint();
  }

  /** 视距能否装下盘面的提示（游戏视距区间 20..90，FOV 100） */
  _syncFitHint() {
    const el = document.getElementById('scene-fit-hint');
    if (!el) return;
    const { w, h } = this._board.extent;
    const span = Math.max(w, h);
    const cover = this._board.fitAt(this._scene.distance);
    el.textContent = `盘面 ${span.toFixed(1)} 单位 · 视距 ${this._scene.distance.toFixed(0)} 可容纳 ${cover.toFixed(1)} 单位`
      + (span <= cover ? ' ✓ 完整入画' : ' ✗ 超出画面，请调大视距');
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

/** '#RRGGBB' → [0..1, 0..1, 0..1]（天空盒 tint 用，Unity 的 _Tint 是线性 0..1 分量） */
function hexToRgb01(hex) {
  const c = String(hex).replace('#', '');
  return [
    parseInt(c.slice(0, 2), 16) / 255,
    parseInt(c.slice(2, 4), 16) / 255,
    parseInt(c.slice(4, 6), 16) / 255,
  ];
}

function rgb01ToHex(rgb) {
  const to = v => Math.round(Math.min(1, Math.max(0, v)) * 255).toString(16).padStart(2, '0');
  return `#${to(rgb[0])}${to(rgb[1])}${to(rgb[2])}`;
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function nextTick() {
  return new Promise(resolve => setTimeout(resolve, 0));
}
