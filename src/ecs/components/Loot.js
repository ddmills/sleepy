import { Component } from 'geotic';
import { Inventory } from './Inventory';
import { IsInventoried } from './IsInventoried';

export class Loot extends Component {
    onGetInteractions(evt) {
        if (this.entity.has(IsInventoried)) {
            evt.data.interactions.push({
                name: 'Drop',
                evt: 'try-drop',
            });
        } else {
            evt.data.interactions.push({
                name: 'Pickup',
                evt: 'try-pickup',
            });
        }
    }

    onTryPickup(evt) {
        if (evt.data.target.has(Inventory)) {
            evt.data.target.inventory.addLoot(this.entity);
            evt.handle();
        }
    }
}
