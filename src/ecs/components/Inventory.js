import { Component } from 'geotic';
import { game } from '../../core/Game';
import { SCREEN_INVENTORY } from '../../core/screens/ScreenType';
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
            entity: this.entity,
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
