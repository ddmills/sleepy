import Screen from './Screen';
import {
    INPUT_CMD_MOVE_N,
    INPUT_CMD_MOVE_NE,
    INPUT_CMD_MOVE_W,
    INPUT_CMD_WAIT,
    INPUT_CMD_MOVE_E,
    INPUT_CMD_MOVE_SW,
    INPUT_CMD_MOVE_S,
    INPUT_CMD_MOVE_SE,
    INPUT_CMD_MOVE_NW,
    INPUT_CMD_CANCEL,
    INPUT_CMD_CONFIRM,
} from '../../input/InputCommandType';
import {
    DIR_N,
    DIR_W,
    DIR_Z,
    DIR_E,
    DIR_S,
    DIR_NW,
    DIR_SW,
    DIR_SE,
    DIR_NE
} from '../../../enums/Directions';

const NOOP = () => {};

export default class CursorScreen extends Screen {
    #onResult = NOOP;
    #onCancel = NOOP;

    onEnter(ctx) {
        this.game.renderer.clear();
        this.game.FOVSystem.computeFOV();
        this.game.cursor.enable();
        this.#onResult = ctx.onResult || NOOP;
        this.#onCancel = ctx.onCancel || NOOP;
    }

    onLeave() {
        this.game.cursor.disable();
    }

    onDirectionInput(dir) {
        this.game.cursor.move(dir);
    }

    onConfirm() {
        this.#onResult({
            position: {
                x: this.game.cursor.x,
                y: this.game.cursor.y
            }
        });
    }

    onCancel() {
        this.#onCancel();
    }

    onInputCommand(cmd) {
        if (cmd.type === INPUT_CMD_CONFIRM) {
            this.onConfirm();
        }
        if (cmd.type === INPUT_CMD_CANCEL) {
            this.onCancel();
        }
        if (cmd.type === INPUT_CMD_MOVE_NW) {
            this.onDirectionInput(DIR_NW);
        }
        if (cmd.type === INPUT_CMD_MOVE_N) {
            this.onDirectionInput(DIR_N);
        }
        if (cmd.type === INPUT_CMD_MOVE_NE) {
            this.onDirectionInput(DIR_NE);
        }
        if (cmd.type === INPUT_CMD_MOVE_W) {
            this.onDirectionInput(DIR_W);
        }
        if (cmd.type === INPUT_CMD_MOVE_E) {
            this.onDirectionInput(DIR_E);
        }
        if (cmd.type === INPUT_CMD_MOVE_SW) {
            this.onDirectionInput(DIR_SW);
        }
        if (cmd.type === INPUT_CMD_MOVE_S) {
            this.onDirectionInput(DIR_S);
        }
        if (cmd.type === INPUT_CMD_MOVE_SE) {
            this.onDirectionInput(DIR_SE);
        }
    }

    onUpdate(dt) {
        this.game.updateAdventureSystems(dt);
    }
}
