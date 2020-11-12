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

        this.game.renderer.drawText(1, 1, `%c{cyan}Knossonia %c{white}(${x}, ${y}) ${hasMouse}`);

        const entities = Array.from(this.#query.get());

        entities.forEach((entity, i) => {
            this.game.renderer.drawText(
                1,
                this.game.renderer.height - (2 + i),
                `energy (${entity.moniker.name}) %c{yellow}${entity.actor.energy}`
            );
        });

        this.game.renderer.drawText(
            this.game.renderer.width - 6 - `${turn}`.length,
            1,
            `%c{cyan}${turn}%c{white}.%c{yellow}${subTurn}`
        );
    }
}
