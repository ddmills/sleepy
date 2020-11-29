import { nanoid } from 'nanoid'
import { TILE_THEME_CASTLE, TILE_THEME_FOREST } from './themes/TileTheme';

export default class RoomData {
    id = 0;
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    theme = TILE_THEME_FOREST;
    includeWalls = false;
    #container = null;
    #exitCoords = [];

    get relativeExits() {
        return this.#exitCoords;
    }

    get exits() {
        return this.relativeExits.map((exit) => ({
            x: exit.x + this.x,
            y: exit.y + this.y,
        }));
    }

    get borderTiles() {
        const start = this.includeWalls ? -1 : 0;
        const endWidth = this.includeWalls ? this.width + 1 : this.width;
        const endHeight = this.includeWalls ? this.height + 1 : this.height;
        const borders = [];

        for (let i = start; i < endWidth; i++) {
            for (let j = start; j < endHeight; j++) {
                if (i === start || i === endWidth - 1|| j === start || j === endHeight - 1) {
                    borders.push(this.#container.getTile(
                        i + this.x,
                        j + this.y
                    ));
                }
            }
        }

        return borders;
    }

    get interiorTiles() {
        const interior = [];

        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                interior.push(this.#container.getTile(
                    i + this.x,
                    j + this.y
                ));
            }
        }

        return interior;
    }

    get tiles() {
        const start = this.includeWalls ? -1 : 0;
        const endWidth = this.includeWalls ? this.width + 1 : this.width;
        const endHeight = this.includeWalls ? this.height + 1 : this.height;
        const tiles = [];

        for (let i = start; i < endWidth; i++) {
            for (let j = start; j < endHeight; j++) {
                tiles.push(this.#container.getTile(i + this.x, j + this.y));
            }
        }

        return tiles;
    }

    constructor(x, y, width, height, container) {
        this.id = nanoid();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.#container = container;
    }

    addRelativeExit(x, y) {
        this.#exitCoords.push({ x, y });
    }

    addExit(x, y) {
        this.addRelativeExit(x - this.x, y - this.y);
    }

    cloneTo(x, y, container) {
        const room = new RoomData(x, y, this.width, this.height, container);

        room.theme = this.theme;
        room.includeWalls = this.includeWalls;

        this.relativeExits.forEach((exit) => {
            room.addRelativeExit(exit.x, exit.y);
        });

        container.addRoom(room);

        return room;
    }
}
