import { Component } from 'geotic';
import { Inventory } from './Inventory';
import { IsInventoried } from './IsInventoried';

export class Loot extends Component {
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
                evt: 'try-pickup',
            });
        }
    }

    onTryPickup(evt) {
        evt.data.interactor.inventory.addLoot(this.entity);
        evt.handle();
    }

    onTryTake(evt) {
        const owner = this.entity.isInventoried.owner;

        owner.inventory.removeLoot(this.entity);
        evt.data.interactor.inventory.addLoot(this.entity);

        evt.handle();
    }
}
