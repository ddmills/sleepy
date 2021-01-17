import { randomBool } from '../../utils/rand';
import Attack from '../Attack';
import { DMG_TYPE_SLASHING } from '../DamageTypes';
import { getSkillValue, SKILL_AXE } from '../Skills';
import { WPN_FAMILY_AXE } from '../WeaponFamilies';
import { WPN_TYPE_BATTLE_AXE } from '../WeaponTypes';
import WeaponType from './WeaponType';

export default class WpnTypeBattleAxe extends WeaponType {
    constructor() {
        super({
            key: WPN_TYPE_BATTLE_AXE,
            name: 'Battle axe',
            family: WPN_FAMILY_AXE,
            damageType: DMG_TYPE_SLASHING,
            skill: SKILL_AXE,
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

        if (!result.data.isDodged && !result.data.isKilled && randomBool()) {
            const secondAttack = this._createAttack(attacker, defender, weapon);

            attacks.push(secondAttack);

            defender.fireEvent('attacked', { attack });
        }

        return attacks;
    }
}
