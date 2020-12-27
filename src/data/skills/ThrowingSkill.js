import { SKILL_THROWING } from '../Skills';
import { getStat, STAT_ATHLETICISM } from '../Stats';
import Skill from './Skill';

export default class ThrowingSkill extends Skill {
    constructor() {
        super(SKILL_THROWING, 'throwing', STAT_ATHLETICISM);
    }

    compute(entity) {
        const base = getStat(STAT_ATHLETICISM, entity);
        const modifier = this.getModifierSum(entity);

        return Math.max(0, base + modifier) + 6;
    }
}
