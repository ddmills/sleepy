import { getStat } from '../Stats';

export default class Skill {
    key = -1;
    name = 'skill';
    baseStat = null;

    constructor(key, name, baseStat) {
        this.key = key;
        this.name = name;
        this.baseStat = baseStat;
    }

    getModifiers(entity) {
        const modifiers = [];

        entity.fireEvent(`query-skill-mod`, {
            name: this.name,
            skill: this.key,
            modifiers,
        });

        return modifiers;
    }

    getModifierSum(entity) {
        const modifiers = this.getModifiers(entity);

        return modifiers.reduce((sum, cur) => sum + cur.mod, 0);
    }

    compute(entity) {
        const stat = this.baseStat ? getStat(this.baseStat, entity) : 0;
        const modifier = this.getModifierSum(entity);

        return stat + modifier;
    }
}
