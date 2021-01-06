import { BoredGoalType } from '../../ai/GoalTypes';
import { game } from '../../core/Game';

export const createSpawnable = () => {
    const goblin = game.ecs.createPrefab('GoblinBruiser');

    goblin.brain.pushGoal(BoredGoalType.create());

    return goblin;
};
