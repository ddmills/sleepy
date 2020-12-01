import { pickRandom } from '../../utils/rand';
import { digExits } from '../LevelConnections';
import { UniformScheme } from '../schemes/UniformScheme';
import { TILE_THEME_CABIN, TILE_THEME_FOREST } from '../themes/TileTheme';
import SectorGenerator from './SectorGenerator';

export class ForestCabinsGenerator extends SectorGenerator {
    static generate(settings) {
        const tiles = UniformScheme.generate({
            width: settings.width,
            height: settings.height,
        });

        tiles.rooms.forEach((room) => room.theme = TILE_THEME_FOREST);

        const mediumRooms = tiles.rooms.filter((r) => r.width >= 3 && r.height >= 3);
        const room = pickRandom(mediumRooms);

        if (room) {
            room.theme = TILE_THEME_CABIN;
            room.includeWalls = true;
        }

        const distancedRooms = mediumRooms.filter((r) => r !== room);
        const room2 = pickRandom(distancedRooms);

        if (room2) {
            room2.theme = TILE_THEME_CABIN;
            room2.includeWalls = true;
        }

        const leftovers = tiles.getUnassignedTiles();

        leftovers.forEach((tile) => {
            tile.theme = TILE_THEME_FOREST
        });

        digExits(tiles, settings.exits);

        return tiles;
    }
}
