import { BoredGoalType } from '../../ai/GoalTypes';
import { game } from '../../core/Game';

export const createSpawnable = () => {
    const bear = game.ecs.createPrefab('Bear');

    bear.brain.pushGoal(BoredGoalType.create());

    return bear;
};
