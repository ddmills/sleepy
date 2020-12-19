import { Component } from 'geotic';
import { game } from '../../core/Game';
import { ABILITY_ARMOR, ABILITY_DODGE, getAbilityValue } from '../../data/Abilities';
import { getArmorBlockPercent } from '../../data/abilities/ArmorAbility';
import { getDodgePercent } from '../../data/abilities/DodgeAbility';
import {
    CONSOLE_EVENT_BLOCK,
    CONSOLE_EVENT_DAMAGE,
    CONSOLE_EVENT_DEAD,
    CONSOLE_EVENT_MISS,
} from '../../enums/ConsoleEvents';
import { randomInt } from '../../utils/rand';
import { IsDead } from './IsDead';

export class Health extends Component {
    static properties = {
        value: 10,
        max: 10,
    };

    onAttacked(evt) {
        const attack = evt.data.attack;
        const attacker = attack.attacker;
        const defender = attack.defender;

        console.log(`Begin Attack (${attacker.moniker.display} → ${defender.moniker.display})`);

        const dodge = getAbilityValue(ABILITY_DODGE, defender);
        const dodgePrcnt = getDodgePercent(dodge);

        if (randomInt(1, 100) <= dodgePrcnt) {
            console.log(`- ${defender.moniker.display} dodges (${dodgePrcnt}% chance)!`)

            game.console.event(CONSOLE_EVENT_MISS, {
                defender,
                attacker,
                dodgePrcnt,
            });

            return;
        }

        const armor = getAbilityValue(ABILITY_ARMOR, defender);
        const armorPrcnt = getArmorBlockPercent(armor) / 100;
        const blocked = Math.floor(attack.damage * armorPrcnt);
        const damage = attack.damage - blocked;

        console.log(`- HIT! ${damage} (${blocked} was blocked)`);
        console.log(`End Attack`);

        this.value -= damage;

        if (this.value <= 0) {
            game.console.event(CONSOLE_EVENT_DEAD, {
                target: defender,
                source: attacker,
                damage,
                damageType: attack.damageType,
            });

            this.value = 0;
            this.entity.add(IsDead);
        } else {
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
        }

        evt.handle();
    }

    onDamage(evt) {
        this.value -= evt.data.damage.value;

        if (this.value <= 0) {
            game.console.event(CONSOLE_EVENT_DEAD, {
                target: this.entity,
                source: evt.data.source,
                sourceItem: evt.data.sourceItem,
                damage: evt.data.damage,
            });

            this.value = 0;
            this.entity.add(IsDead);
        } else {
            game.console.event(CONSOLE_EVENT_DAMAGE, {
                target: this.entity,
                source: evt.data.source,
                sourceItem: evt.data.sourceItem,
                damage: evt.data.damage,
            });

            const pos = this.entity.position.getPos();

            game.particles.createParticle(pos.x, pos.y, {
                lifetime: 140,
                fg1s: ['#8d4c4f', '#730d14'],
                glyphs: ['*'],
            });
        }

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
