import { Component } from 'geotic';
import { game } from '../../core/Game';
import { SCREEN_INVENTORY } from '../../core/screens/ScreenType';
import { IsInventoried } from './IsInventoried';
import { Stackable } from './Stackable';

export class Inventory extends Component {
    static properties = {
        content: '<EntityArray>',
    };

    onDestroyed() {
        this.content.forEach((entity) => entity.destroy());
    }

    onQueryOwnership(evt) {
        this.content.forEach((entity) => {
            evt.data.result.add(entity);
            entity.fireEvent('query-ownership', { result: evt.data.result });
        });
    }

    getStackable(stackableIdentifier) {
        return this.content.find((entity) => {
            return (
                entity.has(Stackable) &&
                entity.stackable.identifier === stackableIdentifier
            );
        });
    }

    addLoot(loot) {
        if (loot.has(Stackable)) {
            const existing = this.getStackable(loot.stackable.identifier);

            if (existing) {
                existing.stackable.addOther(loot);

                return;
            }
        }

        loot.add(IsInventoried, {
            owner: this.entity,
        });

        this.content.push(loot);
    }

    hasLoot(loot) {
        const idx = this.content.indexOf(loot);

        return idx >= 0;
    }

    removeLoot(loot, quantity) {
        const isStackable = loot.has(Stackable);

        if (isStackable && !isNaN(quantity)) {
            loot.stackable.split(quantity);

            return this.removeLoot(loot);
        }

        const idx = this.content.indexOf(loot);

        if (idx >= 0) {
            this.content.splice(idx, 1);
            loot.isInventoried.destroy();
        }

        return loot;
    }

    dropLoot(loot, quantity) {
        const ob = this.removeLoot(loot, quantity);
        const pos = this.entity.position.getPos();

        ob.position.setPos(pos.x, pos.y);

        ob.fireEvent('dropped', {
            dropper: this.entity,
        });

        return ob;
    }

    onTryOpen(evt) {
        game.screens.replaceScreen(SCREEN_INVENTORY, {
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
