export const TILE_TYPE_FLOOR = 0;
export const TILE_TYPE_WALL = 1;
export const TILE_TYPE_OUT_OF_BOUNDS = 1;

export class TileData {
    x = -1;
    y = -1;
    roomId = -1;
    type = TILE_TYPE_OUT_OF_BOUNDS;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    isType(type) {
        return this.type === type;
    }
};

export const createTileData = (x, y) => new TileData(x, y);
