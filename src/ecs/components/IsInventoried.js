import { Component } from 'geotic';
import { Inventory } from './Inventory';

export class IsInventoried extends Component {
    onTryDrop(evt) {
        if (evt.data.target.has(Inventory)) {
            evt.data.target.inventory.dropLoot(this.entity);
        }
    }
}
