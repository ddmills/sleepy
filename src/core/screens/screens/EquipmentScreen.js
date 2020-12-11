import Screen from './Screen';
import {
    INPUT_CMD_CONFIRM,
    INPUT_CMD_CANCEL,
    INPUT_CMD_MOVE_N,
    INPUT_CMD_MOVE_S,
} from '../../input/InputCommandType';
import { INPUT_DOMAIN_MAIN_MENU } from '../../input/InputDomainType';
import { SCREEN_INTERACT_MODAL } from '../ScreenType';

export default class EquipmentScreen extends Screen {
    #selectedIdx = 0;
    #accessor;

    get slots() {
        return Object.values(this.#accessor.equipmentSlot);
    }

    get selectedSlot() {
        return this.slots[this.#selectedIdx];
    }

    onEnter(ctx) {
        this.game.commands.pushDomain(INPUT_DOMAIN_MAIN_MENU);
        this.#selectedIdx = 0;
        this.#accessor = ctx.accessor;
    }

    onLeave() {
        this.game.commands.popDomain(INPUT_DOMAIN_MAIN_MENU);
    }

    pointerUp() {
        this.#selectedIdx--;

        if (this.#selectedIdx < 0) {
            this.#selectedIdx = this.slots.length - 1;
        }
    }

    pointerDown() {
        this.#selectedIdx++;

        if (this.#selectedIdx >= this.slots.length) {
            this.#selectedIdx = 0;
        }
    }

    selectSlot() {
        console.log('select slot', this.selectedSlot);

        const interactable = this.selectedSlot.contents;

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
            this.selectSlot();
        }
    }

    onUpdate(dt) {
        this.game.renderer.clear();
        this.game.renderer.drawTextCenter(
            3,
            `~ ${this.#accessor.moniker.display} Equipment ~`,
            'purple'
        );

        if (this.slots.length === 0) {
            this.game.renderer.drawTextCenter(6, 'There is nothing here.');
        }

        this.slots.forEach((slot, i) => {
            const isSelected = i === this.#selectedIdx;
            const ypos = i + 5;
            const selectedColor = 'yellow';

            if (isSelected) {
                this.game.renderer.drawText(1, ypos, `→ ${slot.name}`, selectedColor);
                this.game.renderer.drawText(14, ypos, '→', selectedColor);
            } else {
                this.game.renderer.drawText(1, ypos, `- ${slot.name}`);
                this.game.renderer.drawText(14, ypos, '-', '#2c3538');
            }

            if (slot.isEmpty) {
                this.game.renderer.drawText(15, ypos, '[empty]', '#2c3538');
            } else {
                const contents = slot.contents;
                this.game.renderer.draw(15, ypos,
                    contents.glyph.char,
                    contents.glyph.primary,
                    contents.glyph.secondary,
                    contents.glyph.background
                );
                this.game.renderer.drawText(16, ypos, ` ${contents.moniker.display}`);
            }
        });

        this.game.renderer.drawText(1, 1, '← back [esc]');
    }
}
