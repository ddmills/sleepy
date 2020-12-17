import { ABILITY_ACCURACY } from '../Abilities';
import { getStatModifier, STAT_FINESSE } from '../Stats';
import Ability from './Ability';

export default class AccuracyAbility extends Ability {
    constructor() {
        super(ABILITY_ACCURACY, 'accuracy', STAT_FINESSE);
    }

    compute(entity) {
        const stat = getStatModifier(STAT_FINESSE, entity);
        const modifier = this.getModifierSum(entity);

        return stat + modifier;
    }
}
