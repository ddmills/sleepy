import Screen from './Screen';
import {
    INPUT_CMD_CONFIRM,
    INPUT_CMD_CANCEL,
    INPUT_CMD_MOVE_N,
    INPUT_CMD_MOVE_S,
} from '../../input/InputCommandType';
import { INPUT_DOMAIN_MAIN_MENU } from '../../input/InputDomainType';
import SelectableList from '../../../utils/SelectableList';
import { getStatValue } from '../../../data/Stats';
import { ABILITY_ACCURACY, ABILITY_ARMOR, ABILITY_DODGE, ABILITY_PENETRATION, ABILITY_SPEED, getAbilityValue } from '../../../data/Abilities';

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

        const health = this.character.health.value;
        const healthMax = this.character.health.max;

        this.game.renderer.drawText(2, 5, 'health');
        this.game.renderer.drawText(10, 5, `${health}/${healthMax}`);

        const speed = getAbilityValue(ABILITY_SPEED, this.character);

        this.game.renderer.drawText(2, 6, 'speed');
        this.game.renderer.drawText(10, 6, `${speed}`);

        const armor = getAbilityValue(ABILITY_ARMOR, this.character);

        this.game.renderer.drawText(2, 7, 'armor');
        this.game.renderer.drawText(10, 7, `${armor}`);

        const dodge = getAbilityValue(ABILITY_DODGE, this.character);

        this.game.renderer.drawText(2, 8, 'dodge');
        this.game.renderer.drawText(10, 8, `${dodge}`);

        const penetration = getAbilityValue(ABILITY_PENETRATION, this.character);

        this.game.renderer.drawText(2, 9, 'penetration');
        this.game.renderer.drawText(10, 9, `${penetration}`);

        const accuracy = getAbilityValue(ABILITY_ACCURACY, this.character);

        this.game.renderer.drawText(2, 10, 'accuracy');
        this.game.renderer.drawText(10, 10, `${accuracy}`);

        let pad = 0;

        this.list.data.forEach(({ item, idx, isSelected }) => {
            const stat = item;
            const ypos = idx + 13 + pad;

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