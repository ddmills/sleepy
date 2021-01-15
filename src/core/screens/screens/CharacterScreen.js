import Screen from './Screen';
import {
    INPUT_CMD_CANCEL,
    INPUT_CMD_CONFIRM,
    INPUT_CMD_MOVE_N,
    INPUT_CMD_MOVE_S,
} from '../../input/InputCommandType';
import { INPUT_DOMAIN_MAIN_MENU } from '../../input/InputDomainType';
import SelectableList from '../../../utils/SelectableList';
import {
    SKILL_ARMOR,
    getSkillValue,
    getSkillsByStat,
} from '../../../data/Skills';
import { getArmorBlockPercentDisplay } from '../../../data/skills/ArmorSkill';
import { capitalize } from '../../../utils/StringUtil';

const MODE_STAT = 0;
const MODE_SKILL = 1;

export default class CharacterScreen extends Screen {
    character;
    mode = MODE_STAT;

    onEnter(ctx) {
        this.game.commands.pushDomain(INPUT_DOMAIN_MAIN_MENU);
        this.character = ctx.character;

        const stats = this.character.stats.all();

        this.stats = new SelectableList(Object.values(stats));
        this.skills = new SelectableList();
    }

    onLeave() {
        this.game.commands.popDomain(INPUT_DOMAIN_MAIN_MENU);
    }

    selectItem() {
        if (this.mode === MODE_STAT) {
            this.mode = MODE_SKILL;
        } else {
            console.log(`SELECT skill ${this.skills.selected.key}`);
        }
    }

    up() {
        if (this.mode === MODE_STAT) {
            this.stats.up();
        } else {
            this.skills.up();
        }
    }

    back() {
        if (this.mode === MODE_STAT) {
            this.game.screens.popScreen();
        } else {
            this.mode = MODE_STAT;
        }

    }

    down() {
        if (this.mode === MODE_STAT) {
            this.stats.down();
        } else {
            this.skills.down();
        }
    }

    handleInput() {
        const cmd = this.game.commands.getNextCommand();

        if (!cmd) {
            return;
        }

        if (cmd.type === INPUT_CMD_CANCEL) {
            this.back();
        }

        if (cmd.type === INPUT_CMD_MOVE_N) {
            this.up();
        }

        if (cmd.type === INPUT_CMD_MOVE_S) {
            this.down();
        }

        if (cmd.type === INPUT_CMD_CONFIRM) {
            this.selectItem();
        }
    }

    renderSkills(stat, offsetY) {
        this.skills.setItems(getSkillsByStat(stat.stat));

        this.game.renderer.drawText(14, offsetY, `${capitalize(stat.name)} skills`, 'orange');

        this.skills.data.forEach(({ item, idx, isSelected }) => {
            const skill = item;
            const posY = 2 + idx + offsetY;
            const value = getSkillValue(skill.key, this.character);

            if (isSelected) {
                const color = this.mode === MODE_SKILL ? 'yellow' : '#c1c172';

                this.game.renderer.drawText(14, posY, `→ ${skill.name}`, color);
                this.game.renderer.drawText(
                    22,
                    posY,
                    `+${value}`,
                    color
                );
            } else {
                const selector = this.mode === MODE_SKILL ? '-' : ' ';

                this.game.renderer.drawText(14, posY, `${selector} ${skill.name}`);
                this.game.renderer.drawText(22, posY, `+${value}`);
            }
        });
    }

    onUpdate(dt) {
        this.handleInput();

        this.game.renderer.clear();
        this.game.renderer.drawTextCenter(
            3,
            `~ ${this.character.moniker.display} Character ~`,
            'orange'
        );

        const level = this.character.level.level;
        const xp = this.character.level.xp;
        const nextLevelReqXp = this.character.level.nextLevelReq;

        let offsetY = 5;

        this.game.renderer.drawText(1, offsetY, 'level');
        this.game.renderer.drawText(8, offsetY, `${level} (${xp}/${nextLevelReqXp} xp)`);

        offsetY++;

        const health = Math.ceil(this.character.health.value);
        const healthMax = this.character.health.max;

        this.game.renderer.drawText(1, offsetY, 'health');
        this.game.renderer.drawText(8, offsetY, `${health}/${healthMax}`);

        offsetY++;

        const armor = getSkillValue(SKILL_ARMOR, this.character);
        const armorPrcnt = getArmorBlockPercentDisplay(armor);

        this.game.renderer.drawText(1, offsetY, 'armor');
        this.game.renderer.drawText(8, offsetY, `${armor} (${armorPrcnt}%)`);

        offsetY++;
        offsetY++;

        this.game.renderer.drawText(1, offsetY, 'Stats', 'orange');

        this.stats.data.forEach(({ item, idx, isSelected }) => {
            const stat = item;
            const ypos = offsetY + idx + 2;
            const modDir = stat.modSum >= 0 ? '+' : '-';

            if (isSelected) {
                const color = this.mode === MODE_STAT ? 'yellow' : '#c1c172';

                this.game.renderer.drawText(
                    1,
                    ypos,
                    `→ ${stat.abbreviation} ${stat.name}`,
                    color
                );
                this.game.renderer.drawText(
                    11,
                    ypos,
                    `${modDir}${stat.sum}`,
                    color
                );
            } else {
                const selector = this.mode === MODE_STAT ? '-' : ' ';

                this.game.renderer.drawText(1, ypos, `${selector} ${stat.abbreviation} ${stat.name}`);
                this.game.renderer.drawText(11, ypos, `${modDir}${stat.sum}`);
            }
        });

        this.renderSkills(this.stats.selected, offsetY);

        this.game.renderer.drawText(1, 1, '← back [esc]');
    }
}
