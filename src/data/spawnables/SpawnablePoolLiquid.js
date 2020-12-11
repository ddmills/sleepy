import { game } from '../../core/Game';

export const createSpawnable = (data) => {
    return game.ecs.createPrefab('Pool', {
        liquidContainer: {
            content: data.content,
            volume: data.volume,
        },
    });
};
