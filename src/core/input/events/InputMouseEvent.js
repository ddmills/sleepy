export default class InputMouseEvent {
    button = false;
    x = false;
    y = false;
    isShift = false;
    isAlt = false;
    isCtrl = false;
    isMeta = false;
    tileX = false;
    tileY = false;

    constructor(data) {
        this.button = data.button;
        this.x = data.x;
        this.y = data.y;
        this.isShift = data.isShift;
        this.isAlt = data.isAlt;
        this.isCtrl = data.isCtrl;
        this.isMeta = data.isMeta;
        this.tileX = data.tileX;
        this.tileY = data.tileY;
    }
}
