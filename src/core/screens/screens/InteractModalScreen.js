import Screen from './Screen';
import {
    INPUT_CMD_CONFIRM,
    INPUT_CMD_CANCEL,
    INPUT_CMD_MOVE_N,
    INPUT_CMD_MOVE_S,
} from '../../input/InputCommandType';
import { INPUT_DOMAIN_MAIN_MENU } from '../../input/InputDomainType';

export default class InteractModalScreen extends Screen {
    #width = 16;
    #height = 16;
    #selectedIdx = 0;
    #interactions = [];
    #interactable;
    #interactor;

    get left() {
        return (this.game.renderer.width - this.#width) / 2;
    }

    get top() {
        return (this.game.renderer.height - this.#height) / 2;
    }

    onEnter(ctx) {
        this.game.commands.pushDomain(INPUT_DOMAIN_MAIN_MENU);
        this.#selectedIdx = 0;
        this.#interactable = ctx.interactable;
        this.#interactor = ctx.interactor;

        this.resetInteractions();
    }

    resetInteractions() {
        const evt = this.#interactable.fireEvent('get-interactions', {
            interactor: this.#interactor,
            interactions: [],
        });

        this.#interactions = evt.data.interactions;
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
        const idx = this.#selectedIdx % this.#interactions.length;
        const interaction = this.#interactions[idx];

        if (interaction) {
            this.#interactable.fireEvent(interaction.evt, {
                interactor: this.#interactor,
            });

            if (this.#interactable.isDestroyed) {
                this.game.screens.popScreen();

                return;
            }

            this.resetInteractions();
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
        this.game.renderer.clearArea(
            this.top,
            this.left,
            this.#width,
            this.#height
        );

        this.game.renderer.draw(
            this.top + 2,
            this.left + 2,
            this.#interactable.glyph.char,
            this.#interactable.glyph.primary,
            this.#interactable.glyph.secondary,
            this.#interactable.glyph.background
        );

        this.game.renderer.drawTextCenter(
            this.top + 2,
            `${this.#interactable.moniker.display}`
        );

        for (let i = this.left; i < this.left + this.#width; i++) {
            this.game.renderer.draw(i, this.top, '─');
            this.game.renderer.draw(i, this.top + this.#height, '─');
        }

        for (let i = this.top; i < this.top + this.#height; i++) {
            this.game.renderer.draw(this.left, i, '│');
            this.game.renderer.draw(this.left + this.#width, i, '│');
        }

        this.game.renderer.draw(this.left, this.top, '┌');
        this.game.renderer.draw(this.left + this.#width, this.top, '┐');
        this.game.renderer.draw(this.left, this.top + this.#height, '└');
        this.game.renderer.draw(
            this.left + this.#width,
            this.top + this.#height,
            '┘'
        );

        const idx = this.#selectedIdx % this.#interactions.length;

        if (this.#interactions.length === 0) {
            this.game.renderer.drawTextCenter(6, 'There is nothing here.');
        }

        const xpos = this.left + 2;

        this.#interactions.forEach((interaction, i) => {
            const isSelected = i === idx;
            const ypos = i + this.top + 5;

            if (isSelected) {
                this.game.renderer.drawText(xpos, ypos, '>', 'yellow');
            } else {
                this.game.renderer.drawText(xpos, ypos, '-');
            }

            this.game.renderer.drawText(xpos + 1, ypos, interaction.name);
        });
    }
}
