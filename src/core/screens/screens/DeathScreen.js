import Screen from './Screen';
import { INPUT_CMD_CONFIRM } from '../../input/InputCommandType';
import { INPUT_DOMAIN_MAIN_MENU } from '../../input/InputDomainType';
import { SCREEN_MAIN_MENU } from '../ScreenType';

export default class DeathScreen extends Screen {
    onEnter() {
        this.game.state.gameOver();
        this.game.commands.pushDomain(INPUT_DOMAIN_MAIN_MENU);
    }

    onLeave() {
        this.game.commands.popDomain(INPUT_DOMAIN_MAIN_MENU);
    }

    onInputCommand(cmd) {
        if (cmd.type === INPUT_CMD_CONFIRM) {
            this.game.screens.setScreen(SCREEN_MAIN_MENU);
        }
    }

    onUpdate(dt) {
        const text = 'you have succumbed to the forest';

        this.game.renderer.drawTextCenter(10, text, '#ce5454');
    }
}
