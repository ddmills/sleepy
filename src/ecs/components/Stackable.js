import { Component } from 'geotic';
import { STACKABLE_DEFAULT } from '../../enums/Stackables';

export class Stackable extends Component {
    static properties = {
        identifier: STACKABLE_DEFAULT,
        quantity: 1,
    };

    get display() {
        return `x ${this.quantity}`;
    }

    increment(amount) {
        this.quantity += amount;
    }

    addOther(other) {
        this.increment(other.stackable.quantity);
        other.stackable.quantity = 0;
        other.destroy();
    }
}
