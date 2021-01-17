import { SKILL_HEALTH } from '../Skills';
import { STAT_ATHLETICISM } from '../Stats';
import Skill from './Skill';

export default class HealthSkill extends Skill {
    constructor() {
        super(SKILL_HEALTH, 'health', STAT_ATHLETICISM);
    }
}
