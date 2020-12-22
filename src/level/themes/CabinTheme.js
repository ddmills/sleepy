import {
    SPWN_HUMAN_WANDERER,
    SPWN_WOOD_DOOR,
    SPWN_WOOD_WALL,
    SPWN_WOOD_CHEST,
    SPWN_STONE,
    SPWN_VIAL_HONEY,
    SPWN_AMULET,
    SPWN_CLOTH_ARMOR,
    SPWN_LEATHER_BOOTS,
    SPWN_SHORTSWORD,
    SPWN_GREATSWORD,
    SPWN_BATTLE_AXE,
    SPWN_HATCHET,
    SPWN_GROUND_STONE,
    SPWN_GROUND_GRASS,
} from '../../data/Spawnables';
import { spawn } from '../../data/Spawner';
import { randomInt } from '../../utils/rand';
import { TILE_TYPE_WALL } from '../TileData';
import TileThemePopulator from './TileThemePopulator';

export default class CabinTheme extends TileThemePopulator {
    static populateTile(tile) {
        spawn(SPWN_GROUND_STONE, tile.x, tile.y);

        if (this.getEntities(tile).length === 0) {
            if (tile.isType(TILE_TYPE_WALL)) {
                spawn(SPWN_WOOD_WALL, tile.x, tile.y);
            }
        }
    }

    static populateRoom(room) {
        room.tiles.forEach((tile) => this.populateTile(tile));

        room.exits.forEach((exit) => {
            if (this.getEntities(exit).length === 0) {
                spawn(SPWN_WOOD_DOOR, exit.x, exit.y);
            }
        });

        this.trySpawn(room, (tile) => {
            const chest = spawn(SPWN_WOOD_CHEST, tile.x, tile.y);

            chest.inventory.addLoot(spawn(SPWN_VIAL_HONEY));
            chest.inventory.addLoot(spawn(SPWN_STONE));
            chest.inventory.addLoot(spawn(SPWN_AMULET));
            chest.inventory.addLoot(spawn(SPWN_CLOTH_ARMOR));
            chest.inventory.addLoot(spawn(SPWN_LEATHER_BOOTS));
            chest.inventory.addLoot(spawn(SPWN_SHORTSWORD));
            chest.inventory.addLoot(spawn(SPWN_GREATSWORD));
            chest.inventory.addLoot(spawn(SPWN_BATTLE_AXE));
            chest.inventory.addLoot(spawn(SPWN_HATCHET));
        });

        for (let i = 0; i < randomInt(1, 3); i++) {
            this.trySpawn(room, (tile) => {
                spawn(SPWN_HUMAN_WANDERER, tile.x, tile.y);
            });
        }
    }
}
