import { Component } from 'geotic';
import { game } from '../../core/Game';
import { SKILL_ARMOR, SKILL_DODGE, getSkillValue, SKILL_HEALTH } from '../../data/Skills';
import { getArmorBlockPercent } from '../../data/skills/ArmorSkill';
import { getDodgePercent } from '../../data/skills/DodgeSkill';
import {
    CONSOLE_EVENT_DAMAGE,
    CONSOLE_EVENT_DEAD,
    CONSOLE_EVENT_MISS,
} from '../../enums/ConsoleEvents';
import { randomInt } from '../../utils/rand';
import { IsDead } from './IsDead';

export class Health extends Component {
    static properties = {
        value: 20,
    };

    get max() {
        const level = this.entity.level.level;
        const skill = getSkillValue(SKILL_HEALTH, this.entity);

        return 32 + level * 8 + skill * 4;
    }

    onSpawned() {
        this.value = this.max;
    }

    applyDamage(damage) {
        this.value -= damage;

        if (this.value <= 0) {
            this.value = 0;
            this.entity.add(IsDead);

            return true;
        }

        return false;
    }

    onAttacked(evt) {
        const attack = evt.data.attack;
        const attacker = attack.attacker;
        const defender = attack.defender;
        const dodge = getSkillValue(SKILL_DODGE, defender);
        const dodgePrcnt = getDodgePercent(dodge);

        if (!attack.ignoreDodge && randomInt(1, 100) <= dodgePrcnt) {
            game.console.event(CONSOLE_EVENT_MISS, {
                defender,
                attacker,
                dodgePrcnt,
            });

            evt.data.damage = 0;
            evt.data.isDodged = true;
            evt.data.isKilled = false;
            evt.handle();

            return;
        }

        evt.data.isDodged = false;

        const armor = getSkillValue(SKILL_ARMOR, defender);
        const armorPrcnt = getArmorBlockPercent(armor);
        const blocked = Math.floor(attack.damage * armorPrcnt);
        const damage = Math.max(0, attack.damage - blocked);
        evt.data.damage = damage;

        const isKilled = this.applyDamage(damage);
        evt.data.isKilled = isKilled;

        if (isKilled) {
            game.console.event(CONSOLE_EVENT_DEAD, {
                target: defender,
                source: attacker,
                damage,
                damageType: attack.damageType,
            });

            attacker.fireEvent('enemy-killed', {
                enemy: defender,
            });

            evt.handle();

            return;
        }

        game.console.event(CONSOLE_EVENT_DAMAGE, {
            target: defender,
            source: attacker,
            damage,
            damageType: attack.damageType,
            blocked,
        });

        const pos = this.entity.position.getPos();

        game.particles.createParticle(pos.x, pos.y, {
            lifetime: 140,
            fg1s: ['#8d4c4f', '#730d14'],
            glyphs: ['*'],
        });

        evt.handle();
    }

    onHeal(evt) {
        this.value += evt.data.value;

        if (this.value > this.max) {
            this.value = this.max;
        }

        evt.handle();
    }
}
