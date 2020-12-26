import { Component } from 'geotic';
import { Inventory } from './Inventory';
import { IsInventoried } from './IsInventoried';

export class Loot extends Component {
    take(newOwner) {
        if (this.entity.isInventoried) {
            if (this.entity.isInventoried.isOwnedBy(newOwner)) {
                return true;
            }

            const owner = this.entity.isInventoried.owner;

            owner.inventory.removeLoot(this.entity);
        }

        newOwner.inventory.addLoot(this.entity);

        return true;
    }

    onGetInteractions(evt) {
        const interactor = evt.data.interactor;
        const isInventoried = this.entity.has(IsInventoried);

        if (!interactor.has(Inventory)) {
            return;
        }

        if (isInventoried) {
            if (interactor.inventory.hasLoot(this.entity)) {
                evt.data.interactions.push({
                    name: 'Drop',
                    evt: 'try-drop',
                });
            } else {
                evt.data.interactions.push({
                    name: 'Take',
                    evt: 'try-take',
                });
            }
        } else {
            evt.data.interactions.push({
                name: 'Pickup',
                evt: 'try-pick-up',
            });
        }
    }

    onEquipped(evt) {
        if (!evt.data.interactor.has(Inventory)) {
            return;
        }

        if (evt.data.interactor.inventory.hasLoot(this.entity)) {
            return;
        }

        evt.data.interactor.inventory.addLoot(this.entity);
    }

    onTryPickUp(evt) {
        this.take(evt.data.interactor);

        evt.data.interactor.fireEvent('energy-consumed', 100);
        evt.handle();
    }

    onTryTake(evt) {
        this.take(evt.data.interactor);

        evt.data.interactor.fireEvent('energy-consumed', 100);
        evt.handle();
    }
}
