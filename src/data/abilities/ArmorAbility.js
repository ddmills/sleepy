import { ABILITY_ARMOR } from '../Abilities';
import Ability from './Ability';

export const getArmorBlockPercent = (ability = 0) => {
    const base = 10;

    return 1 - base / (ability + base);
};

export const getArmorBlockPercentDisplay = (ability = 0) => {
    const prcnt = getArmorBlockPercent(ability);

    return Math.floor(prcnt * 100);
};

export default class ArmorAbility extends Ability {
    constructor() {
        super(ABILITY_ARMOR, 'armor');
    }
}
