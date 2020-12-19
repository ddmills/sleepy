import { ABILITY_ARMOR } from '../Abilities';
import { getStatModifier, STAT_STRENGTH } from '../Stats';
import Ability from './Ability';

export const getArmorBlockPercent = (ability = 0) => {
    const base = 10;
    const unscaled = 1 - (base / (ability + base));

    return Math.floor(unscaled * 100);
};

export default class ArmorAbility extends Ability {
    constructor() {
        super(ABILITY_ARMOR, 'armor', STAT_STRENGTH);
    }

    compute(entity) {
        const stat = getStatModifier(STAT_STRENGTH, entity);

        return stat + this.getModifierSum(entity);
    }
}
