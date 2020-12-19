
export default class WeaponType {
    constructor(data) {
        this.name = data.name;
        this.family = data.family;
        this.key = data.key;
        this.damageType = data.damageType;
    }

    getAttacks(attacker, defender, weapon) {
        return [];
    }

    attack(attacker, defender, weapon) {
        const attacks = this.getAttacks(attacker, defender, weapon);

        return attacks.map((attack) => {
            attack.defender.fireEvent('attacked', { attack });
        });
    }
}
