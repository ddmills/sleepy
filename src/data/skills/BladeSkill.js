import { SKILL_BLADE } from '../Skills';
import { STAT_STRENGTH } from '../Stats';
import Skill from './Skill';

export default class BladeSkill extends Skill {
    constructor() {
        super(SKILL_BLADE, 'blades', STAT_STRENGTH);
    }
}
