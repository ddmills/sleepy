import { GoalType } from './GoalType';
import { SUCCESS, FAILURE } from '../GoalActionResult';

export class EatFoodGoalType extends GoalType {
    static name = 'EatFood';

    static isFinished = (entity, goal) => {
        return goal.complete;
    };

    static takeAction = (entity, goal) => {
        const evt = entity.fireEvent('eat-food', {
            food: 6,
        });

        if (evt.handled) {
            goal.complete = true;

            return SUCCESS;
        }

        return FAILURE;
    };
}
