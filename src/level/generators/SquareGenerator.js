import { digConnections } from '../LevelConnections';
import TileContainer from '../TileContainer';
import TileGenerator from '../TileGenerator';
import { TILE_TYPE_FLOOR, TILE_TYPE_WALL } from '../TileData';

export class SquareGenerator extends TileGenerator {
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
