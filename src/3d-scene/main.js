// packages
import * as THREE from "three";

// user
import { canvasConfig } from "./configs/canvas";
import { cameraConfig } from "./configs/camera";
import { planeGeometryConfig } from "./configs/planeGeometry";
import { getMeshes } from "./lib/getMeshes";
import { positionPlanes } from "./lib/positionPlanes";
import { cubeConfig } from "./configs/cube";

/**
 * ======================================== handle resize
 */
window.addEventListener("resize", () => {
    // update sizes
    canvasConfig.width = window.innerWidth;
    canvasConfig.height = window.innerHeight;
    canvasConfig.aspect = window.innerWidth / window.innerHeight;

    // update camera
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // update renderer sizes
    renderer.setSize(canvasConfig.width, canvasConfig.height);

    // update pixel ratio
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * ======================================== scene
 */
const scene = new THREE.Scene();

/**
 * ======================================== camera
 */
const camera = new THREE.PerspectiveCamera(
    cameraConfig.fov,
    cameraConfig.aspect,
    cameraConfig.near,
    cameraConfig.far
);
camera.position.set(
    cameraConfig.position.x,
    cameraConfig.position.y,
    cameraConfig.position.z
);
scene.add(camera);

/**
 * ======================================== objects
 */
const geometry = new THREE.PlaneGeometry(
    planeGeometryConfig.width,
    planeGeometryConfig.height,
    planeGeometryConfig.widthSegments,
    planeGeometryConfig.heightSegments
);

// create meshes
const meshesArr = getMeshes(geometry);

// position meshes on 3x3 grid
positionPlanes(meshesArr);

// create array with 6 sides of the cube (one side = one group, that will hold meshes)
const sidesArr = [];
[...Array(6)].forEach((_, i) => {
    const side = new THREE.Group();
    sidesArr.push(side);
})

// add meshes to sides (9 meshes on each of 6 sides)
meshesArr.forEach((obj, i) => {
    const side = sidesArr[Math.floor(i / 9)];
    side.add(obj.front);
    side.add(obj.back);
});

// position each side, to form a cube
sidesArr.forEach((side, i) => {
    switch (i) {
        case 0: // front
            side.position.z = cubeConfig.sideOffset;
            return;
        case 1: // left
            side.rotation.y = Math.PI * -0.5;
            side.position.x = - (cubeConfig.size * 1.5 + cubeConfig.gap) - cubeConfig.sideOffset;
            side.position.z = - (cubeConfig.size * 1.5 + cubeConfig.gap);
            return;
        case 2: // right
            side.rotation.y = Math.PI * 0.5
            side.position.x = (cubeConfig.size * 1.5 + cubeConfig.gap) + cubeConfig.sideOffset;
            side.position.z = - (cubeConfig.size * 1.5 + cubeConfig.gap);
            return;
        case 3: // back
            side.rotation.y = Math.PI;
            side.position.z = - (cubeConfig.size * 3 + cubeConfig.gap * 2) - cubeConfig.sideOffset;
            return;
        case 4: // top
            side.rotation.x = Math.PI * -0.5;
            side.position.z = - (cubeConfig.size * 1.5 + cubeConfig.gap);
            side.position.y = (cubeConfig.size * 1.5 + cubeConfig.gap) + cubeConfig.sideOffset;
            return;
        case 5: // bottom
            side.rotation.x = Math.PI * 0.5;
            side.position.z = - (cubeConfig.size * 1.5 + cubeConfig.gap);
            side.position.y = - (cubeConfig.size * 1.5 + cubeConfig.gap) - cubeConfig.sideOffset;
            return;
    }
})

// put all sides into single group
const masterGroup = new THREE.Group();
masterGroup.add(...sidesArr);

// center the group relatively to the world center
const box = new THREE.Box3().setFromObject(masterGroup);
const center = new THREE.Vector3();
box.getCenter(center);

sidesArr.forEach((side) => side.position.sub(center));
masterGroup.position.copy(center);

scene.add(masterGroup);

/**
 * ======================================== renderer
 */
const canvas = document.querySelector("canvas.webgl");

const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
renderer.setSize(canvasConfig.width, canvasConfig.height);
renderer.render(scene, camera);

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * ======================================== animate
 */
const timer = new THREE.Timer();



const animate = () => {
    timer.update();
    const elapsed = timer.getElapsed();

    masterGroup.rotation.y = elapsed * 0.8;
    masterGroup.rotation.x = elapsed * 0.2;

    // meshesArr.forEach(obj => {
    //     if (obj.front.name === 'the_weeknd') {
    //         obj.front.material.opacity = 1;
    //         obj.back.material.opacity = 1;
    //     }
    //     if (obj.front.name !== 'the_weeknd') {
    //         obj.front.material.opacity = 0.1;
    //         obj.back.material.opacity = 0.1;
    //     }
    // })

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();



