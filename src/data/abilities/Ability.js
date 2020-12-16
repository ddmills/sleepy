export default class Ability {
    key = -1;
    name = 'ability';
    baseStat = null;

    constructor(key, name, baseStat) {
        this.key = key;
        this.name = name;
        this.baseStat = baseStat;
    }

    getModifiers(entity) {
        const modifiers = [];

        entity.fireEvent(`query-ability-modifier-${this.name}`, {
            name: this.name,
            modifiers,
        });

        return modifiers;
    }

    getModifierSum(entity) {
        const modifiers = this.getModifiers(entity);

        return modifiers.reduce((sum, cur) => sum + cur.mod, 0);
    }

    compute(entity) {
        return 1;
    }
}
