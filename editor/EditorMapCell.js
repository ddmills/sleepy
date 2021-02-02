import { AREA_TYPE_CANYON, AREA_TYPE_DESERT, AREA_TYPE_FOREST, AREA_TYPE_PLAINS, AREA_TYPE_WATER } from './AreaType';

export class EditorMapCell {
    constructor(data) {
        this.x = data.x;
        this.y = data.y;
        // this.type = data.type || AREA_TYPE_WATER;
        this.height = data.height || 0;
    }

    get type() {
        if (this.height > .5) {
            return AREA_TYPE_CANYON;
        }

        if (this.height > .3) {
            return AREA_TYPE_FOREST;
        }

        if (this.height > .2) {
            return AREA_TYPE_PLAINS;
        }

        if (this.height > .15) {
            return AREA_TYPE_DESERT;
        }

        return AREA_TYPE_WATER;

        // cell.type = pickRandom([
        //     AREA_TYPE_PLAINS,
        //     AREA_TYPE_CANYON,
        //     AREA_TYPE_DESERT,
        //     AREA_TYPE_FOREST,
        //     AREA_TYPE_WATER,
        // ]);
    }

    serialize() {
        return {
            x: this.x,
            y: this.y,
            type: this.type,
        };
    }
}
