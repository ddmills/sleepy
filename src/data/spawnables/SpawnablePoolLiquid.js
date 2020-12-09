import { game } from '../../core/Game';

export const createSpawnable = (data) => {
    return game.ecs.createPrefab('Pool', {
        liquidContainer: {
            contents: data.contents,
            volume: data.volume,
        },
    });
};
