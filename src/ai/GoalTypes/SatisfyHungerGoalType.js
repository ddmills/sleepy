import { GoalType } from './GoalType';
import { EatFoodGoalType } from './EatFoodGoalType';
import { SUCCESS } from '../GoalActionResult';

export class SatisfyHungerGoalType extends GoalType {
    static name = 'SatisfyHunger';

    static isFinished = (entity, goal) => {
        return !entity.eater.isHungry;
    };

    static takeAction = (entity, goal) => {
        entity.fireEvent('log', 'preparing to eat food');

        entity.brain.pushGoal(EatFoodGoalType.createAsSubGoal(goal));
        entity.brain.pushGoal(EatFoodGoalType.createAsSubGoal(goal));
        entity.brain.pushGoal(EatFoodGoalType.createAsSubGoal(goal));

        entity.fireEvent('take-action');

        return SUCCESS;
    };
}
