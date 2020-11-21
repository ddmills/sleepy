import { Component } from 'geotic';
import { game } from '../../core/Game';
import { SCREEN_INVENTORY } from '../../core/screens/ScreenType';
import { IsInventoried } from './IsInventoried';

export class Inventory extends Component {
    static properties = {
        content: '<EntityArray>',
    };

    addLoot(loot) {
        loot.add(IsInventoried, {
            owner: this.entity,
        });
        this.content.push(loot);
    }

    hasLoot(loot) {
        const idx = this.content.indexOf(loot);

        return idx >= 0;
    }

    removeLoot(loot) {
        const idx = this.content.indexOf(loot);

        if (idx >= 0) {
            this.content.splice(idx, 1);
            loot.remove(IsInventoried);
        }
    }

    dropLoot(loot) {
        this.removeLoot(loot);

        const pos = this.entity.position.getPos();

        loot.position.setPos(pos.x, pos.y);
    }

    onTryOpen(evt) {
        game.screens.pushScreen(SCREEN_INVENTORY, {
            accessible: this.entity,
            accessor: evt.data.interactor,
        });
        evt.handle();
    }

    onGetInteractions(evt) {
        evt.data.interactions.push({
            name: 'Open',
            evt: 'try-open',
        });
    }
}
