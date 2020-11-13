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
        const subTurn = `${this.game.clock.subTurn}`.padEnd(3, '0');

        const x = this.game.mouse.x;
        const y = this.game.mouse.y;
        const hasMouse = this.game.mouse.hasMouse;

        this.game.renderer.drawText(
            1,
            1,
            `Knossonia (${x}, ${y}) ${hasMouse}`
        );

        this.game.renderer.drawText(
            this.game.renderer.width - 5 - `${turn}`.length,
            1,
            `${turn}.${subTurn}`
        );
    }
}
