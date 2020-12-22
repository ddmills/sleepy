import Screen from './Screen';
import {
    INPUT_CMD_CONFIRM,
    INPUT_CMD_SAVE,
    INPUT_CMD_LOAD,
    INPUT_CMD_NEW_GAME,
} from '../../input/InputCommandType';
import { INPUT_DOMAIN_MAIN_MENU } from '../../input/InputDomainType';
import { SCREEN_ADVENTURE } from '../ScreenType';

export default class MainMenuScreen extends Screen {
    onEnter() {
        this.game.commands.pushDomain(INPUT_DOMAIN_MAIN_MENU);

        if (!this.game.state.isStarted) {
            this.game.music.play('BARDS_TALE');
        }
    }

    onLeave() {
        this.game.commands.popDomain(INPUT_DOMAIN_MAIN_MENU);
    }

    onConfirm() {
        if (this.game.state.isStarted) {
            this.game.screens.setScreen(SCREEN_ADVENTURE);
        } else {
            this.game.state.newGame();
        }
    }

    inputCommand() {
        const cmd = this.game.commands.getNextCommand();

        if (!cmd) {
            return;
        }

        if (cmd.type === INPUT_CMD_CONFIRM) {
            this.onConfirm();
        }

        if (cmd.type === INPUT_CMD_SAVE) {
            this.game.state.saveGame();
        }

        if (cmd.type === INPUT_CMD_LOAD) {
            this.game.state.loadGame();
        }

        if (cmd.type === INPUT_CMD_NEW_GAME) {
            this.game.state.newGame();
        }
    }

    onUpdate(dt) {
        this.inputCommand();
        this.game.renderer.clear();
        this.game.renderer.drawText(1, 1, `sleepy crawler`, 'cyan');

        this.game.renderer.drawText(
            1,
            4,
            `move       [q, w, e, a, d, z, x, c]`
        );
        this.game.renderer.drawText(1, 5, `look       [l]`);
        this.game.renderer.drawText(1, 6, `interact   [shift+direction]`);
        this.game.renderer.drawText(1, 7, `interact   [j]`);
        this.game.renderer.drawText(1, 8, `pick up    [g]`);
        this.game.renderer.drawText(1, 9, `save       [ctrl+s]`);
        this.game.renderer.drawText(1, 10, `load       [ctrl+l]`);
        this.game.renderer.drawText(1, 11, `confirm    [enter]`);
        this.game.renderer.drawText(1, 12, `cancel     [esc]`);

        this.game.renderer.drawTextCenter(14, `set out into the forest...`);
        this.game.renderer.drawTextCenter(16, `press [enter]`);
    }
}
