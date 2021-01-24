import { pickRandom } from '../src/utils/rand';
import { AREA_TYPE_CANYON, AREA_TYPE_DESERT, AREA_TYPE_FOREST, AREA_TYPE_PLAINS, AREA_TYPE_WATER } from './AreaType';
import { EditorMap } from './EditorMap';

export const generateWorld = (width, height) => {
    const data = new EditorMap(width, height);

    data.grid.data.forEach((cell) => {
        cell.type = pickRandom([
            AREA_TYPE_PLAINS,
            AREA_TYPE_CANYON,
            AREA_TYPE_DESERT,
            AREA_TYPE_FOREST,
            AREA_TYPE_WATER,
        ]);
    });

    for (let i = 0; i < width; i++) {
        data.grid.get(i, 0).type = AREA_TYPE_WATER;
        data.grid.get(i, height - 1).type = AREA_TYPE_WATER;
    }

    for (let i = 0; i < height; i++) {
        data.grid.get(0, i).type = AREA_TYPE_WATER;
        data.grid.get(width - 1, i).type = AREA_TYPE_WATER;
    }

    return data;
};
