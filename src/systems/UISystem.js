import { Moniker, Actor } from '../ecs/components';
import System from './System';

export default class UISystem extends System {
    #query = null;

    constructor(game) {
        super(game);
        this.#query = this.game.ecs.createQuery({
            all: [Moniker, Actor],
        });
    }

    update(dt) {
        const turn = this.game.clock.turn;
        const subTurn = `${this.game.clock.subTurn.toFixed(0)}`.padEnd(3, '0');

        const str = `${turn}.${subTurn}`;
        const len = Math.ceil(this.game.renderer.computeTextWidth(str));

        this.game.renderer.drawText(this.game.camera.width - 1 - len, 1, str);

        const hp = this.game.player.entity.health;

        this.game.renderer.drawText(1, 1, `${Math.round(hp.value)}/${hp.max}`, '#ce5454');
    }
}
