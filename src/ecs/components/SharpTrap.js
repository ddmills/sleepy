import { Component } from 'geotic';
import { statCheck, STAT_FINESSE } from '../../data/Stats';

export class SharpTrap extends Component {
    static properties = {
        challenge: 15,
    };

    test(entity) {
        return statCheck(STAT_FINESSE, entity, this.challenge);
    }
}
