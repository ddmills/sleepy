import { Component } from 'geotic';
import { capitalize } from 'rot-js/lib/util';
import { getStatName, STAT_ATHLETICISM, STAT_FINESSE, STAT_STRENGTH, STAT_TRICKERY } from '../../data/Stats';

export class Stats extends Component {
    static properties = {
        baseStrength: 0,
        baseFinesse: 0,
        baseAthleticism: 0,
        baseTrickery: 0,
    };

    _sumMods(modifiers) {
        return modifiers.reduce((sum, cur) => sum + cur.mod, 0);
    }

    getStatModifiers(stat) {
        const name = getStatName(stat);
        const modifiers = [];

        this.entity.fireEvent(`query-stat-modifier-${name}`, {
            modifiers
        });

        return modifiers;
    }

    getStatModifierSum(stat) {
        const mods = this.getStatModifiers(stat);

        return this._sumMods(mods);
    }

    data(stat) {
        const name = getStatName(stat);
        const modifiers = this.getStatModifiers(stat);
        const base = this[`base${capitalize(name)}`];
        const modSum = this._sumMods(modifiers);
        const sum = base + modSum;

        return {
            stat,
            name,
            modifiers,
            base,
            sum,
            modSum,
        };
    }

    all() {
        return {
            strength: this.data(STAT_STRENGTH),
            finesse: this.data(STAT_FINESSE),
            athleticism: this.data(STAT_ATHLETICISM),
            trickery: this.data(STAT_TRICKERY),
        };
    }

    strength() {
        const mod = this.getStatModifierSum(STAT_STRENGTH);

        return this.baseStrength + mod;
    }

    finesse() {
        const mod = this.getStatModifierSum(STAT_FINESSE);

        return this.baseFinesse + mod;
    }

    athleticism() {
        const mod = this.getStatModifierSum(STAT_ATHLETICISM);

        return this.baseAthleticism + mod;
    }

    trickery() {
        const mod = this.getStatModifierSum(STAT_TRICKERY);

        return this.baseTrickery + mod;
    }
}
