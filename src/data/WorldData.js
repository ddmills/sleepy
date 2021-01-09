import { Sector } from './Sector';
import data from './world.json';

export default class WorldData {
    #sectors = [];

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
        this.#sectors = [];

        for (let x = 0; x < data.width; x++) {
            for (let y = 0; y < data.height; y++) {
                const sector = Sector.parseData(this, data.sectors[y][x], x, y);

                this.#sectors[sector.id] = sector;
            }
        }
    }

    isOutOfBounds(x, y) {
        return x < 0 || y < 0 || x >= this.width || y >= this.height;
    }

    getStartingSector() {
        return this.getSector(7);
    }

    getSectorByCoord(x, y) {
        return this.getSector(this.idx(x, y));
    }

    getSector(idx) {
        const { x, y } = this.coord(idx);

        if (this.isOutOfBounds(x, y)) {
            return new Sector(this, x, y);
        }

        return this.#sectors[idx];
    }
}
