import * as THREE from "three";

const loadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(loadingManager);
const texture = textureLoader.load('/images/banks/img_1.webp')
texture.colorSpace = THREE.SRGBColorSpace;

export const textureConfig = {
    map: texture,
    side: THREE.DoubleSide
}