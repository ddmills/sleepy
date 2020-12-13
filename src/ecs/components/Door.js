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

    get display() {
        return this.isOpen ? '[open]' : '[closed]';
    }

    openDoor() {
        if (this.isOpen) {
            return false;
        }

        this.isOpen = true;

        const glyph = this.entity.glyph;

        if (glyph) {
            glyph.ch = this.ch;
        }

        this.entity.blocker.destroy();
        this.entity.shadowcaster.destroy();

        return true;
    }

    closeDoor() {
        if (!this.isOpen) {
            return false;
        }
        // todo: check if entity blocking door

        this.isOpen = false;

        const glyph = this.entity.glyph;

        if (glyph) {
            glyph.ch = this.ch;
        }

        this.entity.add(Blocker);
        this.entity.add(Shadowcaster);

        return true;
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
        if (this.closeDoor()) {
            evt.data.interactor.fireEvent('energy-consumed', 800);
        }
        evt.handle();
    }

    onTryOpenDoor(evt) {
        if (this.openDoor()) {
            evt.data.interactor.fireEvent('energy-consumed', 800);
        }
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
