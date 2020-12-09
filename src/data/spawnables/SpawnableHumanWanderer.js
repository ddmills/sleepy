import { BoredGoalType } from '../../ai/GoalTypes';
import { game } from '../../core/Game';

export const createSpawnable = () => {
    const wanderer = game.ecs.createPrefab('HumanWanderer');

    wanderer.brain.pushGoal(BoredGoalType.create());

    return wanderer;
};
