import { SKILL_CUDGEL } from '../Skills';
import { STAT_STRENGTH } from '../Stats';
import Skill from './Skill';

export default class CudgelSkill extends Skill {
    constructor() {
        super(SKILL_CUDGEL, 'cudgels', STAT_STRENGTH);
    }
}
