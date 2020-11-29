import { game } from '../../core/Game';
import { TILE_TYPE_WALL } from '../TileData';

export default class ForestTheme {
    static populateTile(tile) {
        if (tile.isType(TILE_TYPE_WALL)) {
            const type = Math.random() < 0.5 ? 'PineTree' : 'SmallPineTree';
            const tree = game.ecs.createPrefab(type);

            tree.position.setPos(tile.x, tile.y);
        }
    }

    static populate(tiles) {
        tiles.data.forEach((tile) => {
            this.populateTile(tile);
        });
    }
}
