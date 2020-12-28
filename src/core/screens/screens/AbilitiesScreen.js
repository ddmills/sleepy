import Screen from './Screen';
import {
    INPUT_CMD_CONFIRM,
    INPUT_CMD_CANCEL,
    INPUT_CMD_MOVE_N,
    INPUT_CMD_MOVE_S,
} from '../../input/InputCommandType';
import { INPUT_DOMAIN_MAIN_MENU } from '../../input/InputDomainType';
import SelectableList from '../../../utils/SelectableList';
import { drawUIWindow } from '../../../utils/UIWindowUtil';

export default class AbilitiesScreen extends Screen {
    width = 14;
    PADDING_RIGHT = 2;
    PADDING_HEIGHT = 6;
    character;
    list = new SelectableList();

    get left() {
        return Math.floor((this.game.camera.width - this.width) - this.PADDING_RIGHT);
    }

    get top() {
        return this.PADDING_HEIGHT;
    }

    get height() {
        return Math.floor((this.game.camera.height - this.PADDING_HEIGHT * 2));
    }

    onEnter(ctx) {
        this.game.commands.pushDomain(INPUT_DOMAIN_MAIN_MENU);
        this.character = ctx.character;

        // this.refreshList();
    }

    refreshList() {
        // const evt = this.#interactable.fireEvent('get-interactions', {
        //     interactor: this.#interactor,
        //     interactions: [],
        // });

        // this.list.setItems([
        //     ...evt.data.interactions,
        //     {
        //         name: 'Back',
        //         isBack: true,
        //     },
        // ]);
    }

    onLeave() {
        this.game.commands.popDomain(INPUT_DOMAIN_MAIN_MENU);
    }

    selectItem() {
        // const interaction = this.list.selected;

        // if (interaction.isBack) {
        //     this.game.screens.popScreen();
        //     return;
        // }

        // this.#interactable.fireEvent(interaction.evt, {
        //     interactor: this.#interactor,
        // });

        // if (this.#interactable.isDestroyed) {
        //     this.game.screens.popScreen();

        //     return;
        // }

        // this.refreshList();
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

        drawUIWindow(
            this.left,
            this.top,
            this.width,
            this.height,
            'Abilities',
            this.character.glyph
        );
    }
}
