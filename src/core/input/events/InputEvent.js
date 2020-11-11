export default class InputEvent {
    key = false;
    shift = false;
    ctrl = false;
    alt = false;
    meta = false;

    constructor(data) {
        this.key = data.key
        this.shift = data.shift;
        this.ctrl = data.ctrl;
        this.alt = data.alt;
        this.meta = data.meta;
    }
}
