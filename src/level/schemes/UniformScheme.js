import { Map as MapGenerator } from 'rot-js';
import { digExits } from '../LevelConnections';
import TileContainer from '../TileContainer';
import { TILE_TYPE_FLOOR, TILE_TYPE_WALL } from '../TileData';
import TileScheme from '../TileScheme';

export class UniformScheme extends TileScheme {
    static generate(settings) {
        const width = settings.width;
        const height = settings.height;
        const exits = settings.exits;

        const tiles = new TileContainer(width, height);

        const generator = new MapGenerator.Uniform(width, height, {
            timeLimit: 8000,
            roomWidth: settings.roomWidth || [2, 8],
            roomHeight: settings.roomHeight || [2, 8],
            roomDugPercentage: settings.digPercentage || 0.8,
        });

        generator.create((x, y, v) => {
            if (v === 0) {
                tiles.setTileType(x, y, TILE_TYPE_FLOOR);
            }

            if (v === 1) {
                tiles.setTileType(x, y, TILE_TYPE_WALL);
            }
        });

        digExits(tiles, exits);

        return tiles;
    }
}
