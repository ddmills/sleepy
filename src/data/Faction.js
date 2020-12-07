export default class Faction {
    id = 0;
    name = 'faction';
    display = 'Faction';

    constructor(properties) {
        this.id = properties.id;
        this.name = properties.name;
        this.display = properties.display;
    }
}
