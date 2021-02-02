import { AREA_TYPE_CANYON, AREA_TYPE_DESERT, AREA_TYPE_FOREST, AREA_TYPE_PLAINS, AREA_TYPE_WATER } from './AreaType';

export class EditorMapCell {
    get height() {
        return this.map.getHeight(this.x, this.y);
    }

    get normalizedX() {
        return x / map.normalScale;
    }

    get normalizedY() {
        return y / map.normalScale;
    }

    get distanceX() {
        return 1 - Math.abs((this.x / (this.map.width / 2)) - 1);
    }

    get distanceY() {
        return 1 - Math.abs((this.y / (this.map.height / 2)) - 1);
    }

    constructor(data) {
        this.map = data.map;
        this.x = data.x;
        this.y = data.y;
    }

    get type() {
        if (this.height > .4) {
            if (this.map.getCanyons(this.x, this.y)) {
                return AREA_TYPE_CANYON;
            }
        }

        if (this.height > .3) {
            if (this.map.getForest(this.x, this.y)) {
                return AREA_TYPE_FOREST;
            }
        }

        // if (this.height > .2) {
        //     if (this.map.getPlains(this.x, this.y)) {
        //         return AREA_TYPE_PLAINS;
        //     }
        // }

        if (this.height > .25) {
            if (this.height > .3) {
                return AREA_TYPE_PLAINS;
            }
            if (this.map.getPlains(this.x, this.y)) {
                return AREA_TYPE_PLAINS;
            }
            return AREA_TYPE_DESERT;
        }

        return AREA_TYPE_WATER;
    }

    serialize() {
        return {
            x: this.x,
            y: this.y,
            type: this.type,
        };
    }
}
