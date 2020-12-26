import { digExits } from '../LevelConnections';
import { DenseCastleScheme } from '../schemes/DenseCastleScheme';
import { UniformScheme } from '../schemes/UniformScheme';
import { TILE_THEME_CASTLE, TILE_THEME_FOREST } from '../themes/TileTheme';
import TileContainer from '../TileContainer';
import SectorGenerator from './SectorGenerator';

export class ForestStrongholdGenerator extends SectorGenerator {
    static generate(settings) {
        const tiles = new TileContainer(settings.width, settings.height);
        const padding = 5;
        const exitOffset = Math.ceil(padding / 2) - 1;

        const top = UniformScheme.generate({
            width: settings.width - padding,
            height: padding,
            exits: [
                { x: exitOffset, y: padding - 1 },
                { x: settings.width - padding - 1, y: exitOffset - 1 },
                { x: padding + 11, y: padding - 1 },
            ],
        });

        const left = UniformScheme.generate({
            width: padding,
            height: settings.height - padding,
            exits: [
                { x: exitOffset, y: 0 },
                {
                    x: padding - 1,
                    y: settings.height - padding - exitOffset - 1,
                },
            ],
        });

        const bottom = UniformScheme.generate({
            width: settings.width - padding,
            height: padding,
            exits: [
                { x: 0, y: exitOffset },
                { x: settings.width - padding - exitOffset - 1, y: 0 },
            ],
        });

        const right = UniformScheme.generate({
            width: padding,
            height: settings.height - padding,
            exits: [
                { x: 0, y: exitOffset - 1 },
                { x: exitOffset, y: settings.height - padding - 1 },
            ],
        });

        const castle = DenseCastleScheme.generate({
            width: settings.width - padding * 2 + 2,
            height: settings.height - padding * 2 + 2,
            exits: [{ x: 12, y: 0 }],
        });

        top.setTheme(TILE_THEME_FOREST);
        left.setTheme(TILE_THEME_FOREST);
        bottom.setTheme(TILE_THEME_FOREST);
        right.setTheme(TILE_THEME_FOREST);
        castle.setTheme(TILE_THEME_CASTLE);

        tiles.combineOther(0, 0, top);
        tiles.combineOther(0, padding, left);
        tiles.combineOther(padding, settings.height - padding, bottom);
        tiles.combineOther(settings.width - padding, 0, right);
        tiles.combineOther(padding - 1, padding - 1, castle);

        digExits(tiles, settings.exits);

        return tiles;
    }
}
