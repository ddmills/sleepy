import { GoalType } from './GoalType';

export class BoredGoalType extends GoalType {
    static name = 'Bored';

    static isFinished = (entity, goal) => {
        return false;
    }

    static takeAction = (entity, goal) => {
        const evt = entity.fireEvent('boredom');

        if (evt.data.goal) {
            entity.brain.pushGoal(evt.data.goal);
            entity.fireEvent('take-action');

            return true;
        }

        entity.fireEvent('log', 'idling');

        return true;
    }
}

