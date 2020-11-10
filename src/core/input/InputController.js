import InputKeyboardEvent from './events/InputKeyboardEvent';
import InputMouseEvent from './events/InputMouseEvent';

export default class InputController {
    #renderer = null;

    constructor(renderer) {
        this.#renderer = renderer;
        document.addEventListener('keydown', this.onKeydown.bind(this));

        const container = this.#renderer.getDOMContainer();

        container.addEventListener('click', this.onMouseClick.bind(this));
        container.addEventListener('mousemove', this.onMouseMove.bind(this));
        container.addEventListener('mouseenter', this.onMouseEnter.bind(this));
        container.addEventListener('mouseleave', this.onMouseLeave.bind(this));
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
        const [tileX, tileY] = this.#renderer.eventToPosition(e);

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
