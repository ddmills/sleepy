import Screen from './Screen';
import {
    INPUT_CMD_CONFIRM,
    INPUT_CMD_CANCEL,
    INPUT_CMD_MOVE_N,
    INPUT_CMD_MOVE_S,
} from '../../input/InputCommandType';
import { INPUT_DOMAIN_MAIN_MENU } from '../../input/InputDomainType';
import { SCREEN_ADVENTURE } from '../ScreenType';

export default class InventoryScreen extends Screen {
    #selectedIdx = 0;

    onEnter() {
        this.game.commands.pushDomain(INPUT_DOMAIN_MAIN_MENU);
        this.#selectedIdx = 0;
    }

    onLeave() {
        this.game.commands.popDomain(INPUT_DOMAIN_MAIN_MENU);
    }

    pointerUp() {
        Math.max(0, --this.#selectedIdx);
    }

    pointerDown() {
        this.#selectedIdx++;
    }

    onInputCommand(cmd) {
        if (cmd.type === INPUT_CMD_CANCEL) {
            this.game.screens.setScreen(SCREEN_ADVENTURE);
        }

        if (cmd.type === INPUT_CMD_MOVE_N) {
            this.pointerUp();
        }

        if (cmd.type === INPUT_CMD_MOVE_S) {
            this.pointerDown();
        }
    }

    onUpdate(dt) {
        this.game.renderer.clear();
        this.game.renderer.drawTextCenter(2, '~ Inventory ~', 'yellow');

        const items = this.game.player.entity.inventory.content;

        const idx = this.#selectedIdx % items.length;

        items.forEach((item, i) => {
            const isSelected = i === idx;

            if (isSelected) {
                this.game.renderer.drawText(1, 4 + i, '>', 'yellow');
            } else {
                this.game.renderer.drawText(1, 4 + i, '-');
            }

            this.game.renderer.drawText(2, 4 + i, item.moniker.display);
        });

        this.game.renderer.drawText(1, 1, '← back [esc]');
    }
}
