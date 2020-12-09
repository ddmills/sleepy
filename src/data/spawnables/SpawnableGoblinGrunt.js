import { BoredGoalType } from '../../ai/GoalTypes';
import { game } from '../../core/Game';

export const createSpawnable = () => {
    const goblin = game.ecs.createPrefab('Goblin');

    goblin.brain.pushGoal(BoredGoalType.create());

    return goblin;
};
