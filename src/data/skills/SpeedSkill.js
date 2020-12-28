import { SKILL_SPEED } from '../Skills';
import { STAT_ATHLETICISM } from '../Stats';
import Skill from './Skill';

export const getSpeedPercent = (skill = 0) => {
    const base = 5;
    const cost = base / (base + skill);

    return cost;
};

export const getSpeedPercentDisplay = (skill = 0) => {
    const prcnt = getSpeedPercent(skill);

    return Math.floor(prcnt * 100);
};

export default class SpeedSkill extends Skill {
    constructor() {
        super(SKILL_SPEED, 'speed', STAT_ATHLETICISM);
    }
}
