import { digExits } from '../LevelConnections';
import TileContainer from '../TileContainer';
import { TILE_TYPE_FLOOR, TILE_TYPE_WALL } from '../TileData';
import TileScheme from '../TileScheme';

export class SquareScheme extends TileScheme {
    static generate(settings) {
        const width = settings.width;
        const height = settings.height;
        const exits = settings.exits || [];

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

        const room = tiles.createRoom(0, 0, settings.width, settings.height);

        room.includeWalls = true;

        exits.forEach((exit) => room.addExit(exit));

        digExits(tiles, exits);

        return tiles;
    }
}
