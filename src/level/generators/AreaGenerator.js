import { getThemePopulator } from '../themes/TileTheme';
import TileContainer from '../TileContainer';

export default class AreaGenerator {
    static generate(settings) {
        return new TileContainer(settings.width, settings.height);
    }

    static populate(settings, tiles) {
        tiles.rooms.forEach((room) => {
            const theme = getThemePopulator(room.theme);

            theme.populateRoom(room);
        });

        tiles.getUnassignedTiles().forEach((tile) => {
            const theme = getThemePopulator(tile.theme);

            theme.populateTile(tile);
        });
    }
}
