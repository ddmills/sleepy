import Screen from './Screen';
import {
    INPUT_CMD_CONFIRM,
    INPUT_CMD_CANCEL,
    INPUT_CMD_MOVE_N,
    INPUT_CMD_MOVE_S,
} from '../../input/InputCommandType';
import { INPUT_DOMAIN_MAIN_MENU } from '../../input/InputDomainType';
import SelectableList from '../../../utils/SelectableList';
import Simple from 'rot-js/lib/scheduler/simple';

const NOOP = () => {};

export default class ListSelectionScreen extends Screen {
    width = 16;
    height = 12;
    list = new SelectableList();
    header = '';

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

    onInputCommand(cmd) {
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
        this.game.renderer.clearArea(
            this.left,
            this.top,
            this.width + 1,
            this.height + 1
        );

        this.game.renderer.drawTextCenter(this.top + 2, this.header);

        for (let i = this.left; i < this.left + this.width; i++) {
            this.game.renderer.draw(i, this.top, '─');
            this.game.renderer.draw(i, this.top + this.height, '─');
        }

        for (let i = this.top; i < this.top + this.height; i++) {
            this.game.renderer.draw(this.left, i, '│');
            this.game.renderer.draw(this.left + this.width, i, '│');
        }

        this.game.renderer.draw(this.left, this.top, '┌');
        this.game.renderer.draw(this.left + this.width, this.top, '┐');
        this.game.renderer.draw(this.left, this.top + this.height, '└');
        this.game.renderer.draw(
            this.left + this.width,
            this.top + this.height,
            '┘'
        );

        const xpos = this.left + 2;

        this.list.data.forEach(({ item, idx, isSelected }) => {
            const ypos = idx + this.top + 4;

            this.onRenderRow(item, xpos, ypos, isSelected, idx);
        });
    }
}
