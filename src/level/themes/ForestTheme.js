import { game } from '../../core/Game';
import { TILE_TYPE_FLOOR, TILE_TYPE_WALL } from '../TileData';
import TileThemePopulator from './TileThemePopulator';

export default class ForestTheme extends TileThemePopulator {
    static populateTile(tile) {
        if (tile.isType(TILE_TYPE_WALL)) {
            const type = Math.random() < 0.5 ? 'PineTree' : 'SmallPineTree';
            const tree = game.ecs.createPrefab(type);

            tree.position.setPos(tile.x, tile.y);
        }
    }

    static populateRoom(room) {
        room.tiles.forEach((tile) => {
            this.populateTile(tile);

            if (Math.random() < .1) {
                if (tile.isType(TILE_TYPE_FLOOR)) {
                    const stone = game.ecs.createPrefab('Stone');

                    stone.position.setPos(tile.x, tile.y);
                }
            }
        });
    }
}
