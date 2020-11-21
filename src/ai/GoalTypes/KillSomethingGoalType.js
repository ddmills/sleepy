import { GoalType } from './GoalType';
import { FAILURE, SUCCESS } from '../GoalActionResult';
import { Dead } from '../../ecs/components';

export class KillSomethingGoalType extends GoalType {
    static name = 'KillSomething';

    static isFinished = (entity, goal) => {
        return !goal.target || goal.target.has(Dead) || goal.target.isDestroyed;
    };

    static takeAction = (entity, goal) => {
        let evt = entity.fireEvent('try-melee', {
            target: goal.target,
        });

        if (evt.handled) {
            return SUCCESS;
        }

        // try defense
        // try ranged
        // try items
        // try movement
        // fail to intent

        return FAILURE;
    };
}
