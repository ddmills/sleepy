import { Component } from 'geotic';
import { LiquidContainer } from './LiquidContainer';

export class Glyph extends Component {
    static properties = {
        fg1: '#ddd',
        fg2: '#666',
        bg: null,
        ch: '?',
        z: 1000,
    };

    get primary() {
        if (this.entity.has(LiquidContainer)) {
            const col = this.entity.liquidContainer.primaryColorOverride;

            if (col) {
                return col;
            }
        }

        return this.fg1;
    }

    get secondary() {
        if (this.entity.has(LiquidContainer)) {
            const col = this.entity.liquidContainer.secondaryColorOverride;

            if (col) {
                return col;
            }
        }

        return this.fg2;
    }

    get background() {
        return this.bg;
    }

    get char() {
        return this.ch;
    }
}
