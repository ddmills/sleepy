import { Map as MapGenerator } from 'rot-js';
import { digConnections } from '../LevelConnections';
import TileContainer from '../TileContainer';
import TileGenerator from '../TileGenerator';
import { TILE_TYPE_FLOOR, TILE_TYPE_WALL } from '../TileData';

export class UniformGenerator extends TileGenerator {
    static generate(settings) {
        const width = settings.width;
        const height = settings.height;
        const connections = settings.connections;

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

        digConnections(tiles, connections);

        return tiles;
    }
};
