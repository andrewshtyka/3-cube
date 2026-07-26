import { canvasConfig } from "./canvas"

export const cameraConfig = {
    fov: 40,
    aspect: canvasConfig.aspect,
    near: 0.01,
    far: 100,
    position: {
        x: 0,
        y: 0,
        z: 12,
    }
}