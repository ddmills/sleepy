import Grid from '../utils/Grid';
import { createTileData, TILE_TYPE_FLOOR } from './TileData';

export default class TileContainer {
    #defaultType = TILE_TYPE_FLOOR;
    #grid = [];

    get width() {
        return this.#grid.width;
    }

    get height() {
        return this.#grid.height;
    }

    get size() {
        return this.width * this.height;
    }

    get data() {
        return this.#grid.data;
    }

    constructor(width, height, defaultType=TILE_TYPE_FLOOR) {
        this.#grid = new Grid(width, height, createTileData);
        this.#defaultType = defaultType;
        this.clear();
    }

    getTile(x, y) {
        return this.#grid.get(x, y);
    }

    setTileType(x, y, type) {
        this.#grid.get(x, y).type = type;
    }

    getTileType(x, y) {
        return this.getTile(x, y).type;
    }

    clear() {
        this.fill(0, 0, this.width, this.height, this.#defaultType);
    }

    fill(x, y, width, height, type) {
        for (let i = x; i < x + width; i++) {
            for (let j = y; j < y + height; j++) {
                this.setTileType(i, j, type);
            }
        }
    }

    tileTypeMatches(x, y, type) {
        return this.getTile(x, y).isType(type);
    }
}
