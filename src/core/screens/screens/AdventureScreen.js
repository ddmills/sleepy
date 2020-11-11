import Screen from './Screen';
import { INPUT_CMD_MOVE_N, INPUT_CMD_MOVE_NE, INPUT_CMD_MOVE_W, INPUT_CMD_WAIT, INPUT_CMD_MOVE_E, INPUT_CMD_MOVE_SW, INPUT_CMD_MOVE_S, INPUT_CMD_MOVE_SE, INPUT_CMD_MOVE_NW, INPUT_CMD_CANCEL } from '../../input/InputCommandType';
import { INPUT_DOMAIN_ADVENTURE } from '../../input/InputDomainType';
import { DIR_N, DIR_W, DIR_Z, DIR_E, DIR_S, DIR_NW, DIR_SW, DIR_SE, DIR_NE } from '../../../enums/Directions';
import { SCREEN_MAIN_MENU } from '../ScreenType';

export default class AdventureScreen extends Screen {
    onEnter() {
        this.game.commandManager.pushDomain(INPUT_DOMAIN_ADVENTURE);
    }

    onLeave() {
        this.game.commandManager.popDomain(INPUT_DOMAIN_ADVENTURE);
    }

    onInputCommand(cmd) {
        if (cmd.type === INPUT_CMD_CANCEL) {
            this.game.screenManager.setScreen(SCREEN_MAIN_MENU);
        }
        if (cmd.type === INPUT_CMD_WAIT) {
            this.game.playerManager.wait();
        }
        if (cmd.type === INPUT_CMD_MOVE_NW) {
            this.game.playerManager.move(DIR_NW);
        }
        if (cmd.type === INPUT_CMD_MOVE_N) {
            this.game.playerManager.move(DIR_N);
        }
        if (cmd.type === INPUT_CMD_MOVE_NE) {
            this.game.playerManager.move(DIR_NE);
        }
        if (cmd.type === INPUT_CMD_MOVE_W) {
            this.game.playerManager.move(DIR_W);
        }
        if (cmd.type === INPUT_CMD_MOVE_E) {
            this.game.playerManager.move(DIR_E);
        }
        if (cmd.type === INPUT_CMD_MOVE_SW) {
            this.game.playerManager.move(DIR_SW);
        }
        if (cmd.type === INPUT_CMD_MOVE_S) {
            this.game.playerManager.move(DIR_S);
        }
        if (cmd.type === INPUT_CMD_MOVE_SE) {
            this.game.playerManager.move(DIR_SE);
        }
    }
}
