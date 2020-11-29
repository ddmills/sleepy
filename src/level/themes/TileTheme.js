import CastleTheme from './CastleTheme';
import ForestTheme from './ForestTheme';

export const TILE_THEME_FOREST = 0;
export const TILE_THEME_CASTLE = 1;

const mapping = {
    [TILE_THEME_FOREST]: ForestTheme,
    [TILE_THEME_CASTLE]: CastleTheme,
};

export const getThemePopulator = (theme) => {
    return mapping[theme];
};
