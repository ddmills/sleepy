import { ABILITY_PENETRATION } from '../Abilities';
import { getStatModifier, STAT_STRENGTH } from '../Stats';
import Ability from './Ability';

export default class PenetrationAbility extends Ability {
    constructor() {
        super(ABILITY_PENETRATION, 'dodge', STAT_STRENGTH);
    }

    compute(entity) {
        const stat = getStatModifier(STAT_STRENGTH, entity);
        const modifier = this.getModifierSum(entity);

        return stat + modifier;
    }
}
