import { Component } from 'geotic';

export class Position extends Component {
    getPos() {
        return window.game.map.getPosition(this.entity.id);
    }

    setPos(x, y) {
        return window.game.map.setPosition(x, y, this.entity.id);
    }

    equals(x, y) {
        const pos = this.getPos();

        return pos.x === x && pos.y === y;
    }
}
