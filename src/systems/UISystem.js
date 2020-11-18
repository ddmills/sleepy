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

        this.game.renderer.drawText(1, 1, `Knossonia (${x}, ${y}) ${hasMouse}`);

        const str = `${turn}.${subTurn}`;
        const len = Math.ceil(this.game.renderer.computeTextWidth(str));

        this.game.renderer.drawText(this.game.renderer.width - 1 - len, 1, str);

        const hp = this.game.player.entity.health;

        this.game.renderer.drawText(1, this.game.renderer.height - 2, `${hp.value}/${hp.max}`, 'red');
    }
}
