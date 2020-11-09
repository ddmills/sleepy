import { Component } from 'geotic';
import { SUCCESS, INVALID, FAILURE } from '../../ai/GoalActionResult';

export class Brain extends Component {
    static properties = {
        goals: '<EntityArray>',
    };

    onTakeAction(evt) {
        while (this.peekGoal() && this.peekGoal().isFinished()) {
            const goal = this.popGoal();
            this.entity.fireEvent('log', `finished ${goal.name}`);

            goal.destroy();
        }

        const currentGoal = this.peekGoal();
        const result = currentGoal.takeAction();

        if (result == SUCCESS) {
            this.entity.fireEvent('energy-consumed', currentGoal.cost);
        } else if (result == FAILURE) {
            this.entity.fireEvent('energy-consumed', currentGoal.cost);
            this.removeGoal(currentGoal);
        } else if (result == INVALID) {
            this.removeGoal(currentGoal);
            this.entity.fireEvent('take-action');
        }

        evt.handle();
    }

    removeGoal(goal) {
        this.goals = this.goals.filter((g) => {
            const isSelf = Boolean(g.id === goal.id);
            const isSiblingGoal = Boolean(
                g.goal.originalIntent &&
                    g.goal.originalIntent.id === goal.originalIntent.id
            );

            if (isSelf || isSiblingGoal) {
                g.destroy();

                return false;
            }

            return true;
        });
    }

    pushGoal(goal) {
        goal.goal.parent = this.entity;
        return this.goals.push(goal);
    }

    popGoal() {
        return this.goals.pop().goal;
    }

    peekGoal() {
        return this.goals[this.goals.length - 1].goal;
    }
}
