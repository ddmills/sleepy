import Screen from './Screen';
import {
    INPUT_CMD_CONFIRM,
    INPUT_CMD_CANCEL,
    INPUT_CMD_MOVE_N,
    INPUT_CMD_MOVE_S,
} from '../../input/InputCommandType';
import { INPUT_DOMAIN_MAIN_MENU } from '../../input/InputDomainType';
import SelectableList from '../../../utils/SelectableList';

export default class CharacterScreen extends Screen {
    character;

    onEnter(ctx) {
        this.game.commands.pushDomain(INPUT_DOMAIN_MAIN_MENU);
        this.character = ctx.character;

        const stats = this.character.stats.all();

        this.list = new SelectableList(Object.values(stats));
    }

    onLeave() {
        this.game.commands.popDomain(INPUT_DOMAIN_MAIN_MENU);
    }

    onInputCommand(cmd) {
        if (cmd.type === INPUT_CMD_CANCEL) {
            this.game.screens.popScreen();
        }

        if (cmd.type === INPUT_CMD_MOVE_N) {
            this.list.up();
        }

        if (cmd.type === INPUT_CMD_MOVE_S) {
            this.list.down()
        }

        // if (cmd.type === INPUT_CMD_CONFIRM) {
        //     this.selectItem();
        // }
    }

    onUpdate(dt) {
        this.game.renderer.clear();
        this.game.renderer.drawTextCenter(
            3,
            `~ ${this.character.moniker.display} Character ~`,
            'orange'
        );

        this.game.renderer.drawText(2, 5, 'speed');
        this.game.renderer.drawText(10, 5, `${this.character.stats.speed()}`);

        let pad = 0;

        this.list.data.forEach(({ item, idx, isSelected }) => {
            const stat = item;
            const ypos = idx + 7 + pad;

            if (isSelected) {
                this.game.renderer.drawText(1, ypos, `→ ${stat.name}`, 'yellow');

                const modDir = stat.modSum > 0 ? '+' : '-';

                this.game.renderer.drawText(10, ypos, `${stat.sum} (${stat.base}${modDir}${Math.abs(stat.modSum)})`, 'yellow');

                stat.modifiers.forEach((mod, i) => {
                    if (mod.mod > 0) {
                        this.game.renderer.drawText(3, ypos + i + 1, `+${mod.mod} (${mod.source})`, 'green');
                    } else {
                        this.game.renderer.drawText(3, ypos + i + 1, `-${Math.abs(mod.mod)} (${mod.source})`, 'red');
                    }
                });

                pad += stat.modifiers.length;
            } else {
                this.game.renderer.drawText(1, ypos, `- ${stat.name}`);
                this.game.renderer.drawText(10, ypos, `${stat.sum}`);
            }
        });

        this.game.renderer.drawText(1, 1, '← back [esc]');
    }
}
