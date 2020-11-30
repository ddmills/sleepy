import { TILE_TYPE_WALL } from '../TileData';

export const addBorder = (tiles) => {
    for (let i = 0; i < tiles.width; i++) {
        tiles.setTileType(i, 0, TILE_TYPE_WALL);
        tiles.setTileType(i, tiles.height - 1, TILE_TYPE_WALL);
    }

    for (let j = 1; j < tiles.height - 1; j++) {
        tiles.setTileType(0, j, TILE_TYPE_WALL);
        tiles.setTileType(tiles.width - 1, j, TILE_TYPE_WALL);
    }
};
