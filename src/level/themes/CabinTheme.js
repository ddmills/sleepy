import {
    SPWN_HUMAN_WANDERER,
    SPWN_WOOD_DOOR,
    SPWN_WOOD_WALL,
    SPWN_WOOD_CHEST,
    SPWN_STONE,
    SPWN_VIAL_HONEY,
} from '../../data/Spawnables';
import { spawn } from '../../data/Spawner';
import { randomInt } from '../../utils/rand';
import { TILE_TYPE_WALL } from '../TileData';
import TileThemePopulator from './TileThemePopulator';

export default class CabinTheme extends TileThemePopulator {
    static populateTile(tile) {
        if (this.getEntities(tile).length === 0) {
            if (tile.isType(TILE_TYPE_WALL)) {
                spawn(SPWN_WOOD_WALL, tile.x, tile.y);
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

        this.trySpawn(room, (tile) => {
            const chest = spawn(SPWN_WOOD_CHEST, tile.x, tile.y);

            chest.inventory.addLoot(spawn(SPWN_VIAL_HONEY));
            chest.inventory.addLoot(spawn(SPWN_STONE));
        });

        for (let i = 0; i < randomInt(0, 3); i++) {
            this.trySpawn(room, (tile) => {
                spawn(SPWN_HUMAN_WANDERER, tile.x, tile.y);
            });
        }
    }
}
