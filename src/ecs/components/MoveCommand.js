import { Component } from 'geotic';
import { DIR_Z } from '../../enums/Directions';

export class MoveCommand extends Component {
    static properties = {
        direction: DIR_Z,
    };
}
