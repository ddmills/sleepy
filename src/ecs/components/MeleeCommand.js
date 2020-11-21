import { Component } from 'geotic';
import { DIR_Z } from '../../enums/Directions';

export class MeleeCommand extends Component {
    static properties = {
        target: '<Entity>',
    };
}
