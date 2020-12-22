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

export default class EquipmentScreen extends Screen {
    #accessor;
    list = new SelectableList();

    onEnter(ctx) {
        this.game.commands.pushDomain(INPUT_DOMAIN_MAIN_MENU);
        this.#accessor = ctx.accessor;
        this.list.setItems(Object.values(this.#accessor.equipmentSlot));
    }

    onLeave() {
        this.game.commands.popDomain(INPUT_DOMAIN_MAIN_MENU);
    }

    selectSlot() {
        const interactable = this.list.selected.content;

        if (interactable) {
            this.game.screens.pushScreen(SCREEN_INTERACT_MODAL, {
                interactable,
                interactor: this.#accessor,
            });
        }
    }

    handleInput() {
        const cmd = this.game.commands.getNextCommand();

        if (!cmd) {
            return;
        }

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
            this.selectSlot();
        }
    }

    onUpdate(dt) {
        this.handleInput();
        this.game.renderer.clear();
        this.game.renderer.drawTextCenter(
            3,
            `~ ${this.#accessor.moniker.display} Equipment ~`,
            'purple'
        );

        if (this.list.isEmpty) {
            this.game.renderer.drawTextCenter(6, 'There is nothing here.');
        }

        this.list.data.forEach(({ item, idx, isSelected }) => {
            const slot = item;
            const ypos = idx + 5;
            const selectedColor = 'yellow';

            if (isSelected) {
                this.game.renderer.drawText(
                    1,
                    ypos,
                    `→ ${slot.name}`,
                    selectedColor
                );
                this.game.renderer.drawText(14, ypos, '→', selectedColor);
            } else {
                this.game.renderer.drawText(1, ypos, `- ${slot.name}`);
                this.game.renderer.drawText(14, ypos, '-', '#2c3538');
            }

            if (slot.isEmpty) {
                this.game.renderer.drawText(15, ypos, '[empty]', '#2c3538');
            } else {
                const content = slot.content;
                this.game.renderer.draw(
                    15,
                    ypos,
                    content.glyph.char,
                    content.glyph.primary,
                    content.glyph.secondary,
                    content.glyph.background
                );
                this.game.renderer.drawText(
                    16,
                    ypos,
                    ` ${content.moniker.display}`
                );
            }
        });

        this.game.renderer.drawText(1, 1, '← back [esc]');
    }
}
