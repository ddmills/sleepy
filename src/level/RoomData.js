import { nanoid } from 'nanoid'
import { TILE_THEME_FOREST } from './themes/TileTheme';
import { TILE_TYPE_FLOOR } from './TileData';

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

    get left() {
        return this.includeWalls ? this.x - 1 : this.x;
    }

    get right() {
        return this.includeWalls ? this.x + this.width + 1 : this.x + this.width;
    }

    get top() {
        return this.includeWalls ? this.y - 1 : this.y;
    }

    get bottom() {
        return this.includeWalls ? this.y + this.height + 1 : this.y + this.height;
    }

    get borderTiles() {
        const start = this.includeWalls ? -1 : 0;
        const endWidth = this.includeWalls ? this.width + 1 : this.width;
        const endHeight = this.includeWalls ? this.height + 1 : this.height;
        const borders = [];

        // TODO this loop can be a lot simpler...
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
        this.#container.setTileType(this.x + x, this.y + y, TILE_TYPE_FLOOR);
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

    containsPoint(x, y) {
        return x <= this.right && x >= this.left && y <= this.bottom && y >= this.top;
    }

    intersects(left, top, right, bottom) {
        const c1 = left < this.right;
        const c2 = right > this.left;
        const c3 = top < this.bottom;
        const c4 = bottom > this.top;

        return c1 && c2 && c3 && c4;
    }
}
