import Screen from './Screen';
import {
    INPUT_CMD_CONFIRM,
    INPUT_CMD_CANCEL,
    INPUT_CMD_MOVE_N,
    INPUT_CMD_MOVE_S,
} from '../../input/InputCommandType';
import { INPUT_DOMAIN_MAIN_MENU } from '../../input/InputDomainType';
import { SCREEN_INTERACT_MODAL } from '../ScreenType';

export default class InventoryScreen extends Screen {
    #selectedIdx = 0;
    #accessible;
    #accessor;

    onEnter(ctx) {
        this.game.commands.pushDomain(INPUT_DOMAIN_MAIN_MENU);
        this.#selectedIdx = 0;
        this.#accessible = ctx.accessible;
        this.#accessor = ctx.accessor;
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
        const items = this.#accessible.inventory.content;
        const idx = this.#selectedIdx % items.length;
        const interactable = items[idx];

        if (interactable) {
            this.game.screens.pushScreen(SCREEN_INTERACT_MODAL, {
                interactable,
                interactor: this.#accessor,
            });
        }
    }

    onInputCommand(cmd) {
        if (cmd.type === INPUT_CMD_CANCEL) {
            this.game.screens.popScreen();
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
        this.game.renderer.drawTextCenter(
            3,
            `~ ${this.#accessible.moniker.display} Inventory ~`,
            'yellow'
        );

        const items = this.#accessible.inventory.content;
        const idx = this.#selectedIdx % items.length;

        if (items.length === 0) {
            this.game.renderer.drawTextCenter(6, 'There is nothing here.');
        }

        items.forEach((item, i) => {
            const isSelected = i === idx;
            const ypos = i + 5;

            if (isSelected) {
                this.game.renderer.drawText(1, ypos, '→', 'yellow');
            } else {
                this.game.renderer.drawText(1, ypos, '-');
            }

            this.game.renderer.draw(
                2,
                ypos,
                item.glyph.char,
                item.glyph.primary,
                item.glyph.secondary,
                item.glyph.background
            );

            const textLen = this.game.renderer.computeTextWidth(item.moniker.display);

            this.game.renderer.drawText(4, ypos, item.moniker.display);

            if (item.isEquipped) {
                const slot = item.isEquipped.slot.name;

                this.game.renderer.drawText(4 + textLen + 0.5, ypos, `[${slot}]`, '#2c3538');
            }
        });

        this.game.renderer.drawText(1, 1, '← back [esc]');
    }
}
