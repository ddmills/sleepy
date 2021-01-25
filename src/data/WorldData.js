import { Area } from './Area';
import data from './world.json';

export default class WorldData {
    #areas = [];

    get width() {
        return data.width;
    }

    get height() {
        return data.height;
    }

    idx(x, y) {
        return y * this.width + x;
    }

    coord(idx) {
        return {
            x: Math.trunc(idx % this.width),
            y: Math.trunc(idx / this.width),
        };
    }

    constructor() {
        this.#areas = [];

        for (let x = 0; x < data.width; x++) {
            for (let y = 0; y < data.height; y++) {
                const area = Area.parseData(this, data.areas[y][x], x, y);

                this.#areas[area.id] = area;
            }
        }
    }

    isOutOfBounds(x, y) {
        return x < 0 || y < 0 || x >= this.width || y >= this.height;
    }

    getStartingArea() {
        return this.getArea(15);
    }

    getAreaByCoord(x, y) {
        return this.getArea(this.idx(x, y));
    }

    getArea(idx) {
        const { x, y } = this.coord(idx);

        if (this.isOutOfBounds(x, y)) {
            return new Area(this, x, y);
        }

        return this.#areas[idx];
    }
}
