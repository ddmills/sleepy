import { Component } from 'geotic';
import { Blocker } from './Blocker';
import { Shadowcaster } from './Shadowcaster';

export class Door extends Component {
    static properties = {
        isOpen: false,
        chOpen: '\'',
        chClosed: '+',
    };

    get ch() {
        return this.isOpen ? this.chOpen : this.chClosed;
    }

    onTryOpen(evt) {
        game.screens.pushScreen(SCREEN_INVENTORY, {
            accessible: this.entity,
            accessor: evt.data.interactor,
        });
        evt.handle();
    }

    onGetInteractions(evt) {
        if (this.isOpen) {
            evt.data.interactions.push({
                name: 'Close door',
                evt: 'try-close-door',
            });
        } else {
            evt.data.interactions.push({
                name: 'Open door',
                evt: 'try-open-door',
            });
        }
    }

    onTryCloseDoor(evt) {
        // todo: check if entity blocking door

        this.isOpen = false;

        const glyph = this.entity.glyph;

        if (glyph) {
            glyph.ch = this.ch;
        }

        this.entity.add(Blocker);
        this.entity.add(Shadowcaster);

        evt.handle();
    }

    onTryOpenDoor(evt) {
        this.isOpen = true;

        const glyph = this.entity.glyph;

        if (glyph) {
            glyph.ch = this.ch;
        }

        this.entity.remove(Blocker);
        this.entity.remove(Shadowcaster);

        evt.handle();
    }
}
