import InputKeyboardEvent from './events/InputKeyboardEvent';
import InputMouseEvent from './events/InputMouseEvent';
import Manager from '../Manager';

export default class InputController extends Manager {
    constructor(game) {
        super(game);
        document.addEventListener('keydown', this.onKeydown.bind(this));

        const container = this.game.renderer.canvas;

        container.addEventListener('click', this.onMouseClick.bind(this));
        container.addEventListener('mousemove', this.onMouseMove.bind(this));
        container.addEventListener('mouseenter', this.onMouseEnter.bind(this));
        container.addEventListener('mouseleave', this.onMouseLeave.bind(this));
    }

    onKeydown(e) {
        const evt = new InputKeyboardEvent({
            key: e.keyCode,
            shift: e.shiftKey,
            ctrl: e.ctrlKey,
            alt: e.altKey,
            meta: e.metaKey,
        });

        e.preventDefault();

        this.game.commands.onInputEvent(evt);
    }

    onMouseClick(e) {
        const xPx = e.offsetX;
        const yPx = e.offsetY;
        const {x, y} = this.game.renderer.pxToTile(xPx, yPx);

        const evt = new InputMouseEvent({
            key: e.button,
            x,
            y,
            shift: e.shiftKey,
            ctrl: e.ctrlKey,
            alt: e.altKey,
            meta: e.metaKey,
            xPx,
            yPx,
        });

        this.game.commands.onInputEvent(evt);
    }

    onMouseMove(e) {
        const xPx = e.offsetX;
        const yPx = e.offsetY;
        const {x, y} = this.game.renderer.pxToTile(xPx, yPx);

        this.game.mouse.updatePosition(x, y);
    }

    onMouseEnter(e) {
        this.game.mouse.updateMouseEnter();
    }

    onMouseLeave(e) {
        this.game.mouse.updateMouseLeave();
    }
}
