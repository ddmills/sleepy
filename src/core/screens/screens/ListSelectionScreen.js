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

const NOOP = () => {};

export default class ListSelectionScreen extends Screen {
    width = 18;
    height = 10;
    list = new SelectableList();
    header = '';
    icon = null;
    leadText = null;

    get left() {
        return Math.floor((this.game.camera.width - this.width) / 2);
    }

    get top() {
        return Math.floor((this.game.camera.height - this.height) / 2);
    }

    onEnter(ctx) {
        this.game.commands.pushDomain(INPUT_DOMAIN_MAIN_MENU);
        this.list.setItems(ctx.list || []);
        this.header = ctx.header || 'Select';
        this.icon = ctx.icon || null;
        this.leadText = ctx.leadText || null;
        this.onSelect = ctx.onSelect || NOOP;
        this.onCancel = ctx.onCancel || NOOP;
        this.onGetRowName = ctx.onGetRowName || NOOP;
        this.onRenderRow = ctx.onRenderRow || this.defaultRowRender.bind(this);
    }

    onLeave() {
        this.game.commands.popDomain(INPUT_DOMAIN_MAIN_MENU);
    }

    selectItem() {
        this.onSelect(this.list.selected);
    }

    cancel() {
        this.onCancel();
        this.game.screens.popScreen();
    }

    handleInput() {
        const cmd = this.game.commands.getNextCommand();

        if (!cmd) {
            return;
        }

        if (cmd.type === INPUT_CMD_CANCEL) {
            this.cancel();
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

    defaultRowRender(row, x, y, isSelected) {
        const text = this.onGetRowName(row, x, y, isSelected);

        if (isSelected) {
            this.game.renderer.drawText(x, y, `→ ${text}`, 'yellow');
        } else {
            this.game.renderer.drawText(x, y, `- ${text}`);
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
            this.icon
        );

        let yOffset = this.top + 2;

        const xpos = this.left + 2;

        if (this.leadText) {
            this.game.renderer.drawText(xpos, yOffset, this.leadText);

            yOffset += 2;
        }

        this.list.data.forEach(({ item, idx, isSelected }) => {
            const ypos = yOffset + idx;

            this.onRenderRow(item, xpos, ypos, isSelected, idx);
        });
    }
}
