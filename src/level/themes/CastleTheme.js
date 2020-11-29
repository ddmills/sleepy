import { game } from '../../core/Game';
import { TILE_TYPE_WALL } from '../TileData';

export default class CastleTheme {
    static populateTile(tile) {
        if (tile.isType(TILE_TYPE_WALL)) {
            const wall = game.ecs.createPrefab('Wall');

            wall.position.setPos(tile.x, tile.y);
        }
    }

    static populate(tiles) {
        tiles.data.forEach((tile) => {
            this.populateTile(tile);
        });
    }
}
