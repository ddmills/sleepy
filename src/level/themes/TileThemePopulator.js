import { game } from '../../core/Game';
import { pickRandom } from '../../utils/rand';

export default class TileThemePopulator {
    static populateTile(tile) {}

    static populateRoom(room) {
        room.tiles.forEach((tile) => {
            this.populateTile(tile);
        });
    }

    static populate(tiles) {
        tiles.data.forEach((tile) => {
            this.populateTile(tile);
        });
    }

    static getEntities(tile) {
        return game.map.getEntitiesAt(tile.x, tile.y);
    }

    static clearTile(tile) {
        getEntities(tile).forEach((e) => {
            e.destroy();
        });
    }

    static getRandomEmptyTile(tileArr, attempts = 100) {
        for (let i = 0; i < attempts; i++) {
            const tile = pickRandom(tileArr);

            if (this.getEntities(tile) <= 0) {
                return tile;
            }
        }

        console.warn(
            `ran out of attempts (${attempts}) to place item`,
            tileArr
        );
    }

    static trySpawn(room, cb) {
        const tile = this.getRandomEmptyTile(room.interiorTiles);

        if (tile) {
            cb(tile);
        }
    }
}
