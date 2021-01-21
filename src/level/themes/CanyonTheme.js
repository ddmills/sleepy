import {
    SPWN_GOBLIN_GRUNT,
    SPWN_STONE,
    SPWN_VIAL_BLOOD,
    SPWN_CLIFF,
    SPWN_GROUND_GRASS_DEAD,
    SPWN_SNAKE
} from '../../data/Spawnables';
import { spawn } from '../../data/Spawner';
import { randomInt } from '../../utils/rand';
import { TILE_TYPE_FLOOR, TILE_TYPE_WALL } from '../TileData';
import TileThemePopulator from './TileThemePopulator';

export default class CanyonTheme extends TileThemePopulator {
    static populateTile(tile) {
        spawn(SPWN_GROUND_GRASS_DEAD, tile.x, tile.y);

        if (tile.isType(TILE_TYPE_WALL)) {
            spawn(SPWN_CLIFF, tile.x, tile.y);
        }
    }

    static populateRoom(room) {
        room.tiles.forEach((tile) => {
            this.populateTile(tile);

            if (Math.random() > 0.05) {
                return;
            }

            if (tile.isType(TILE_TYPE_FLOOR)) {
                spawn(SPWN_STONE, tile.x, tile.y);
            }
        });

        for (let i = 0; i < randomInt(0, 2); i++) {
            this.trySpawn(room, (tile) => {
                spawn(SPWN_SNAKE, tile.x, tile.y);
            });
        }

        for (let i = 0; i < randomInt(0, 1); i++) {
            this.trySpawn(room, (tile) => {
                spawn(SPWN_GOBLIN_GRUNT, tile.x, tile.y);
            });
        }

        for (let i = 0; i < randomInt(0, 1); i++) {
            if (Math.random() > 0.05) {
                return;
            }

            this.trySpawn(room, (tile) => {
                spawn(SPWN_VIAL_BLOOD, tile.x, tile.y);
            });
        }
    }
}
