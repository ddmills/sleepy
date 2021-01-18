import { BoredGoalType } from '../../ai/GoalTypes';
import { game } from '../../core/Game';

export const createSpawnable = () => {
    const snake = game.ecs.createPrefab('Snake');

    snake.brain.pushGoal(BoredGoalType.create());

    return snake;
};
