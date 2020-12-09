import {
    SPWN_GOBLIN_GRUNT,
    SPWN_PINE_TREE,
    SPWN_STONE,
    SPWN_VIAL_BLOOD,
    SPWN_VIAL_HONEY,
    SPWN_VIAL_WATER,
} from '../../data/Spawnables';
import { spawn } from '../../data/Spawner';
import { randomInt } from '../../utils/rand';
import { TILE_TYPE_FLOOR, TILE_TYPE_WALL } from '../TileData';
import TileThemePopulator from './TileThemePopulator';

export default class ForestTheme extends TileThemePopulator {
    static populateTile(tile) {
        if (tile.isType(TILE_TYPE_WALL)) {
            spawn(SPWN_PINE_TREE, tile.x, tile.y);
        }
    }

    static populateRoom(room) {
        room.tiles.forEach((tile) => {
            this.populateTile(tile);

            if (Math.random() < 0.1) {
                if (tile.isType(TILE_TYPE_FLOOR)) {
                    spawn(SPWN_STONE, tile.x, tile.y);
                }
            }
        });

        for (let i = 0; i < randomInt(0, 1); i++) {
            this.trySpawn(room, (tile) => {
                spawn(SPWN_GOBLIN_GRUNT, tile.x, tile.y);
            });
        }

        for (let i = 0; i < randomInt(0, 1); i++) {
            this.trySpawn(room, (tile) => {
                spawn(SPWN_VIAL_BLOOD, tile.x, tile.y);
            });
        }

        for (let i = 0; i < randomInt(0, 1); i++) {
            this.trySpawn(room, (tile) => {
                spawn(SPWN_VIAL_WATER, tile.x, tile.y);
            });
        }

        for (let i = 0; i < randomInt(0, 1); i++) {
            this.trySpawn(room, (tile) => {
                spawn(SPWN_VIAL_HONEY, tile.x, tile.y);
            });
        }
    }
}
