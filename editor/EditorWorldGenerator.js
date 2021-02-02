import { pickRandom } from '../src/utils/rand';
import SimplexNoise from 'simplex-noise';
import { AREA_TYPE_CANYON, AREA_TYPE_DESERT, AREA_TYPE_FOREST, AREA_TYPE_PLAINS, AREA_TYPE_WATER } from './AreaType';
import { EditorMap } from './EditorMap';

const simplex = new SimplexNoise('seed1');

export const generateWorld = (width, height) => {
    const data = new EditorMap(width, height);

    data.grid.data.forEach((cell) => {
        const scale = Math.max(width, height);
        const nrmlX = cell.x / scale;
        const nrmlY = cell.y / scale;
        const distanceX = 1 - Math.abs((cell.x / (width / 2)) - 1);
        const distanceY = 1 - Math.abs((cell.y / (height / 2)) - 1);

        const distance = Math.min(distanceX, distanceY);
        const noise = (1 + simplex.noise2D(nrmlX * 4, nrmlY * 4)) / 2;

        cell.height = noise * distance;
    });

    // for (let i = 0; i < width; i++) {
    //     data.grid.get(i, 0).height = 0;
    //     data.grid.get(i, height - 1).height = 0;
    // }

    // for (let i = 0; i < height; i++) {
    //     data.grid.get(0, i).height = 0;
    //     data.grid.get(width - 1, i).height = 0;
    // }

    return data;
};
