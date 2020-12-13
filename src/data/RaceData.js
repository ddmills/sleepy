export default class RaceData {
    name = '';
    speed = 1;
    key = 1;
    modStrength = 0;
    modDexterity = 0;
    modAthleticism = 0;
    modTrickery = 0;

    constructor(data) {
        this.name = data.name || '';
        this.speed = data.speed || 1;
        this.key = data.key;

        this.modStrength = data.modStrength || 0;
        this.modDexterity = data.modDexterity || 0;
        this.modAthleticism = data.modAthleticism || 0;
        this.modTrickery = data.modTrickery || 0;
    }
}
