import { Component } from 'geotic';
import { SatisfyHungerGoalType } from '../../ai/GoalTypes';

export class Eater extends Component {
    static properties = {
        hunger: 6000,
    };

    get isHungry() {
        return this.hunger <= 3000;
    }

    onBoredom(evt) {
        if (this.isHungry) {
            evt.data.goal = SatisfyHungerGoalType.create();
            evt.handle();
        }
    }

    onTryEatFood(evt) {
        if (Math.random() < 0.75) {
            this.entity.fireEvent('log', 'eats some food');
            this.hunger += evt.data.food;
            this.entity.fireEvent('energy-consumed', 150);

            evt.handle();
        } else {
            this.entity.fireEvent('log', 'fails to eat the food');
        }
    }
}
