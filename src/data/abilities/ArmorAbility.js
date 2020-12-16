import { ABILITY_ARMOR } from '../Abilities';
import { getStatValue, STAT_STRENGTH } from '../Stats';
import Ability from './Ability';

export default class ArmorAbility extends Ability {
    constructor() {
        super(ABILITY_ARMOR, 'armor', STAT_STRENGTH);
    }

    compute(entity) {
        const base = getStatValue(STAT_STRENGTH, entity);
        const modifier = this.getModifierSum(entity);

        return base + modifier;
    }
}
