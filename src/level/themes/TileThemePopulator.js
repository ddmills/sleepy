import { game } from '../../core/Game';

export default class TileThemePopulator {
    static populateTile(tile) {
    }

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
}
