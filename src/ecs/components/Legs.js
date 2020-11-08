import { Component } from 'geotic';
import * as directions from '../../enums/Directions';
import { MoveCommand } from './MoveCommand';

export class Legs extends Component {
    onMoveCommand(evt) {
        const direction = evt.data.direction;
        const name = directions.fullName(direction);

        if (this.entity.has(MoveCommand)) {
            this.entity.remove(MoveCommand);
        }

        this.entity.add(MoveCommand, {
            direction,
        });

        evt.handle();
    }
}
