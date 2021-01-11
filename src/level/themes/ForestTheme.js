import {
    SPWN_GOBLIN_GRUNT,
    SPWN_PINE_TREE,
    SPWN_STONE,
    SPWN_VIAL_BLOOD,
    SPWN_VIAL_HONEY,
    SPWN_VIAL_WATER,
    SPWN_GROUND_GRASS,
    SPWN_TWIG,
    SPWN_GOBLIN_BRUISER,
    SPWN_GOBLIN_STARGAZER,
} from '../../data/Spawnables';
import { spawn } from '../../data/Spawner';
import { randomInt } from '../../utils/rand';
import { TILE_TYPE_FLOOR, TILE_TYPE_WALL } from '../TileData';
import TileThemePopulator from './TileThemePopulator';

export default class ForestTheme extends TileThemePopulator {
    static populateTile(tile) {
        spawn(SPWN_GROUND_GRASS, tile.x, tile.y);

        if (tile.isType(TILE_TYPE_WALL)) {
            spawn(SPWN_PINE_TREE, tile.x, tile.y);
        }
    }

    static populateRoom(room) {
        room.tiles.forEach((tile) => {
            this.populateTile(tile);

            if (Math.random() > 0.1) {
                return;
            }

            if (tile.isType(TILE_TYPE_FLOOR) && Math.random() < 0.5) {
                spawn(SPWN_TWIG, tile.x, tile.y);
            } else {
                spawn(SPWN_STONE, tile.x, tile.y);
            }
        });

        for (let i = 0; i < randomInt(0, 1); i++) {
            this.trySpawn(room, (tile) => {
                spawn(SPWN_GOBLIN_GRUNT, tile.x, tile.y);
            });
        }

        for (let i = 0; i < randomInt(0, 1); i++) {
            this.trySpawn(room, (tile) => {
                spawn(SPWN_GOBLIN_BRUISER, tile.x, tile.y);
            });
        }

        for (let i = 0; i < randomInt(0, 1); i++) {
            this.trySpawn(room, (tile) => {
                spawn(SPWN_GOBLIN_STARGAZER, tile.x, tile.y);
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

        for (let i = 0; i < randomInt(0, 1); i++) {
            if (Math.random() > 0.05) {
                return;
            }

            this.trySpawn(room, (tile) => {
                spawn(SPWN_VIAL_WATER, tile.x, tile.y);
            });
        }

        for (let i = 0; i < randomInt(0, 1); i++) {
            if (Math.random() > 0.05) {
                return;
            }

            this.trySpawn(room, (tile) => {
                spawn(SPWN_VIAL_HONEY, tile.x, tile.y);
            });
        }
    }
}
