import Grid from '../utils/Grid';
import RoomData from './RoomData';
import { createTileData, TILE_TYPE_FLOOR } from './TileData';

export default class TileContainer {
    #defaultType = TILE_TYPE_FLOOR;
    #grid = [];
    #rooms = {};

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

    get rooms() {
        return Object.values(this.#rooms);
    }

    constructor(width, height, defaultType = TILE_TYPE_FLOOR) {
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

    setTileTheme(x, y, theme) {
        this.#grid.get(x, y).theme = theme;
    }

    getTileType(x, y) {
        return this.getTile(x, y).type;
    }

    addRoom(room) {
        this.#rooms[room.id] = room;
    }

    createRoom(x, y, width, height) {
        const room = new RoomData(x, y, width, height, this);

        this.addRoom(room);

        return room;
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

    combineOther(offsetX, offsetY, tiles) {
        tiles.rooms.forEach((room) => {
            room.cloneTo(room.x + offsetX, room.y + offsetY, this);
        });
        tiles.data.forEach((tile) => {
            this.setTileType(tile.x + offsetX, tile.y + offsetY, tile.type);
            this.setTileTheme(tile.x + offsetX, tile.y + offsetY, tile.theme);
        });
    }

    isOnEdge(x, y) {
        return x === 0 || y === 0 || x === this.width - 1 || y === this.height - 1;
    }

    setTheme(theme) {
        this.data.forEach((tile) => this.setTileTheme(tile.x, tile.y, theme));
        this.rooms.forEach((room) => room.theme = theme);
    }

    getRoomForTile(x, y) {
        const tile = this.getTile(x, y);

        return this.rooms.find((room) => {
            return room.tiles.includes(tile);
        });
    }

    getUnassignedTiles() {
        return this.data.filter((tile) => {
            return !this.getRoomForTile(tile.x, tile.y);
        });
    }
}
