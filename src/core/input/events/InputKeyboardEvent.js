export default class InputKeyboardEvent {
    key = false;
    isShift = false;
    isAlt = false;
    isCtrl = false;
    isMeta = false;

    constructor(data) {
        (this.key = data.key), (this.isShift = data.isShift);
        this.isAlt = data.isAlt;
        this.isCtrl = data.isCtrl;
        this.isMeta = data.isMeta;
    }
}
