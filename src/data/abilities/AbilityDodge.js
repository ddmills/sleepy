import { ABILITY_ARMOR, ABILITY_DODGE } from '../Abilities';
import { getStatValue, STAT_DEXTERITY, STAT_STRENGTH } from '../Stats';
import Ability from './Ability';

export default class ArmorAbility extends Ability {
    constructor() {
        super(ABILITY_DODGE, 'dodge', STAT_DEXTERITY);
    }

    compute(entity) {
        const base = getStatValue(STAT_DEXTERITY, entity);
        const modifier = this.getModifierSum(entity);

        return base + modifier;
    }
}
