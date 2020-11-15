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
        const entitites = this.game.map.getEntitiesAt(x, y);

        return !entitites.some((e) => e.has(Shadowcaster));
    }

    setVisible(x, y) {
        const entitites = this.game.map.getEntitiesAt(x, y);

        entitites.forEach((e) => e.add(Visible));
    }

    computeFOV() {
        this.query.get().forEach((e) => e.remove(Visible));

        this.fov.compute(this.game.player.x, this.game.player.y, 4, (x, y, r, visibility) => {
            // var ch = (r ? "" : "@");
            // var color = (data[x+","+y] ? "#aa0": "#660");
            this.setVisible(x, y);
            // display.draw(x, y, ch, "#fff", color);
        });
    }

    update(dt) {
        if (this.game.clock.tickDelta) {
            this.computeFOV();
        }
    }
}
