import './style.css';
import { Editor } from './components/Editor.js';

/**
 * Perler 编辑器 — 入口
 *
 * 对标 Unity 工程 **perlerSteam**（不是旧工程 perler3D）：
 *   - 豆子：`Assets/Scripts/Perler/BeadMaterialBank.cs` + `Resources/Shaders/Master_Bead_Shader*`
 *     （逐 (类型 × 颜色) 烘焙 sharedMaterial，`_BaseColor` 显式 gamma→linear）；
 *   - 光照：游戏**没有实时灯光**，照明只有天空盒的环境光 + 环境反射
 *     （`PerlerGameManager.EnterGameEnvironment`，`Perler.unity` 的场景灯 m_IsActive: 0），
 *     本编辑器以 `src/core/SkyboxLibrary.js` 为光照基准，天空盒资源与参数在
 *     `public/skyboxes/manifest.json` 里配置；
 *   - 棋盘：`Resources/GLB/perlergrid.glb` 单格瓦片 × 格距 2.6 阵列（`PerlerGrid.cs`），
 *     瓦片材质按 Built-in 管线下的 glTFast 透射降级渲染（alpha 0.4 / premultiplied / ZWrite Off）。
 *
 * 三种展示模式见 `Editor`：只展示棋盘 / 只展示豆子 / 棋盘 + 豆子。
 */
const editor = new Editor();
editor.init();
