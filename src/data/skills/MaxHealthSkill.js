import { SKILL_MAX_HP } from '../Skills';
import { getStat, STAT_ATHLETICISM } from '../Stats';
import Skill from './Skill';

export default class MaxHealthSkill extends Skill {
    constructor() {
        super(SKILL_MAX_HP, 'Max HP', STAT_ATHLETICISM);
    }

    compute(entity) {
        const base = getStat(STAT_ATHLETICISM, entity);
        const modifier = this.getModifierSum(entity);

        return Math.floor((base + modifier + 5) * 6 + 20);
    }
}
