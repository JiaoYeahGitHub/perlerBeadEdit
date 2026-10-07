/**
 * BeadTypes — 拼豆材质类型表。
 *
 * 逐字对应 Unity 工程 `perlerSteam` 的实现：
 *   - Assets/Resources/Shaders/Master_Bead_Shader.shader          （不透明：Basic / Matallic / Metta）
 *   - Assets/Resources/Shaders/Master_Bead_Shader_Transparent.shader（透明：Transparent，玻璃）
 *   - Assets/Scripts/Perler/BeadMaterialBank.cs:23-25             （每类材质的 BSDF 取值来源：Roughness/Metallic/Glass）
 *   - Assets/Scripts/Perler/BeadMaterialBank.cs:74-92             （逐 (类型×颜色) 烘焙材质，_BaseColor 显式 gamma→linear）
 *
 * 游戏内 BSDF 语义（Unity Built-in `surf Standard`，金属工作流）：
 *   o.Albedo     = _BaseColor.rgb（线性）
 *   o.Metallic   = _Metallic
 *   o.Smoothness = 1.0 - _Roughness
 *   o.Alpha      = 1.0（不透明）/ _BaseColor.a（透明）
 * `_MaterialType`、`_IOR`、`_Thickness` 在 shader 内声明并被 C# 赋值，但 surf() 从不读取，
 * 因此对画面没有任何影响（BeadMaterialBank.cs:69-73、shader 头部注释已记录），此处照样开放编辑与导出。
 */

/** @typedef {{index:number,key:string,label:string,desc:string,shader:string,materialName:string,currency:string,roughness:number,metallic:number,ior:number,thickness:number,transparent:boolean}} BeadTypeDef */

/** 材质分组顺序（= `BeadMaterialBank` 的类型索引 0..3；旧版 `bead_config.json` 的分组顺序相同） */
export const TYPE_ORDER = ['Basic', 'Matallic', 'Metta', 'Transparent'];

/** 可选货币（PlayerData.cs / GlobalConfig.cs） */
export const CURRENCIES = ['GrayBead', 'GoldBead', 'ColorfulBead'];

/** @type {BeadTypeDef[]} */
export const BEAD_TYPES = [
  {
    index: 0,
    key: 'Basic',
    label: 'Basic',
    desc: '基础 · 哑光塑料',
    shader: 'Shaders/Master_Bead_Shader',
    materialName: 'Bead_Type0',
    currency: 'GrayBead',
    roughness: 0.6,
    metallic: 0,
    ior: 1.45,
    thickness: 1,
    transparent: false,
  },
  {
    index: 1,
    key: 'Matallic',
    label: 'Matallic',
    desc: '金属 · 反射环境色',
    shader: 'Shaders/Master_Bead_Shader',
    materialName: 'Bead_Type1',
    currency: 'GoldBead',
    roughness: 0.35,
    metallic: 1,
    ior: 1.45,
    thickness: 1,
    transparent: false,
  },
  {
    index: 2,
    key: 'Metta',
    label: 'Metta',
    desc: '陶瓷 · 高粗糙',
    shader: 'Shaders/Master_Bead_Shader',
    materialName: 'Bead_Type2',
    currency: 'GoldBead',
    roughness: 0.85,
    metallic: 0,
    ior: 1.45,
    thickness: 1,
    transparent: false,
  },
  {
    index: 3,
    key: 'Transparent',
    label: 'Transparent',
    desc: '玻璃 · Alpha 混合 / ZWrite Off',
    shader: 'Shaders/Master_Bead_Shader_Transparent',
    materialName: 'Bead_Type3',
    currency: 'GoldBead',
    roughness: 0.05,
    metallic: 0,
    ior: 1.45,
    thickness: 1,
    transparent: true,
  },
];

/** 新建豆子的初始颜色（sRGB hex） */
export const DEFAULT_BEAD_COLOR = '#ffffff';

export function getType(index) {
  return BEAD_TYPES.find(t => t.index === index) ?? BEAD_TYPES[0];
}

/** 浅拷贝一份类型表（BeadLibrary 用以保存用户改动） */
export function cloneTypes() {
  return BEAD_TYPES.map(t => ({ ...t }));
}
