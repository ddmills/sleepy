import { game } from '../../core/Game';
import { TILE_TYPE_WALL } from '../TileData';
import TileThemePopulator from './TileThemePopulator';

export default class CastleTheme extends TileThemePopulator {
    static populateTile(tile) {
        if (this.getEntities(tile).length === 0) {
            if (tile.isType(TILE_TYPE_WALL)) {
                const wall = game.ecs.createPrefab('Wall');

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

        room.tiles.forEach((tile) => this.populateTile(tile));
    }
}
