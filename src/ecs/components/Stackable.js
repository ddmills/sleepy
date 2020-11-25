import { Component } from 'geotic';
import { game } from '../../core/Game';
import { STACKABLE_DEFAULT } from '../../enums/Stackables';
import { IsInventoried } from './IsInventoried';

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

    split(quantity) {
        if (quantity >= this.quantity) {
            quantity = this.quantity;
            return this.entity;
        }

        const clone = game.engine.cloneEntity(this.entity);
        clone.stackable.quantity -= quantity;;

        this.quantity = quantity;

        if (clone.has(IsInventoried)) {
            // make sure inventory contents are still "correct"
            clone.isInventoried.owner.inventory.content.push(clone);
        }

        return clone;
    }
}
