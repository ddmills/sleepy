import Screen from './Screen';
import { INPUT_CMD_CONFIRM, INPUT_CMD_SAVE, INPUT_CMD_LOAD } from '../../input/InputCommandType';
import { INPUT_DOMAIN_MAIN_MENU } from '../../input/InputDomainType';
import { SCREEN_ADVENTURE } from '../ScreenType';

export default class MainMenuScreen extends Screen {
    onEnter() {
        console.log('onEnter MainMenu');
        this.game.commandManager.pushDomain(INPUT_DOMAIN_MAIN_MENU);
    }

    onLeave() {
        console.log('onLeave MainMenu');
        this.game.commandManager.popDomain(INPUT_DOMAIN_MAIN_MENU);
    }

    onInputCommand(cmd) {
        if (cmd.type === INPUT_CMD_CONFIRM) {
            this.game.gameStateManager.newGame();
            this.game.screenManager.setScreen(SCREEN_ADVENTURE);
        }

        if (cmd.type === INPUT_CMD_SAVE) {
            this.game.gameStateManager.saveGame();
        }

        if (cmd.type === INPUT_CMD_LOAD) {
            this.game.gameStateManager.loadGame();
        }
    }

    onUpdate(dt) {
        this.game.renderer.clear();
        this.game.renderer.drawText(1, 1, `%c{cyan}Knossonia`);
        this.game.renderer.drawText(1, 3, `%c{white}press enter to embark`);
        this.game.renderer.drawText(1, 7, `%c{white}move [w, a, d, x]`);
        this.game.renderer.drawText(1, 8, `%c{white}save [ctrl+s]`);
        this.game.renderer.drawText(1, 9, `%c{white}load [ctrl+l]`);
    }
}
