import { Component } from 'geotic';

export class Particle extends Component {
    static properties = {
        lifetime: 150,
        age: 0,
        fg1: 'red',
        fg2: 'blue',
        bg: '',
        glyph: '*',
        x: 0,
        y: 0,
    };

    get isExpired() {
        return this.age >= this.lifetime;
    }
}
