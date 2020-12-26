import { Component } from 'geotic';
import { STATUS_BLEEDING } from '../../data/Statuses';

export class Status extends Component {
    static allowMultiple = true;
    static properties = {
        key: STATUS_BLEEDING,
        duration: 4000,
        lifetime: 0,
        potency: 0.5,
    };

    remainingLifetime() {
        return this.duration - this.lifetime;
    }

    isCompleted() {
        return this.lifetime >= this.duration;
    }
}
