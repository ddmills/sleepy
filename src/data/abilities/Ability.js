export default class Ability {
    key = '';
    type = 0;
    name = '';
    description = '';

    constructor(key, type, name) {
        this.key = key;
        this.type = type;
        this.name = name;
    }

    execute(data) {
    }
}
