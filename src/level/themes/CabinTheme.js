import { game } from '../../core/Game';
import { LIQUID_HONEY } from '../../enums/LiquidTypes';
import { TILE_TYPE_FLOOR, TILE_TYPE_WALL } from '../TileData';
import TileThemePopulator from './TileThemePopulator';

export default class CabinTheme extends TileThemePopulator {
    static populateTile(tile) {
        if (this.getEntities(tile).length === 0) {
            if (tile.isType(TILE_TYPE_WALL)) {
                const wall = game.ecs.createPrefab('WoodWall');

                wall.position.setPos(tile.x, tile.y);
            }
        }
    }

    static populateRoom(room) {
        room.exits.forEach((exit) => {
            const door = game.ecs.createPrefab('Door');

            if (this.getEntities(exit).length === 0) {
                door.position.setPos(exit.x, exit.y);
            }
        });

        room.borderTiles.forEach((tile) => this.populateTile(tile));

        let spawnedChest = false;

        room.interiorTiles.forEach((tile) => {
            if (!spawnedChest && Math.random() < .1) {
                if (tile.isType(TILE_TYPE_FLOOR)) {
                    const chest = game.ecs.createPrefab('Chest');
                    const stone = game.ecs.createPrefab('Stone');
                    const vial = game.ecs.createPrefab('Vial');

                    vial.liquidContainer.contents = LIQUID_HONEY;
                    chest.position.setPos(tile.x, tile.y);
                    chest.inventory.addLoot(vial);
                    chest.inventory.addLoot(stone);

                    spawnedChest = true;
                }
            }
        });
    }
}
