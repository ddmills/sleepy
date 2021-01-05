import Screen from './Screen';
import {
    INPUT_CMD_CANCEL,
    INPUT_CMD_MOVE_N,
    INPUT_CMD_MOVE_S,
} from '../../input/InputCommandType';
import { INPUT_DOMAIN_MAIN_MENU } from '../../input/InputDomainType';
import SelectableList from '../../../utils/SelectableList';
import {
    SKILL_ARMOR,
    SKILL_DODGE,
    SKILL_SPEED,
    getSkillValue,
} from '../../../data/Skills';
import { getSpeedPercentDisplay } from '../../../data/skills/SpeedSkill';
import { getArmorBlockPercentDisplay } from '../../../data/skills/ArmorSkill';
import { getDodgePercent } from '../../../data/skills/DodgeSkill';

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

    handleInput() {
        const cmd = this.game.commands.getNextCommand();

        if (!cmd) {
            return;
        }

        if (cmd.type === INPUT_CMD_CANCEL) {
            this.game.screens.popScreen();
        }

        if (cmd.type === INPUT_CMD_MOVE_N) {
            this.list.up();
        }

        if (cmd.type === INPUT_CMD_MOVE_S) {
            this.list.down();
        }

        // if (cmd.type === INPUT_CMD_CONFIRM) {
        //     this.selectItem();
        // }
    }

    onUpdate(dt) {
        this.handleInput();

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

        const speed = getSkillValue(SKILL_SPEED, this.character);
        const speedPrcnt = getSpeedPercentDisplay(speed);

        this.game.renderer.drawText(2, 6, 'speed');
        this.game.renderer.drawText(
            10,
            6,
            `+${speed} (${100 - speedPrcnt}% less movement cost)`
        );

        const armor = getSkillValue(SKILL_ARMOR, this.character);
        const armorPrcnt = getArmorBlockPercentDisplay(armor);

        this.game.renderer.drawText(2, 7, 'armor');
        this.game.renderer.drawText(
            10,
            7,
            `+${armor} (${armorPrcnt}% less melee damage taken)`
        );

        const dodge = getSkillValue(SKILL_DODGE, this.character);
        const dodgePrcnt = getDodgePercent(dodge);

        this.game.renderer.drawText(2, 8, 'dodge');
        this.game.renderer.drawText(
            10,
            8,
            `+${dodge} (${dodgePrcnt}% chance to avoid a melee attack)`
        );

        let pad = 0;

        this.list.data.forEach(({ item, idx, isSelected }) => {
            const stat = item;
            const ypos = idx + 13 + pad;
            const modDir = stat.modSum >= 0 ? '+' : '-';

            if (isSelected) {
                this.game.renderer.drawText(
                    1,
                    ypos,
                    `→ ${stat.name}`,
                    'yellow'
                );
                this.game.renderer.drawText(
                    10,
                    ypos,
                    `${modDir}${stat.sum}`,
                    'yellow'
                );

                stat.modifiers.forEach((mod, i) => {
                    if (mod.mod > 0) {
                        this.game.renderer.drawText(
                            3,
                            ypos + i + 1,
                            `+${mod.mod} (${mod.source})`,
                            'green'
                        );
                    } else {
                        this.game.renderer.drawText(
                            3,
                            ypos + i + 1,
                            `-${Math.abs(mod.mod)} (${mod.source})`,
                            'red'
                        );
                    }
                });

                pad += stat.modifiers.length;
            } else {
                this.game.renderer.drawText(1, ypos, `- ${stat.name}`);
                this.game.renderer.drawText(10, ypos, `${modDir}${stat.sum}`);
            }
        });

        this.game.renderer.drawText(1, 1, '← back [esc]');
    }
}
