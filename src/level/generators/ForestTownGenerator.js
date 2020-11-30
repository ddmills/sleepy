import { digExits } from '../LevelConnections';
import { ScatteredScheme } from '../schemes/ScatteredScheme';
import { TILE_THEME_CABIN, TILE_THEME_FOREST } from '../themes/TileTheme';
import { addBorder } from './GeneratorUtils';

export class ForestTownGenerator {
    static generate(settings) {
        const tiles = ScatteredScheme.generate({
            width: settings.width,
            height: settings.height,
            exits: settings.exits
        });

        tiles.setTheme(TILE_THEME_CABIN);

        tiles.getUnassignedTiles().forEach((tile) => {
            tile.theme = TILE_THEME_FOREST;
        });

        addBorder(tiles);

        digExits(tiles, settings.exits);

        return tiles;
    }
}
