import { SKILL_ARMOR } from '../Skills';
import Skill from './Skill';

export const getArmorBlockPercent = (skill = 0) => {
    const base = 10;

    return 1 - base / (skill + base);
};

export const getArmorBlockPercentDisplay = (skill = 0) => {
    const prcnt = getArmorBlockPercent(skill);

    return Math.floor(prcnt * 100);
};

export default class ArmorSkill extends Skill {
    constructor() {
        super(SKILL_ARMOR, 'armor');
    }
}
