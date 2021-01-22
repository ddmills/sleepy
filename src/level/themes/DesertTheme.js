import {
    SPWN_GOBLIN_GRUNT,
    SPWN_PINE_TREE,
    SPWN_STONE,
    SPWN_BEAR,
    SPWN_VIAL_BLOOD,
    SPWN_VIAL_HONEY,
    SPWN_VIAL_WATER,
    SPWN_GROUND_GRASS,
    SPWN_TWIG,
    SPWN_GOBLIN_BRUISER,
    SPWN_GOBLIN_STARGAZER,
    SPWN_GROUND_SAND,
    SPWN_CLIFF,
    SPWN_SNAKE,
    SPWN_DESERT_REED,
} from '../../data/Spawnables';
import { spawn } from '../../data/Spawner';
import { randomInt, randomWeightedBool } from '../../utils/rand';
import { TILE_TYPE_FLOOR, TILE_TYPE_WALL } from '../TileData';
import TileThemePopulator from './TileThemePopulator';

export default class DesertTheme extends TileThemePopulator {
    static populateTile(tile) {
        spawn(SPWN_GROUND_SAND, tile.x, tile.y);

        if (tile.isType(TILE_TYPE_WALL)) {
            spawn(SPWN_CLIFF, tile.x, tile.y);
        }
    }

    static populateRoom(room) {
        room.tiles.forEach((tile) => {
            this.populateTile(tile);

            if (tile.isType(TILE_TYPE_FLOOR)) {
                if (randomWeightedBool(.5)) {
                    spawn(SPWN_DESERT_REED, tile.x, tile.y);
                }

                if (randomWeightedBool(.02)) {
                    spawn(SPWN_SNAKE, tile.x, tile.y);
                }
            }
        });

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
