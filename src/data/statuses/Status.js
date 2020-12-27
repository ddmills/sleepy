export default class Status {
    isDot = false;

    getPipCount(potency) {
        return 0;
    }

    constructor(key, name, type, glyph) {
        this.key = key;
        this.name = name;
        this.type = type;
        this.glyph = glyph;
    }
}
