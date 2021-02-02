import { EditorMap } from './EditorMap';

export const generateWorld = (width, height, seed = 'seed1') => {
    return new EditorMap(width, height, seed);
};
