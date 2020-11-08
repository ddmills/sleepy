import { Component } from 'geotic';
import { SUCCESS, INVALID, FAILURE } from '../../ai/GoalActionResult';

export class Brain extends Component {
    static properties = {
        energy: 0,
        goals: '<EntityArray>',
    };

    onTakeAction(evt) {
        if (this.energy < 0) {
            return;
        }

        while (this.peekGoal() && this.peekGoal().isFinished()) {
            const goal = this.popGoal();
            this.entity.fireEvent('log', `finished ${goal.name}`);

            goal.destroy();
        }

        const currentGoal = this.peekGoal();
        const result = currentGoal.takeAction();

        if (result == SUCCESS) {
            this.energy -= currentGoal.cost;
        } else if (result == FAILURE) {
            this.energy -= currentGoal.cost;
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
                console.log('removing goal', g.goal.name);
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
