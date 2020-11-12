import InputKeyboardEvent from './events/InputKeyboardEvent';
import InputMouseEvent from './events/InputMouseEvent';
import Manager from '../Manager';

export default class InputController extends Manager {
    constructor(game) {
        super(game);
        document.addEventListener('keydown', this.onKeydown.bind(this));

        const container = this.game.renderer.getDOMContainer();

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
        const [tileX, tileY] = this.game.renderer.eventToPosition(e);

        const evt = new InputMouseEvent({
            key: e.button,
            x: e.offsetX,
            y: e.offsetY,
            shift: e.shiftKey,
            ctrl: e.ctrlKey,
            alt: e.altKey,
            meta: e.metaKey,
            tileX,
            tileY,
        });

        this.game.commands.onInputEvent(evt);
    }

    onMouseMove(e) {
        const [tileX, tileY] = this.game.renderer.eventToPosition(e);

        this.game.mouse.updatePosition(tileX, tileY);
    }

    onMouseEnter(e) {
        this.game.mouse.updateMouseEnter();
    }

    onMouseLeave(e) {
        this.game.mouse.updateMouseLeave();
    }
}
