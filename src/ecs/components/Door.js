import { Component } from 'geotic';
import { Blocker } from './Blocker';
import { Shadowcaster } from './Shadowcaster';

export class Door extends Component {
    static properties = {
        isOpen: false,
        chOpen: "'",
        chClosed: '+',
    };

    get ch() {
        return this.isOpen ? this.chOpen : this.chClosed;
    }

    openDoor() {
        if (this.isOpen) {
            return;
        }

        this.isOpen = true;

        const glyph = this.entity.glyph;

        if (glyph) {
            glyph.ch = this.ch;
        }

        this.entity.remove(Blocker);
        this.entity.remove(Shadowcaster);
    }

    closeDoor() {
        if (!this.isOpen) {
            return;
        }
        // todo: check if entity blocking door

        this.isOpen = false;

        const glyph = this.entity.glyph;

        if (glyph) {
            glyph.ch = this.ch;
        }

        this.entity.add(Blocker);
        this.entity.add(Shadowcaster);
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
        this.closeDoor();
        evt.handle();
    }

    onTryOpenDoor(evt) {
        this.openDoor();
        evt.handle();
    }

    onProjectileHit(evt) {
        if (!this.isOpen) {
            evt.data.stopProjectile = true;
            evt.data.deflectProjectile = false;
        }

        this.openDoor();
    }
}
