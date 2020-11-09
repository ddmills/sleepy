import { GoalType } from './GoalType';
import { SUCCESS } from '../GoalActionResult';

export class BoredGoalType extends GoalType {
    static name = 'Bored';
    static cost = 1000;

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

        return SUCCESS;
    };
}
