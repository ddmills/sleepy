import { digExits } from '../LevelConnections';
import { UniformScheme } from '../schemes/UniformScheme';
import { TILE_THEME_CANYON } from '../themes/TileTheme';
import AreaGenerator from './AreaGenerator';

export class CanyonGenerator extends AreaGenerator {
    static generate(settings) {
        const tiles = UniformScheme.generate({
            width: settings.width,
            height: settings.height,
            exits: settings.exits,
        });

        tiles.setTheme(TILE_THEME_CANYON);

        digExits(tiles, settings.exits);

        return tiles;
    }
}
