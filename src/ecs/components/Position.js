import { Component } from 'geotic';
import { game } from '../../core/Game';

export class Position extends Component {
    static properties = {
        chunkId: 0,
    };

    getPos() {
        return game.map.getPosition(this.entity.id, this.chunkId);
    }

    setPos(x, y) {
        return game.map.setPosition(x, y, this.entity.id, this.chunkId);
    }

    equals(x, y) {
        const pos = this.getPos();

        return pos.x === x && pos.y === y;
    }
}
