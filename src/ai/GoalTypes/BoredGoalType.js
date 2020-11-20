import { GoalType } from './GoalType';
import { SUCCESS } from '../GoalActionResult';
import { KillSomethingGoalType } from './KillSomethingGoalType';

export class BoredGoalType extends GoalType {
    static name = 'Bored';

    static isFinished = (entity, goal) => {
        return false;
    };

    static takeAction = (entity, goal) => {
        // do i detect any hostiles?
        const detectHostiles = entity.fireEvent('try-detect-hostiles');

        if (detectHostiles.handled) {
            const killGoal = KillSomethingGoalType.createAsSubGoal(goal, {
                target: detectHostiles.data.target.id
            });

            entity.brain.pushGoal(killGoal);

            entity.fireEvent('take-action');

            return SUCCESS;
        }

        // is there anything i want to do since i'm bored?
        const boredomGoal = entity.fireEvent('boredom');

        if (boredomGoal.data.goal) {
            entity.brain.pushGoal(boredomGoal.data.goal);
            entity.fireEvent('take-action');

            return SUCCESS;
        }

        // nothing to do, just idle
        entity.fireEvent('energy-consumed', 1000);

        return SUCCESS;
    };
}
