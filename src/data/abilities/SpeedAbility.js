import { ABILITY_SPEED } from '../Abilities';
import { STAT_ATHLETICISM } from '../Stats';
import Ability from './Ability';

export const getSpeedPercent = (ability = 0) => {
    const base = 50;
    const cost = base / (base + ability);

    return cost;
};

export const getSpeedPercentDisplay = (ability = 0) => {
    const prcnt = getSpeedPercent(ability);

    return Math.floor(prcnt * 100);
};

export default class SpeedAbility extends Ability {
    constructor() {
        super(ABILITY_SPEED, 'speed', STAT_ATHLETICISM);
    }
}
