import Screen from './Screen';
import {
    INPUT_CMD_CONFIRM,
    INPUT_CMD_SAVE,
    INPUT_CMD_LOAD,
} from '../../input/InputCommandType';
import { INPUT_DOMAIN_MAIN_MENU } from '../../input/InputDomainType';
import { SCREEN_ADVENTURE } from '../ScreenType';

export default class MainMenuScreen extends Screen {
    onEnter() {
        this.game.commands.pushDomain(INPUT_DOMAIN_MAIN_MENU);
    }

    onLeave() {
        this.game.commands.popDomain(INPUT_DOMAIN_MAIN_MENU);
    }

    onInputCommand(cmd) {
        if (cmd.type === INPUT_CMD_CONFIRM) {
            this.game.state.newGame();
            this.game.screens.setScreen(SCREEN_ADVENTURE);
        }

        if (cmd.type === INPUT_CMD_SAVE) {
            this.game.state.saveGame();
        }

        if (cmd.type === INPUT_CMD_LOAD) {
            this.game.state.loadGame();
        }
    }

    onUpdate(dt) {
        this.game.renderer.clear();
        this.game.renderer.drawText(1, 1, `Knossonia`, 'cyan');

        this.game.renderer.drawText(1, 4, `move       [w, a, d, x]`);
        this.game.renderer.drawText(1, 5, `look       [l]`);
        this.game.renderer.drawText(1, 6, `interact   [shift+direction]`);
        this.game.renderer.drawText(1, 7, `interact   [j]`);
        this.game.renderer.drawText(1, 8, `pick up    [g]`);
        this.game.renderer.drawText(1, 9, `save       [ctrl+s]`);
        this.game.renderer.drawText(1, 10, `load       [ctrl+l]`);
        this.game.renderer.drawText(1, 11, `confirm    [enter]`);
        this.game.renderer.drawText(1, 12, `cancel     [esc]`);

        this.game.renderer.drawTextCenter(14, `set out into the forest...`);
    }
}
