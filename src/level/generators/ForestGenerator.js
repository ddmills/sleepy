import { digExits } from '../LevelConnections';
import { UniformScheme } from '../schemes/UniformScheme';
import { TILE_THEME_FOREST } from '../themes/TileTheme';
import SectorGenerator from './SectorGenerator';

export class ForestGenerator extends SectorGenerator {
    static generate(settings) {
        const tiles = UniformScheme.generate({
            width: settings.width,
            height: settings.height,
            exits: settings.exits,
        });

        tiles.setTheme(TILE_THEME_FOREST);

        digExits(tiles, settings.exits);

        return tiles;
    }
}
