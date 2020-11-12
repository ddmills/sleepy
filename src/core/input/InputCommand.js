import InputKeyboardEvent from './events/InputEvent';

export default class InputCommand {
    constructor(data) {
        this.domain = data.domain;
        this.type = data.type;
        this.name = data.name;
        this.isKeyboard = data.isKeyboard;
        this.key = data.key;
        this.shift = data.shift;
        this.ctrl = data.ctrl;
        this.alt = data.alt;
        this.meta = data.meta;
    }

    matches(inputEvent) {
        const isKeyboard = inputEvent instanceof InputKeyboardEvent;

        return (
            this.isKeyboard == isKeyboard &&
            this.key == inputEvent.key &&
            this.shift == inputEvent.shift &&
            this.ctrl == inputEvent.ctrl &&
            this.alt == inputEvent.alt &&
            this.meta == inputEvent.meta
        );
    }
}
