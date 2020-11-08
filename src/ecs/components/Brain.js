import { Component } from 'geotic';

export class Brain extends Component {
    static properties = {
        energy: 0,
        goals: '<EntityArray>',
    };

    onTakeAction(evt) {
        // if goals are empty...

        // pop any finished goals
        while (this.peekGoal() && this.peekGoal().isFinished()) {
            const goal = this.popGoal();
            console.log(`goal is finished. destroying - ${goal.name}`);

            goal.destroy();
        }

        // invoke 'TakeAction' on latest goal
        if (this.peekGoal().takeAction()) {
            this.energy -= this.peekGoal().cost;
        }

        // if action FAILS, then need to replan based on original intent?

        // return energy count (?)
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
