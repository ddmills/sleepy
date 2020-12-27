import { Component } from 'geotic';
import { game } from '../../core/Game';
import { SKILL_ARMOR, SKILL_DODGE, getSkillValue } from '../../data/Skills';
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
        value: 32,
        max: 32,
    };

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

            evt.data.isDodged = true;
            evt.data.isKilled = false;
            evt.handle();

            return;
        }

        evt.data.isDodged = false;

        const armor = getSkillValue(SKILL_ARMOR, defender);
        const armorPrcnt = getArmorBlockPercent(armor);
        const blocked = Math.floor(attack.damage * armorPrcnt);
        const damage = attack.damage - blocked;

        const isKilled = this.applyDamage(damage);
        evt.data.isKilled = isKilled;

        if (isKilled) {
            game.console.event(CONSOLE_EVENT_DEAD, {
                target: defender,
                source: attacker,
                damage,
                damageType: attack.damageType,
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
