import { randomWeightedBool } from '../../utils/rand';
import Attack from '../Attack';
import { DMG_TYPE_BLUDGEONING } from '../DamageTypes';
import { getSkillValue, SKILL_CUDGEL } from '../Skills';
import { addStatus, STATUS_STUNNED } from '../Statuses';
import { WPN_FAMILY_CUDGEL } from '../WeaponFamilies';
import { WPN_TYPE_MACE } from '../WeaponTypes';
import WeaponType from './WeaponType';

export default class WpnTypeMace extends WeaponType {
    constructor() {
        super({
            key: WPN_TYPE_MACE,
            name: 'Mace',
            family: WPN_FAMILY_CUDGEL,
            damageType: DMG_TYPE_BLUDGEONING,
            skill: SKILL_CUDGEL
        });
    }

    _createAttack(attacker, defender, weapon) {
        const str = getSkillValue(this.skill, attacker);
        const die = weapon.roll();
        const damage = die + str;

        return new Attack({
            attacker,
            defender,
            weaponName: weapon.name,
            damage,
            damageType: this.damageType,
        });
    }

    attack(attacker, defender, weapon) {
        const attack = this._createAttack(attacker, defender, weapon);
        const result = defender.fireEvent('attacked', { attack });
        const attacks = [attack];

        if (
            !result.data.isDodged &&
            !result.data.isKilled &&
            randomWeightedBool(0.2)
        ) {
            addStatus(STATUS_STUNNED, defender, {
                duration: 1000,
            });
        }

        return attacks;
    }
}
