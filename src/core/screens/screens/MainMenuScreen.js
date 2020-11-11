import Screen from './Screen';
import { INPUT_CMD_CONFIRM } from '../../input/InputCommandType';
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
        console.log('onInputCommand MainMenu', cmd.name);

        if (cmd.type === INPUT_CMD_CONFIRM) {
            console.log('START THE GAME!');
            this.game.screenManager.setScreen(SCREEN_ADVENTURE);
        }
    }

    onUpdate(dt) {
        this.game.renderer.clear();
        this.game.renderer.drawText(1, 1, `%c{cyan}Knossonia`);
        this.game.renderer.drawText(1, 3, `%c{white}press enter to embark`);
    }
}
