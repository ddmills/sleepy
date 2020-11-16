import { FOV } from 'rot-js';
import { Shadowcaster, Visible } from '../ecs/components';
import System from './System';

export default class FOVSystem extends System {
    constructor(game) {
        super(game);

        this.fov = new FOV.PreciseShadowcasting((x, y) => this.isSquareVisible(x, y));

        this.query = this.game.ecs.createQuery({
            all: [Visible]
        });
    }

    isSquareVisible(x, y) {
        return !this.game.map
            .getEntitiesAt(x, y)
            .some((e) => e.has(Shadowcaster));
    }

    setVisible(x, y) {
        this.game.map
            .getEntitiesAt(x, y)
            .forEach((e) => e.add(Visible));
    }

    computeFOV() {
        this.query.get().forEach((e) => e.remove(Visible));

        const pos = this.game.player.position;

        this.fov.compute(pos.x, pos.y, 4, (x, y, r, visibility) => {
            this.setVisible(x, y);
        });
    }

    update(dt) {
        if (this.game.clock.tickDelta) {
            this.computeFOV();
        }
    }
}
