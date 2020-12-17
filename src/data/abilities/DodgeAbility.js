import { ABILITY_DODGE } from '../Abilities';
import { getStatModifier, STAT_FINESSE } from '../Stats';
import Ability from './Ability';

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
