import { Component } from 'geotic';
import { INVALID, FAILURE } from '../../ai/GoalActionResult';

export class Brain extends Component {
    static properties = {
        goalIds: [],
    };

    get goals() {
        return getEntityArrayRef(this, 'goalIds');
    }

    onDestroyed() {
        this.goals.forEach((entity) => {
            entity.destroy();
        });
    }

    onTakeAction(evt) {
        while (this.peekGoal() && this.peekGoal().isFinished()) {
            this.popGoal().entity.destroy();
        }

        const currentGoal = this.peekGoal();
        const result = currentGoal.takeAction();

        if (result === FAILURE) {
            this.removeGoal(currentGoal);
        } else if (result === INVALID) {
            this.removeGoal(currentGoal);
            this.entity.fireEvent('take-action');
        }

        evt.handle();
    }

    removeGoal(goal) {
        const goalsToDestroy = [];

        this.goalIds = this.goalIds.filter((goalId) => {
            const goal = this.world.getEntity(goalId);

            if (!goal) {
                return false;
            }

            const isSelf = Boolean(g.id === goal.entity.id);
            const isSiblingGoal = Boolean(
                g.goal.originalIntent &&
                    g.goal.originalIntent.id === goal.originalIntent.id
            );

            if (isSelf || isSiblingGoal) {
                goalsToDestroy.push(g.goal);
                return false;
            }

            return true;
        });

        goalsToDestroy.forEach((g) => g.entity.destroy());
    }

    pushGoal(goal) {
        if (!(goal instanceof Component)) {
            throw new Error('Pushing non-component goal!', goal);
        }

        goal.parent = this.entity;

        return this.goalIds.push(goal.entity.id);
    }

    popGoal() {
        const goal = this.goals.pop().goal;
        this.goalIds.pop();

        return goal;
    }

    peekGoal() {
        return this.goals[this.goals.length - 1].goal;
    }
}
