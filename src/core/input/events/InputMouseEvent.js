import InputEvent from './InputEvent';

export default class InputMouseEvent extends InputEvent {
    x = false;
    y = false;
    tileX = false;
    tileY = false;

    constructor(data) {
        super(data);
        this.x = data.x;
        this.y = data.y;
        this.tileX = data.tileX;
        this.tileY = data.tileY;
    }
}
