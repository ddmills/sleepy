import Display from '../rendering/Display';
import InputKeyboardEvent from './events/InputKeyboardEvent';
import InputMouseEvent from './events/InputMouseEvent';

class InputController {
    constructor() {
        document.addEventListener('keydown', this.onKeydown);

        const container = Display.getDOMContainer();

        container.addEventListener('click', this.onMouseClick);
        container.addEventListener('mousemove', this.onMouseMove);
        container.addEventListener('mouseenter', this.onMouseEnter);
        container.addEventListener('mouseleave', this.onMouseLeave);
    }

    onKeydown(e) {
        const evt = new InputKeyboardEvent({
            key: e.keyCode,
            isShift: e.shiftKey,
            isAlt: e.altKey,
            isCtrl: e.ctrlKey,
            isMeta: e.metaKey,
        });

        console.log('onKeydown', evt);
    }

    onMouseClick(e) {
        const [tileX, tileY] = Display.eventToPosition(e);

        const evt = new InputMouseEvent({
            button: e.button,
            x: e.offsetX,
            y: e.offsetY,
            isShift: e.shiftKey,
            isAlt: e.altKey,
            isCtrl: e.ctrlKey,
            isMeta: e.metaKey,
            tileX,
            tileY,
        });

        console.log('onMouseClick', e, evt);
    }

    onMouseMove(e) {
        console.log('onMouseMove');
    }

    onMouseEnter(e) {
        console.log('onMouseEnter');
    }

    onMouseLeave(e) {
        console.log('onMouseLeave');
    }
}

export default new InputController();
