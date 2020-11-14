import { Component } from 'geotic';

export class Position extends Component {
    static properties = {
        x: 0,
        y: 0,
    };

    equals(x, y) {
        return this.x === x && this.y === y;
    }
}
