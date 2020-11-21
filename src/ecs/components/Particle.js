import { Component } from 'geotic';

export class Particle extends Component {
    static properties = {
        lifetime: 200,
        fg1s: ['#8d4c4f', '#730d14'],
        fg2s: [],
        bgs: [],
        glyphs: ['·'],
        speed: 0.05,
        age: 0,
        x: 0,
        y: 0,
        startX: 0,
        startY: 0,
        direction: {
            x: 0,
            y: 0,
        },
    };

    get isExpired() {
        return this.age >= this.lifetime;
    }

    get percent() {
        return this.age / this.lifetime;
    }

    frame(arr = []) {
        const len = arr.length;
        const chunks = 1 / len;

        return Math.trunc(this.percent / chunks);
    }

    get glyph() {
        const frame = this.frame(this.glyphs);

        return this.glyphs[frame];
    }

    get fg1() {
        const frame = this.frame(this.fg1s);

        return this.fg1s[frame];
    }

    get fg2() {
        const frame = this.frame(this.fg2s);

        return this.fg2s[frame];
    }

    get bg() {
        const frame = this.frame(this.bgs);

        return this.bgs[frame];
    }
}
