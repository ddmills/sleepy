import { SKILL_BRAWLING } from '../Skills';
import { STAT_STRENGTH } from '../Stats';
import Skill from './Skill';

export default class BrawlingSkill extends Skill {
    constructor() {
        super(SKILL_BRAWLING, 'brawling', STAT_STRENGTH);
    }
}
