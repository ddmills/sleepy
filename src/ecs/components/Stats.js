import { Component } from 'geotic';
import { capitalize } from 'rot-js/lib/util';

export class Stats extends Component {
    static properties = {
        baseStrength: 10,
        baseDexterity: 10,
        baseAthleticism: 10,
        baseTrickery: 10,
    };

    _sumMods(modifiers) {
        return modifiers.reduce((sum, cur) => sum + cur.mod, 0);
    }

    _queryStatModifiers(name) {
        const modifiers = [];

        this.entity.fireEvent(`query-stat-modifier-${name}`, {
            modifiers
        });

        return modifiers;
    }

    _queryStatModifierSum(name) {
        const mods = this._queryStatModifiers(name);

        return this._sumMods(mods);
    }

    _queryAbilityModifiers(name) {
        const modifiers = [];

        this.entity.fireEvent(`query-ability-modifier-${name}`, {
            modifiers,
        });

        return modifiers;
    }

    _queryAbilityModifierSum(name) {
        const mods = this._queryAbilityModifiers(name);

        return this._sumMods(mods);
    }

    data(name) {
        const modifiers = this._queryStatModifiers(name);
        const base = this[`base${capitalize(name)}`];
        const modSum = this._sumMods(modifiers);
        const sum = base + modSum;

        return {
            name,
            modifiers,
            base,
            sum,
            modSum,
        };
    }

    all() {
        return {
            strength: this.data('strength'),
            dexterity: this.data('dexterity'),
            athleticism: this.data('athleticism'),
            trickery: this.data('trickery'),
        };
    }

    strength() {
        const mod = this._queryStatModifierSum('strength');

        return this.baseStrength + mod;
    }

    dexterity() {
        const mod = this._queryStatModifierSum('dexterity');

        return this.baseDexterity + mod;
    }

    athleticism() {
        const mod = this._queryStatModifierSum('athleticism');

        return this.baseAthleticism + mod;
    }

    trickery() {
        const mod = this._queryStatModifierSum('trickery');

        return this.baseTrickery + mod;
    }

    speed() {
        return this._queryAbilityModifierSum('speed');
    }
}
