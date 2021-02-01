import { Component } from 'geotic';
import { Stackable } from './Stackable';

export class IsInventoried extends Component {
    static properties = {
        ownerId: 0,
    };

    get owner() {
        return getEntityRef(this, 'ownerId');
    }

    set owner(value) {
        setEntityRef(this, 'ownerId', value);
    }

    isOwnedBy(entity) {
        return this.owner && this.owner.id === entity.id;
    }

    onQueryOwnership(evt) {
        evt.data.result.add(this.entity);
    }

    onTryDrop(evt) {
        this.owner.inventory.dropLoot(this.entity);

        evt.data.interactor.fireEvent('energy-consumed', 200);

        evt.handle();
    }

    onThrown(evt) {
        const isStackable = this.entity.has(Stackable);
        const quantity = isStackable ? 1 : null;

        this.owner.inventory.removeLoot(this.entity, quantity);
    }
}
