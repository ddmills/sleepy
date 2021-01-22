import CastleTheme from './CastleTheme';
import ForestTheme from './ForestTheme';
import CanyonTheme from './CanyonTheme';
import CabinTheme from './CabinTheme';
import DesertTheme from './DesertTheme';

export const TILE_THEME_FOREST = 0;
export const TILE_THEME_CASTLE = 1;
export const TILE_THEME_CABIN = 2;
export const TILE_THEME_CANYON = 3;
export const TILE_THEME_DESERT = 4;

const mapping = {
    [TILE_THEME_FOREST]: ForestTheme,
    [TILE_THEME_CASTLE]: CastleTheme,
    [TILE_THEME_CABIN]: CabinTheme,
    [TILE_THEME_CANYON]: CanyonTheme,
    [TILE_THEME_DESERT]: DesertTheme,
};

export const getThemePopulator = (theme) => {
    return mapping[theme];
};
