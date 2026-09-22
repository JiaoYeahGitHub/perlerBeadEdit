import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { STLLoader } from 'three/addons/loaders/STLLoader.js';

/** 默认豆子模型：与 Unity 工程 `Assets/Resources/GLB/perlerbead.glb` 逐字节相同的运行时网格 */
const DEFAULT_BEAD_MODEL = {
  name: 'perlerbead.glb',
  url: 'perlerbead.glb',
};

const EXTENSIONS = ['glb', 'gltf', 'fbx', 'obj', 'stl', 'stla', 'stlb'];

/**
 * BeadModelLoader — 上传/加载「豆子模型」模板。
 *
 * 游戏里所有豆子都是同一个网格 `Resources/GLB/perlerbead.glb`（PerlerGrid.cs:714-715
 * `BeadFitScale = _cellSize / beadMesh.bounds.size.x` 缩放后按格摆放），
 * 编辑器沿用同一规则：模板归一化后由 BeadStage 复制出散落的豆子。
 */
export class BeadModelLoader {
  constructor() {
    this._loaders = {
      gltf: new GLTFLoader(),
      fbx: new FBXLoader(),
      obj: new OBJLoader(),
      stl: new STLLoader(),
    };
    /** @type {{name:string, root:THREE.Object3D, size:THREE.Vector3, triangles:number, ext:string}|null} */
    this.current = null;
    this._listeners = new Set();
  }

  onChange(fn) {
    this._listeners.add(fn);
  }

  _emit() {
    for (const fn of this._listeners) fn(this.current);
  }

  /** 按扩展名加载本地文件（File），返回可用于散落摆放的模板 */
  async loadFromFile(file) {
    const ext = file.name.split('.').pop().toLowerCase();
    if (!EXTENSIONS.includes(ext)) {
      throw new Error(`不支持的模型格式: .${ext}`);
    }
    const url = URL.createObjectURL(file);
    try {
      return await this._adopt(url, ext, file.name);
    } finally {
      URL.revokeObjectURL(url);
    }
  }

  /** 加载内置默认模型（public/perlerbead.glb） */
  async loadDefault() {
    return this._adopt(DEFAULT_BEAD_MODEL.url, 'glb', DEFAULT_BEAD_MODEL.name);
  }

  async _adopt(url, ext, name) {
    let root = await this._load(url, ext);
    if (!(root instanceof THREE.Group)) {
      const group = new THREE.Group();
      group.add(root);
      root = group;
    }
    const size = new THREE.Box3().setFromObject(root).getSize(new THREE.Vector3());
    const triangles = countTriangles(root);
    this.current = { name, root, size, triangles, ext };
    this._emit();
    return this.current;
  }

  async _load(url, ext) {
    switch (ext) {
      case 'glb':
      case 'gltf':
        return new Promise((resolve, reject) =>
          this._loaders.gltf.load(url, g => resolve(g.scene), undefined, reject));
      case 'fbx':
        return new Promise((resolve, reject) => this._loaders.fbx.load(url, resolve, undefined, reject));
      case 'obj':
        return new Promise((resolve, reject) => this._loaders.obj.load(url, resolve, undefined, reject));
      case 'stl':
      case 'stla':
      case 'stlb':
        return new Promise((resolve, reject) =>
          this._loaders.stl.load(url, geometry => resolve(new THREE.Mesh(
            geometry,
            new THREE.MeshStandardMaterial({ flatShading: true }),
          )), undefined, reject));
      default:
        throw new Error(`不支持的模型格式: .${ext}`);
    }
  }
}

function countTriangles(root) {
  let count = 0;
  root.traverse(child => {
    if (!child.isMesh) return;
    const geo = child.geometry;
    if (geo.index) count += geo.index.count / 3;
    else if (geo.attributes.position) count += geo.attributes.position.count / 3;
  });
  return Math.floor(count);
}

/** 释放模板占用的显存（更换模板 / 销毁时调用） */
export function disposeObject(root) {
  if (!root) return;
  root.traverse(child => {
    if (!child.isMesh) return;
    child.geometry?.dispose();
    const mats = Array.isArray(child.material) ? child.material : [child.material];
    for (const m of mats) m?.dispose();
  });
}
