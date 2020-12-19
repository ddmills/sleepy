import { ABILITY_DODGE } from '../Abilities';
import { getStatModifier, STAT_FINESSE } from '../Stats';
import Ability from './Ability';

export const getDodgePercent = (ability = 0) => {
    const base = 5;
    const unscaled = 1 - (base / (ability + base));

    return Math.floor(unscaled * 100);
};

export default class DodgeAbility extends Ability {
    constructor() {
        super(ABILITY_DODGE, 'dodge', STAT_FINESSE);
    }

    compute(entity) {
        const stat = getStatModifier(STAT_FINESSE, entity);
        const modifier = this.getModifierSum(entity);

        return stat + modifier;
    }
}
