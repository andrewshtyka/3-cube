// packages
import * as THREE from "three";

// user
import { canvasConfig } from "./configs/canvas";
import { cameraConfig } from "./configs/camera";
import { planeGeometryConfig } from "./configs/planeGeometry";
import { textureConfig } from "./lib/handleTextures";

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
)

const meshesArr = [];

for (let i = 0; i < 9; i++) {
    const material = new THREE.MeshBasicMaterial(textureConfig)
    const mesh = new THREE.Mesh(geometry, material)
    meshesArr.push(mesh);
}

const gap = 0.25;
meshesArr.forEach((mesh, i) => {
    const currentIndex = i + 1;

    switch (currentIndex) {
        // top row
        case 1:
            mesh.position.x = -1 - gap;
            mesh.position.y = 1 + gap;
            return;
        case 2:
            mesh.position.x = 0;
            mesh.position.y = 1 + gap;
            return;
        case 3:
            mesh.position.x = 1 + gap;
            mesh.position.y = 1 + gap;
            return;
        
        // mid row
        case 4:
            mesh.position.x = -1 - gap;
            mesh.position.y = 0;
            return;
        case 5:
            mesh.position.x = 0;
            mesh.position.y = 0;
            return;
        case 6:
            mesh.position.x = 1 + gap;
            mesh.position.y = 0;
            return;
        
        // bottom row
        case 7:
            mesh.position.x = -1 - gap;
            mesh.position.y = -1 - gap;
            return;
        case 8:
            mesh.position.x = 0;
            mesh.position.y = -1 - gap;
            return;
        case 9:
            mesh.position.x = 1 + gap;
            mesh.position.y = -1 - gap;
            return;
    }
})

const side = new THREE.Group();
side.add(...meshesArr)
scene.add(side);

/**
 * ======================================== renderer
 */
const canvas = document.querySelector('canvas.webgl');

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
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

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();

