import { digExits } from '../LevelConnections';
import { SquareScheme } from '../schemes/SquareScheme';
import { TILE_THEME_DESERT } from '../themes/TileTheme';
import SectorGenerator from './SectorGenerator';

export class DesertGenerator extends SectorGenerator {
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
