import * as THREE from "three";
import { textureConfig } from "./handleTextures";

/**
 * @param geometry - just a plane geometry
 * @returns - an array of objects with front and back meshes (back mesh has low opacity)
 */

export function getMeshes(geometry) {
    const arr = [];
    
    for (let i = 0; i < 54; i++) {        
        const materialFront = new THREE.MeshBasicMaterial({
            map: textureConfig.textures[i],
            transparent: true,
            opacity: 1,
        })
        const materialBack = new THREE.MeshBasicMaterial({
            map: textureConfig.textures[i],
            transparent: true,
            opacity: 0.3,
        })
        
        const meshFront = new THREE.Mesh(geometry, materialFront);
        const meshBack = new THREE.Mesh(geometry, materialBack);

        meshFront.name = textureConfig.textures[i].name;
        meshBack.name = textureConfig.textures[i].name;
        
        arr.push({
            front: meshFront,
            back: meshBack,
        });
    }

    return arr;
}