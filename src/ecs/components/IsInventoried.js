import { Component } from 'geotic';
import { Stackable } from './Stackable';

export class IsInventoried extends Component {
    static properties = {
        owner: '<Entity>',
    };

    onTryDrop(evt) {
        this.owner.inventory.dropLoot(this.entity);

        evt.handle();
    }

    onThrown(evt) {
        const isStackable = this.entity.has(Stackable);
        const quantity = isStackable ? 1 : null;

        this.owner.inventory.removeLoot(this.entity, quantity);
    }
}
