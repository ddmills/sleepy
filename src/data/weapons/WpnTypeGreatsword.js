import { game } from '../../core/Game';
import { getAdjacentDeltas, directionFromDelta } from '../../enums/Directions';
import Attack from '../Attack';
import { DMG_TYPE_SLASHING } from '../DamageTypes';
import { getStat, STAT_STRENGTH } from '../Stats';
import { WPN_FAMILY_BLADE } from '../WeaponFamilies';
import { WPN_TYPE_GREATSWORD } from '../WeaponTypes';
import WeaponType from './WeaponType';

export default class WpnTypeGreatsword extends WeaponType {
    constructor() {
        super({
            key: WPN_TYPE_GREATSWORD,
            name: 'Greatsword',
            family: WPN_FAMILY_BLADE,
            damageType: DMG_TYPE_SLASHING,
        });
    }

    _getNeighborAttacks(attacker, defender, weapon, damage) {
        const attackerPos = attacker.position.getPos();
        const defenderPos = defender.position.getPos();
        const deltaX = defenderPos.x - attackerPos.x;
        const deltaY = defenderPos.y - attackerPos.y;
        const direction = directionFromDelta(deltaX, deltaY);
        const adjacentDeltas = getAdjacentDeltas(direction.key);

        return adjacentDeltas
            .map((delta) => game.map.getEntitiesAt(
                attackerPos.x + delta.x,
                attackerPos.y + delta.y,
            ))
            .flat()
            .filter((e) => game.factions.areEntitiesHostile(e, attacker))
            .map((hostile) => {
                return new Attack({
                    attacker,
                    ignoreDodge: true,
                    defender: hostile,
                    weaponName: weapon.name,
                    damage: Math.floor(damage / 2),
                    damageType: this.damageType,
                });
            });
    }

    _tryAttackDefender(attacker, defender, weapon, damage) {
        const attack = new Attack({
            attacker,
            defender,
            weaponName: weapon.name,
            damage,
            damageType: this.damageType,
        });

        return defender.fireEvent('attacked', { attack });
    }

    attack(attacker, defender, weapon) {
        const str = getStat(STAT_STRENGTH, attacker);
        const die = weapon.roll();
        const damage = die + str;
        const result = this._tryAttackDefender(attacker, defender, weapon, damage);

        const attacks = [result];

        if (!result.data.isDodged) {
            const neighborAttacks = this._getNeighborAttacks(attacker, defender, weapon, damage);

            neighborAttacks.forEach((attack) => {
                attacks.push(attack);
                attack.defender.fireEvent('attacked', { attack });
            });
        }

        return attacks;
    }
}
