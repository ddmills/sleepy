import { Component } from 'geotic';

export class Hunger extends Component {
    static properties = {
        value: 3,
    };

    get isHungry() {
        return this.value <= 0;
    }

    onBoredom(evt) {
        if (this.isHungry) {
            console.log(`hungry!`);
            evt.data.goal = this.ecs.createPrefab('Goal', {
                goal: {
                    name: 'satisfy-hunger',
                    cost: 1,
                },
            });
            evt.handle();
        }
    }
}
