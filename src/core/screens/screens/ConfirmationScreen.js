import Screen from './Screen';
import {
    INPUT_CMD_CONFIRM,
    INPUT_CMD_CANCEL,
    INPUT_CMD_MOVE_N,
    INPUT_CMD_MOVE_S,
    INPUT_CMD_MOVE_E,
    INPUT_CMD_MOVE_W,
} from '../../input/InputCommandType';
import { INPUT_DOMAIN_MAIN_MENU } from '../../input/InputDomainType';
import { drawUIWindow } from '../../../utils/UIWindowUtil';

const NOOP = () => {};

const OPT_YES = 1;
const OPT_NO = 0;

export default class ConfirmationScreen extends Screen {
    width = 18;
    option = 0;

    get height() {
        if (!this.leadText) {
            return 4;
        }

        const textW = this.game.renderer.computeTextWidthTile(this.leadText);

        return Math.ceil(textW / (this.width - 2) + 6);
    }

    get left() {
        return Math.floor((this.game.camera.width - this.width) / 2);
    }

    get top() {
        return Math.floor((this.game.camera.height - this.height) / 2);
    }

    get bottom() {
        return this.top + this.height;
    }

    get right() {
        return this.left + this.width;
    }

    onEnter(ctx) {
        this.game.commands.pushDomain(INPUT_DOMAIN_MAIN_MENU);

        this.header = ctx.header || 'Are you sure?';
        this.onConfirm = ctx.onConfirm || NOOP;
        this.onCancel = ctx.onCancel || NOOP;
        this.onResult = ctx.onResult || NOOP;
        this.confirmText = ctx.confirmText || 'confirm';
        this.cancelText = ctx.cancelText || 'cancel';
        this.leadText = ctx.leadText || '';
    }

    onLeave() {
        this.game.commands.popDomain(INPUT_DOMAIN_MAIN_MENU);
    }

    onSelection(result) {
        this.game.screens.popScreen();

        if (result) {
            this.onConfirm();
        } else {
            this.onCancel();
        }

        this.onResult(result);
    }

    toggleSelection() {
        this.option = this.option ? OPT_NO : OPT_YES;
    }

    handleInput() {
        const cmd = this.game.commands.getNextCommand();

        if (!cmd) {
            return;
        }

        if ([
            INPUT_CMD_MOVE_N,
            INPUT_CMD_MOVE_E,
            INPUT_CMD_MOVE_S,
            INPUT_CMD_MOVE_W,
        ].includes(cmd.type)) {
            this.toggleSelection();
        }

        if (cmd.type === INPUT_CMD_CANCEL) {
            this.onSelection(OPT_NO);
        }

        if (cmd.type === INPUT_CMD_CONFIRM) {
            this.onSelection(this.option);
        }
    }

    onUpdate(dt) {
        this.handleInput();

        drawUIWindow(
            this.left,
            this.top,
            this.width,
            this.height,
            this.header,
        );

        if (this.leadText) {
            this.game.renderer.drawTextWrapping(
                this.left + 2,
                this.top + 2,
                this.width - 2,
                this.leadText
            );
        }

        const cancel = this.option ? `- ${this.cancelText}` : `→ ${this.cancelText}`;
        const confirm = this.option ? `→ ${this.confirmText}` : `- ${this.confirmText}`;

        this.game.renderer.drawText(
            this.left + 3,
            this.bottom - 2,
            cancel,
            this.option ? undefined : 'yellow'
        );

        const textWidth = this.game.renderer.computeTextWidth(confirm);

        this.game.renderer.drawText(
            this.right - 2 - textWidth,
            this.bottom - 2,
            confirm,
            this.option ? 'yellow' : undefined
        );
    }
}
