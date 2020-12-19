export default class Attack {
    constructor(data) {
        this.attacker = data.attacker;
        this.defender = data.defender;
        this.weaponName = data.weaponName;
        this.damage = data.damage;
        this.damageType = data.damageType;
    }
}
