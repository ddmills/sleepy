import { Component } from 'geotic';
import { Stackable } from './Stackable';

export class IsInventoried extends Component {
    static properties = {
        owner: '<Entity>',
    };

    isOwnedBy(entity) {
        return this.owner && this.owner.id === entity.id;
    }

    onQueryOwnership(evt) {
        evt.data.result.add(this.entity);
    }

    onTryDrop(evt) {
        const entity = this.entity;

        this.owner.inventory.dropLoot(this.entity);

        entity.fireEvent('dropped', {
            interactor: evt.data.interactor,
        });

        evt.handle();
    }

    onThrown(evt) {
        const isStackable = this.entity.has(Stackable);
        const quantity = isStackable ? 1 : null;

        this.owner.inventory.removeLoot(this.entity, quantity);
    }
}
