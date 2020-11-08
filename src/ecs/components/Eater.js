import { Component } from 'geotic';
import { SatisfyHungerGoalType } from '../../ai/GoalTypes';

export class Eater extends Component {
    static properties = {
        hunger: 7,
    };

    get isHungry() {
        return this.hunger <= 3;
    }

    onBoredom(evt) {
        if (this.isHungry) {
            evt.data.goal = SatisfyHungerGoalType.create();
            evt.handle();
        }
    }

    onEatFood(evt) {
        if (Math.random() < 0.75) {
            this.entity.fireEvent('log', 'eats some food');
            this.hunger += evt.data.food;

            evt.handle();
        } else {
            this.entity.fireEvent('log', 'fails to eat the food');
        }
    }
}
