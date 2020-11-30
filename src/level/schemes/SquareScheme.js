import { addBorder } from '../generators/GeneratorUtils';
import { digExits } from '../LevelConnections';
import TileContainer from '../TileContainer';
import TileScheme from '../TileScheme';

export class SquareScheme extends TileScheme {
    static generate(settings) {
        const width = settings.width;
        const height = settings.height;
        const exits = settings.exits || [];

        const tiles = new TileContainer(width, height);

        addBorder(tiles);

        const room = tiles.createRoom(0, 0, settings.width, settings.height);

        room.includeWalls = true;

        exits.forEach((exit) => room.addExit(exit));

        digExits(tiles, exits);

        return tiles;
    }
}
