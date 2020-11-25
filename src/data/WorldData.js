import { Sector } from './Sector';
import data from './world.json';

export default class WorldData {
    #sectors = [];
    #seed = [];

    get width() {
        return data.width;
    }

    get height() {
        return data.height;
    }

    get seed() {
        return this.#seed;
    }

    constructor(seed) {
        this.#seed = seed;
        this.#sectors = [];

        for (let x = 0; x < data.width; x++) {
            for (let y = 0; y < data.height; y++) {
                const sector = Sector.parseData(this, data.sectors[y][x], x, y);
                this.#sectors.push(sector);
            }
        }
    }

    isOutOfBounds(x, y) {
        return x < 0 || y < 0 || x >= this.width || y >= this.height;
    }

    getStartingSector() {
        return this.getSector(0, 0);
    }

    getSector(x, y) {
        if (this.isOutOfBounds(x, y)) {
            return new Sector(this, x, y);
        }

        const s = this.#sectors.find((s) => {
            return s.x === x && s.y === y;
        });

        return s;
    }
}
