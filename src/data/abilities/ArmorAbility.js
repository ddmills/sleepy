import { ABILITY_ARMOR } from '../Abilities';
import { getStatModifier, STAT_STRENGTH } from '../Stats';
import Ability from './Ability';

export default class ArmorAbility extends Ability {
    constructor() {
        super(ABILITY_ARMOR, 'armor', STAT_STRENGTH);
    }

    compute(entity) {
        const stat = getStatModifier(STAT_STRENGTH, entity);

        return stat + this.getModifierSum(entity);
    }
}
