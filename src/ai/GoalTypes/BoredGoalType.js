import { GoalType } from './GoalType';
import { SUCCESS } from '../GoalActionResult';

export class BoredGoalType extends GoalType {
    static name = 'Bored';

    static isFinished = (entity, goal) => {
        return false;
    };

    static takeAction = (entity, goal) => {
        const evt = entity.fireEvent('boredom');

        if (evt.data.goal) {
            entity.brain.pushGoal(evt.data.goal);
            entity.fireEvent('take-action');

            return SUCCESS;
        }

        entity.fireEvent('consume-energy', 1000);

        return SUCCESS;
    };
}
