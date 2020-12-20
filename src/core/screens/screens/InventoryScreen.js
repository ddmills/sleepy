import Screen from './Screen';
import {
    INPUT_CMD_CONFIRM,
    INPUT_CMD_CANCEL,
    INPUT_CMD_MOVE_N,
    INPUT_CMD_MOVE_S,
} from '../../input/InputCommandType';
import { INPUT_DOMAIN_MAIN_MENU } from '../../input/InputDomainType';
import { SCREEN_INTERACT_MODAL } from '../ScreenType';
import SelectableList from '../../../utils/SelectableList';

export default class InventoryScreen extends Screen {
    #accessible;
    #accessor;
    list = new SelectableList();

    onEnter(ctx) {
        this.game.commands.pushDomain(INPUT_DOMAIN_MAIN_MENU);
        this.#accessible = ctx.accessible;
        this.#accessor = ctx.accessor;
        this.list.setItems(this.#accessible.inventory.content);
    }

    onLeave() {
        this.game.commands.popDomain(INPUT_DOMAIN_MAIN_MENU);
    }

    selectItem() {
        const interactable = this.list.selected;

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
            this.list.up();
        }

        if (cmd.type === INPUT_CMD_MOVE_S) {
            this.list.down();
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

        if (this.list.items.length === 0) {
            this.game.renderer.drawTextCenter(6, 'There is nothing here.');
        }

        this.list.data.forEach(({ item, idx, isSelected }) => {
            const ypos = idx + 5;

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

            const textLen = this.game.renderer.computeTextWidth(
                item.moniker.display
            );

            this.game.renderer.drawText(4, ypos, item.moniker.display);

            if (item.isEquipped) {
                const slot = item.isEquipped.slot.name;

                this.game.renderer.drawText(
                    4 + textLen + 0.5,
                    ypos,
                    `[${slot}]`,
                    '#2c3538'
                );
            }
        });

        this.game.renderer.drawText(1, 1, '← back [esc]');
    }
}
