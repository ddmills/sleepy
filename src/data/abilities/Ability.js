export default class Ability {
    key = '';
    type = 0;
    name = '';
    description = '';
    isToggleable = false;

    getDescription(entity) {
        return '';
    }

    constructor(key, type, name) {
        this.key = key;
        this.type = type;
        this.name = name;
    }

    initiate(entity) {
    }

    execute(entity, data) {
    }

    updateAbilityStatus(dt, entity, status) {
    }
}
