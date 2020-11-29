import CastleTheme from './CastleTheme';
import ForestTheme from './ForestTheme';
import CabinTheme from './CabinTheme';

export const TILE_THEME_FOREST = 0;
export const TILE_THEME_CASTLE = 1;
export const TILE_THEME_CABIN = 2;

const mapping = {
    [TILE_THEME_FOREST]: ForestTheme,
    [TILE_THEME_CASTLE]: CastleTheme,
    [TILE_THEME_CABIN]: CabinTheme,
};

export const getThemePopulator = (theme) => {
    return mapping[theme];
};
