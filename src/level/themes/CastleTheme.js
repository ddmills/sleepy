import {
    SPWN_GROUND_STONE,
    SPWN_STONE,
    SPWN_STONE_WALL,
    SPWN_WOOD_DOOR,
} from '../../data/Spawnables';
import { spawn } from '../../data/Spawner';
import { randomInt } from '../../utils/rand';
import { TILE_TYPE_WALL } from '../TileData';
import TileThemePopulator from './TileThemePopulator';

export default class CastleTheme extends TileThemePopulator {
    static populateTile(tile) {
        spawn(SPWN_GROUND_STONE, tile.x, tile.y);

        if (this.getEntities(tile).length === 0) {
            if (tile.isType(TILE_TYPE_WALL)) {
                spawn(SPWN_STONE_WALL, tile.x, tile.y);
            }
        }
    }

    static populateRoom(room) {
        room.exits.forEach((exit) => {
            if (this.getEntities(exit).length === 0) {
                spawn(SPWN_WOOD_DOOR, exit.x, exit.y);
            }
        });

        room.tiles.forEach((tile) => this.populateTile(tile));

        for (let i = 0; i < randomInt(0, 3); i++) {
            this.trySpawn(room, (tile) => {
                spawn(SPWN_STONE, tile.x, tile.y);
            });
        }
    }
}
