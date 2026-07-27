import * as THREE from "three";
import { shuffle } from "lodash";

const loadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(loadingManager);

/**
 * ======================================== all textures
 */
export const titlesArr = [ // source of truth for names
    {id: 1, name: "banks", title: "Banks"},
    {id: 2, name: "charli_xcx", title: "Charli XCX"},
    {id: 3, name: "bernache", title: "Emma (Men I Trust)"},
    {id: 4, name: "sky_ferreira", title: "Sky Ferreira"},
    {id: 5, name: "the_japanese_house", title: "The Japanese House"},
    {id: 6, name: "the_weeknd", title: "The Weeknd"},
];

const texturesArr = []; // 54 textures (9 for each of 6 sides of a cube)

[...Array(9)].forEach((_, i) => {
    const textureName = titlesArr.filter(el => el.id === 1)[0].name;

    const texture = textureLoader.load(`/images/${textureName}/img_${i + 1}.webp`)
    texture.colorSpace = THREE.SRGBColorSpace;
    texturesArr.push(texture);
    texture.name = textureName;
});

[...Array(9)].forEach((_, i) => {
    const textureName = titlesArr.filter(el => el.id === 2)[0].name;

    const texture = textureLoader.load(`/images/${textureName}/img_${i + 1}.webp`)
    texture.colorSpace = THREE.SRGBColorSpace;
    texturesArr.push(texture);
    texture.name = textureName;
});

[...Array(9)].forEach((_, i) => {
    const textureName = titlesArr.filter(el => el.id === 3)[0].name;

    const texture = textureLoader.load(`/images/${textureName}/img_${i + 1}.webp`)
    texture.colorSpace = THREE.SRGBColorSpace;
    texturesArr.push(texture);
    texture.name = textureName;
});

[...Array(9)].forEach((_, i) => {
    const textureName = titlesArr.filter(el => el.id === 4)[0].name;

    const texture = textureLoader.load(`/images/${textureName}/img_${i + 1}.webp`)
    texture.colorSpace = THREE.SRGBColorSpace;
    texturesArr.push(texture);
    texture.name = textureName;
});

[...Array(9)].forEach((_, i) => {
    const textureName = titlesArr.filter(el => el.id === 5)[0].name;

    const texture = textureLoader.load(`/images/${textureName}/img_${i + 1}.webp`)
    texture.colorSpace = THREE.SRGBColorSpace;
    texturesArr.push(texture);
    texture.name = textureName;
});

[...Array(9)].forEach((_, i) => {
    const textureName = titlesArr.filter(el => el.id === 6)[0].name;

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
    opacityFront: 1,
    opacityBack: 0.3,
    opacityHovered: 0.075,
    gsapConfig: {
        duration: 0.3,
    }
};
