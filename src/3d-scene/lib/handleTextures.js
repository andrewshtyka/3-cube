import * as THREE from "three";
import { shuffle } from "lodash";

const loadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(loadingManager);

/**
 * ======================================== all textures
 */

const texturesArr = []; // 54 textures (9 for each of 6 sides of a cube)

[...Array(9)].forEach((_, i) => {
    const textureName = "banks";

    const texture = textureLoader.load(`/images/${textureName}/img_${i + 1}.webp`)
    texture.colorSpace = THREE.SRGBColorSpace;
    texturesArr.push(texture);
    texture.name = textureName;
});

[...Array(9)].forEach((_, i) => {
    const textureName = "bernache";

    const texture = textureLoader.load(`/images/${textureName}/img_${i + 1}.webp`)
    texture.colorSpace = THREE.SRGBColorSpace;
    texturesArr.push(texture);
    texture.name = textureName;
});

[...Array(9)].forEach((_, i) => {
    const textureName = "charli_xcx";

    const texture = textureLoader.load(`/images/${textureName}/img_${i + 1}.webp`)
    texture.colorSpace = THREE.SRGBColorSpace;
    texturesArr.push(texture);
    texture.name = textureName;
});

[...Array(9)].forEach((_, i) => {
    const textureName = "sky_ferreira";

    const texture = textureLoader.load(`/images/${textureName}/img_${i + 1}.webp`)
    texture.colorSpace = THREE.SRGBColorSpace;
    texturesArr.push(texture);
    texture.name = textureName;
});

[...Array(9)].forEach((_, i) => {
    const textureName = "the_japanese_house";

    const texture = textureLoader.load(`/images/${textureName}/img_${i + 1}.webp`)
    texture.colorSpace = THREE.SRGBColorSpace;
    texturesArr.push(texture);
    texture.name = textureName;
});

[...Array(9)].forEach((_, i) => {
    const textureName = "the_weeknd";

    const texture = textureLoader.load(`/images/${textureName}/img_${i + 1}.webp`)
    texture.colorSpace = THREE.SRGBColorSpace;
    texturesArr.push(texture);
    texture.name = textureName;
});

/**
 * ======================================== config
 */

export const textureConfig = {
    textures: shuffle(texturesArr),
};
