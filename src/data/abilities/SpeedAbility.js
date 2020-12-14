import { ABILITY_SPEED } from '../Abilities';
import Ability from './Ability';

export default class SpeedAbility extends Ability {
    constructor() {
        super(ABILITY_SPEED, 'speed');
    }

    compute(entity) {
        return this.getModifierSum(entity);
    }
}
