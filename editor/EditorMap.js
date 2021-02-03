import SimplexNoise from 'simplex-noise';
import Grid from '../src/utils/Grid'
import { AREA_TYPE_CANYON, AREA_TYPE_DEEP_WATER, AREA_TYPE_DESERT, AREA_TYPE_FOREST, AREA_TYPE_PLAINS, AREA_TYPE_WATER } from './AreaType';
import { EditorMapCell } from './EditorMapCell';

export class EditorMap {
    get normalScale() {
        return Math.max(this.width, this.height);
    }

    constructor(width, height, seed) {
        this.width = width;
        this.height = height;
        this.seed = seed;
        this._simplex = new SimplexNoise(this.seed);
        this.grid = new Grid(this.width, this.height, (x, y) => {
            return new EditorMapCell({
                map: this,
                x,
                y
            });
        });
    }

    nz(x, y) {
        return this._simplex.noise2D(x, y);
    }

    getType(x, y) {
        const height = this.getHeight(x, y);

        if (height > .4) {
            if (this.getCanyons(x, y)) {
                return AREA_TYPE_CANYON;
            }
        }

        if (height > .3) {
            if (this.getForest(x, y)) {
                return AREA_TYPE_FOREST;
            }
        }

        if (height > .25) {
            if (height > .3) {
                return AREA_TYPE_PLAINS;
            }
            if (this.getPlains(x, y)) {
                return AREA_TYPE_PLAINS;
            }
            return AREA_TYPE_DESERT;
        }

        if (height > .22) {
            return AREA_TYPE_WATER;
        }

        return AREA_TYPE_DEEP_WATER;
    }

    getForest(x, y) {
        const scale = Math.max(this.width, this.height);

        const nrmlX = x / scale + 4;
        const nrmlY = y / scale + 4;

        return (1 + this.nz(nrmlX * 5, nrmlY * 5)) / 2 < .6;
    }

    getPlains(x, y) {
        const scale = Math.max(this.width, this.height);

        const nrmlX = x / scale;
        const nrmlY = y / scale;

        return (1 + this.nz(nrmlX * 5, nrmlY * 5)) / 2 < .6;
    }

    getCanyons(x, y) {
        const scale = Math.max(this.width, this.height);

        const nrmlX = x / scale;
        const nrmlY = y / scale;

        return (1 + this.nz(nrmlX * 12, nrmlY * 12)) / 2 < .5;
    }

    getHeight(x, y) {
        const scale = Math.max(this.width, this.height);

        const nrmlX = x / scale;
        const nrmlY = y / scale;
        const distanceX = 1 - Math.abs((x / (this.width / 2)) - 1);
        const distanceY = 1 - Math.abs((y / (this.height / 2)) - 1);

        const distance = Math.min(distanceX, distanceY);

        const oct1 = (1 + this.nz(nrmlX * 4, nrmlY * 4)) / 2;
        const oct2 = (1 + this.nz(nrmlX * 8, nrmlY * 8)) / 2;
        const oct3 = (1 + this.nz(nrmlX * 13, nrmlY * 13)) / 2;
        const oct4 = (1 + this.nz(nrmlX * 16, nrmlY * 16)) / 2;

        const noise = (oct1 * .5) + (oct2 * .2) + (oct3 * .2) + (oct4 * .1);

        return noise * distance;
    }
}
