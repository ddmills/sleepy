import { digExits } from '../LevelConnections';
import { SquareScheme } from '../schemes/SquareScheme';
import { TILE_THEME_DESERT } from '../themes/TileTheme';
import AreaGenerator from './AreaGenerator';

export class DesertGenerator extends AreaGenerator {
    static generate(settings) {
        const tiles = SquareScheme.generate({
            width: settings.width,
            height: settings.height,
            exits: settings.exits,
        });

        tiles.setTheme(TILE_THEME_DESERT);

        digExits(tiles, settings.exits);

        return tiles;
    }
}
