import Screen from './Screen';
import {
    INPUT_CMD_CONFIRM,
    INPUT_CMD_CANCEL,
    INPUT_CMD_MOVE_N,
    INPUT_CMD_MOVE_S,
} from '../../input/InputCommandType';
import { INPUT_DOMAIN_MAIN_MENU } from '../../input/InputDomainType';
import { SCREEN_ADVENTURE, SCREEN_INTERACT_MODAL } from '../ScreenType';

export default class InventoryScreen extends Screen {
    #selectedIdx = 0;
    #entity;

    onEnter(ctx) {
        this.game.commands.pushDomain(INPUT_DOMAIN_MAIN_MENU);
        this.#selectedIdx = 0;
        this.#entity = ctx.entity;
    }

    onLeave() {
        this.game.commands.popDomain(INPUT_DOMAIN_MAIN_MENU);
    }

    pointerUp() {
        Math.max(0, --this.#selectedIdx);
    }

    pointerDown() {
        this.#selectedIdx++;
    }

    selectItem() {
        const items = this.#entity.inventory.content;
        const idx = this.#selectedIdx % items.length;
        const item = items[idx];

        if (item) {
            this.game.screens.setScreen(SCREEN_INTERACT_MODAL, {
                entity: item,
                target: this.#entity,
            });
        }
    }

    onInputCommand(cmd) {
        if (cmd.type === INPUT_CMD_CANCEL) {
            this.game.screens.setScreen(SCREEN_ADVENTURE);
        }

        if (cmd.type === INPUT_CMD_MOVE_N) {
            this.pointerUp();
        }

        if (cmd.type === INPUT_CMD_MOVE_S) {
            this.pointerDown();
        }

        if (cmd.type === INPUT_CMD_CONFIRM) {
            this.selectItem();
        }
    }

    onUpdate(dt) {
        this.game.renderer.clear();
        this.game.renderer.drawTextCenter(3, `~ ${this.#entity.moniker.display} Inventory ~`, 'yellow');

        const items = this.#entity.inventory.content;
        const idx = this.#selectedIdx % items.length;

        if (items.length === 0) {
            this.game.renderer.drawTextCenter(6, 'There is nothing here.');
        }

        items.forEach((item, i) => {
            const isSelected = i === idx;
            const ypos = i + 5;

            if (isSelected) {
                this.game.renderer.drawText(1, ypos, '>', 'yellow');
            } else {
                this.game.renderer.drawText(1, ypos, '-');
            }

            this.game.renderer.drawText(2, ypos, item.moniker.display);
        });

        this.game.renderer.drawText(1, 1, '← back [esc]');
    }
}
