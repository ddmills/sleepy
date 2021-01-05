export default class RaceData {
    name = '';
    speed = 1;
    key = 1;
    STAT_STRENGTH = 0;
    STAT_FINESSE = 0;
    STAT_ATHLETICISM = 0;
    STAT_TRICKERY = 0;
    STAT_FAITH = 0;

    constructor(data) {
        this.name = data.name || '';
        this.speed = data.speed || 1;
        this.key = data.key;

        this.STAT_STRENGTH = data.STAT_STRENGTH || 0;
        this.STAT_FINESSE = data.STAT_FINESSE || 0;
        this.STAT_ATHLETICISM = data.STAT_ATHLETICISM || 0;
        this.STAT_TRICKERY = data.STAT_TRICKERY || 0;
        this.STAT_FAITH = data.STAT_FAITH || 0;
    }
}
