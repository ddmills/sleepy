import { digConnections } from '../LevelConnections';
import TileContainer from '../TileContainer';
import { TILE_TYPE_FLOOR, TILE_TYPE_WALL } from '../TileData';
import TileScheme from '../TileScheme';

export class SquareScheme extends TileScheme {
    static generate(settings) {
        const width = settings.width;
        const height = settings.height;
        const connections = settings.connections || {
            north: [],
            south: [],
            east: [],
            west: [],
        };

        const tiles = new TileContainer(width, height);

        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                if (i === 0 || i === width - 1 || j === 0 || j === height - 1) {
                    tiles.setTileType(i, j, TILE_TYPE_WALL);
                } else {
                    tiles.setTileType(i, j, TILE_TYPE_FLOOR);
                }
            }
        }

        digConnections(tiles, connections);

        return tiles;
    }
}
