import { Component } from 'geotic';
import { Z } from '../../enums/Directions';

export class MoveCommand extends Component {
    static properties = {
        direction: Z,
    };
}
