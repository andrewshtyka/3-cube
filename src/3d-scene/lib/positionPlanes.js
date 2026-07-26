import { cubeConfig } from "../configs/cube";

/**
 * @param arr - array with objects with front and back meshes
 * @returns - nothing. Simply puts all planes on the grid in correct places to form a side of a cube.
 */

export function positionPlanes(arr) {
    const offset = 1 + cubeConfig.gap;
    const xValues = [-offset, 0, offset];
    const yValues = [offset, 0, -offset];

    arr.forEach((obj, i) => {
        const localIndex = i % 9; // for each 9 planes - repeat all the logic below

        const col = localIndex % 3;
        const row = Math.floor(localIndex / 3);

        const x = xValues[col];
        const y = yValues[row];

        obj.front.position.x = x;
        obj.back.position.x = x;
        obj.front.position.y = y;
        obj.back.position.y = y;
        obj.back.rotation.y = Math.PI;
    });
}