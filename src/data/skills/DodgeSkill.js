import { SKILL_DODGE } from '../Skills';
import { STAT_FINESSE } from '../Stats';
import Skill from './Skill';

export const getDodgePercent = (skill = 0) => {
    const base = 5;
    const unscaled = 1 - base / (skill + base);

    return Math.floor(unscaled * 100);
};

export default class DodgeSkill extends Skill {
    constructor() {
        super(SKILL_DODGE, 'dodge', STAT_FINESSE);
    }
}
