import { Component } from 'geotic';
import { game } from '../../core/Game';
import { SCREEN_ADVENTURE, SCREEN_CURSOR } from '../../core/screens/ScreenType';
import { Inventory } from './Inventory';
import { IsInventoried } from './IsInventoried';
import { Stackable } from './Stackable';

export class Throwable extends Component {
    onGetInteractions(evt) {
        if (!evt.data.interactor.has(Inventory)) {
            return;
        }

        if (!evt.data.interactor.inventory.hasLoot(this.entity)) {
            return;
        }

        evt.data.interactions.push({
            name: 'Throw',
            evt: 'try-throw',
        });
    }

    _removeFromInventory() {
        if (!this.entity.has(IsInventoried)) {
            return;
        }

        const isStackable = this.entity.has(Stackable);
        const quantity = isStackable ? 1 : null;

        this.entity.isInventoried.owner.inventory.removeLoot(this.entity, quantity);
    }

    onTryThrow(evt) {
        game.screens.pushScreen(SCREEN_CURSOR, {
            onResult: (cursor) => {
                game.screens.setScreen(SCREEN_ADVENTURE);

                this._removeFromInventory();

                this.entity.position.setPos(cursor.position.x, cursor.position.y);

                // emit a "hit-by" on target entity (?)
                // emit an "hit" on thrown entity (?)
            },
            onCancel: () => {
                game.screens.popScreen();
            }
        });
    }
}
