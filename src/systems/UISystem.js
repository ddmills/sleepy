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

        const str = `${turn}.${subTurn}`;
        const len = Math.ceil(this.game.renderer.computeTextWidth(str));

        this.game.renderer.drawText(this.game.renderer.width - 1 - len, 1, str);

        const hp = this.game.player.entity.health;

        this.game.renderer.drawText(
            1,
            this.game.renderer.height - 2,
            `${hp.value}/${hp.max}`,
            '#ce5454'
        );

        const sector = this.game.world.sector;
        const sectorTxt = `sector ${sector.id} (${sector.x}, ${sector.y})`;

        this.game.renderer.drawText(0, 0, sectorTxt, '#172e2e');
    }
}
