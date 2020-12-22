import Screen from './Screen';
import {
    INPUT_CMD_CONFIRM,
    INPUT_CMD_CANCEL,
    INPUT_CMD_MOVE_N,
    INPUT_CMD_MOVE_S,
} from '../../input/InputCommandType';
import { INPUT_DOMAIN_MAIN_MENU } from '../../input/InputDomainType';
import SelectableList from '../../../utils/SelectableList';

export default class InteractModalScreen extends Screen {
    #width = 16;
    #height = 12;
    #interactable;
    #interactor;
    list = new SelectableList();

    get left() {
        return Math.floor((this.game.camera.width - this.#width) / 2);
    }

    get top() {
        return Math.floor((this.game.camera.height - this.#height) / 2);
    }

    onEnter(ctx) {
        this.game.commands.pushDomain(INPUT_DOMAIN_MAIN_MENU);
        this.#interactable = ctx.interactable;
        this.#interactor = ctx.interactor;

        this.refreshList();
    }

    refreshList() {
        const evt = this.#interactable.fireEvent('get-interactions', {
            interactor: this.#interactor,
            interactions: [],
        });

        this.list.setItems([
            ...evt.data.interactions,
            {
                name: 'Back',
                isBack: true,
            },
        ]);
    }

    onLeave() {
        this.game.commands.popDomain(INPUT_DOMAIN_MAIN_MENU);
    }

    selectItem() {
        const interaction = this.list.selected;

        if (interaction.isBack) {
            this.game.screens.popScreen();
            return;
        }

        this.#interactable.fireEvent(interaction.evt, {
            interactor: this.#interactor,
        });

        if (this.#interactable.isDestroyed) {
            this.game.screens.popScreen();

            return;
        }

        this.refreshList();
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
            this.selectItem();
        }
    }

    onUpdate(dt) {
        this.handleInput();

        this.game.renderer.clearArea(
            this.left,
            this.top,
            this.#width + 1,
            this.#height + 1
        );

        this.game.renderer.draw(
            this.left + 2,
            this.top + 2,
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

        let listPadding = 4;
        const xpos = this.left + 2;

        if (this.#interactable.weapon) {
            const weaponDmg = this.#interactable.weapon.getShortDescription(
                this.#interactor
            );

            this.game.renderer.drawText(
                xpos,
                this.top + listPadding,
                weaponDmg
            );

            listPadding += 2;
        }

        this.list.data.forEach(({ item, idx, isSelected }) => {
            const ypos = idx + this.top + listPadding;

            if (isSelected) {
                this.game.renderer.drawText(
                    xpos,
                    ypos,
                    `→ ${item.name}`,
                    'yellow'
                );
            } else {
                this.game.renderer.drawText(xpos, ypos, `- ${item.name}`);
            }
        });
    }
}
