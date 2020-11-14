import { Component } from 'geotic';
import { MoveGoalType } from '../../ai/GoalTypes';
import * as Directions from '../../enums/Directions';

export class Wandering extends Component {
    onBoredom(evt) {
        if (Math.random() > 0.25) {
            return;
        }

        const direction = Math.floor(Math.random() * 9);
        const delta = Directions.delta(direction);

        evt.data.goal = MoveGoalType.create({
            data: delta,
        });
        evt.handle();
    }
}
