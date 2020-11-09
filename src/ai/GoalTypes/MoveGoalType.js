import { GoalType } from './GoalType';
import { SUCCESS, FAILURE } from '../GoalActionResult';

export class MoveGoalType extends GoalType {
    static name = 'Move';

    static isFinished = (entity, goal) => {
        return goal.complete;
    };

    static takeAction = (entity, goal) => {
        const evt = entity.fireEvent('try-move', {
            x: goal.data.x,
            y: goal.data.y,
        });

        if (evt.handled) {
            goal.complete = true;

            return SUCCESS;
        }

        return FAILURE;
    };
}
