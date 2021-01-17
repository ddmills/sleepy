import { SKILL_AXE } from '../Skills';
import { STAT_STRENGTH } from '../Stats';
import Skill from './Skill';

export default class AxeSkill extends Skill {
    constructor() {
        super(SKILL_AXE, 'axes', STAT_STRENGTH);
    }
}
