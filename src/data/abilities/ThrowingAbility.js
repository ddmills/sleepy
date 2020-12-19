import { ABILITY_THROWING } from '../Abilities';
import { getStat, STAT_ATHLETICISM } from '../Stats';
import Ability from './Ability';

export default class ThrowingAbility extends Ability {
    constructor() {
        super(ABILITY_THROWING, 'throwing', STAT_ATHLETICISM);
    }

    compute(entity) {
        const base = getStat(STAT_ATHLETICISM, entity);
        const modifier = this.getModifierSum(entity);

        return Math.max(0, base + modifier) + 6;
    }
}
