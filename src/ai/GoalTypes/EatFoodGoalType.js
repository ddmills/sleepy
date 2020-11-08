import { GoalType } from './GoalType';

export class EatFoodGoalType extends GoalType {
    static name = 'EatFood';

    static isFinished = (entity, goal) => {
        return goal.complete;
    }

    static takeAction = (entity, goal) => {
        const evt = entity.fireEvent('eat-food', {
            food: 6
        });

        goal.complete = evt.handled;

        return goal.complete;
    }
}
