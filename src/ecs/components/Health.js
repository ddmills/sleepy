import { Component } from 'geotic';
import { game } from '../../core/Game';
import { ABILITY_ARMOR, ABILITY_DODGE, getAbilityValue } from '../../data/Abilities';
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
        const attacker = evt.data.attacker;
        const defender = this.entity;

        console.log(`Begin Attack (${attacker.moniker.display} → ${defender.moniker.display})`);

        const accuracy = evt.data.accuracy;
        const penetration = evt.data.penetration;
        const damage = evt.data.damage;

        const armor = getAbilityValue(ABILITY_ARMOR, defender) + randomInt(1, 20);
        const dodge = getAbilityValue(ABILITY_DODGE, defender) + randomInt(1, 20);
        const health = this.value;

        console.log(`- Accuracy (${accuracy}) vs Dodge (${dodge})`);
        console.log(`- Penetration (${penetration}) vs Armor (${armor})`);
        console.log(`- Damage (${damage}) vs Health (${health})`);

        if (dodge > accuracy) {
            console.log(`- ${defender.moniker.display} DODGE!`)

            game.console.event(CONSOLE_EVENT_MISS, {
                defender,
                attacker,
                dodge,
                accuracy,
            });

            return;
        }

        if (armor > penetration) {
            console.log(`- ${defender.moniker.display} BLOCKS!`)

            game.console.event(CONSOLE_EVENT_BLOCK, {
                defender,
                attacker,
                armor,
                penetration,
            });

            return;
        }

        console.log(`- HIT! ${damage}`);

        console.log(`End Attack`);

        this.value -= damage;

        if (this.value <= 0) {
            game.console.event(CONSOLE_EVENT_DEAD, {
                target: defender,
                source: attacker,
                sourceItem: evt.data.weaponName,
                damage,
                damageType: evt.data.damageType,
            });

            this.value = 0;
            this.entity.add(IsDead);
        } else {
            game.console.event(CONSOLE_EVENT_DAMAGE, {
                target: defender,
                source: attacker,
                sourceItem: evt.data.weaponName,
                damage,
                damageType: evt.data.damageType,
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
