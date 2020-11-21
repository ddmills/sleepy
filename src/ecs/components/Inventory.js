import { Component } from 'geotic';
import { IsInventoried } from './IsInventoried';

export class Inventory extends Component {
    static properties = {
        content: '<EntityArray>',
    };

    addLoot(loot) {
        loot.add(IsInventoried);
        this.content.push(loot);
    }

    removeLoot(loot) {
        const idx = this.content.indexOf(loot);

        if (idx >= 0) {
            this.content.splice(idx, 1, loot);
            loot.remove(IsInventoried);
        }
    }
}
