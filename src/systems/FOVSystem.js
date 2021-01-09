import { FOV } from 'rot-js';
import {
    Explorable,
    Explored,
    Shadowcaster,
    IsVisible,
} from '../ecs/components';
import System from './System';

export default class FOVSystem extends System {
    constructor(game) {
        super(game);

        this.fov = new FOV.PreciseShadowcasting((x, y) =>
            this.isSquareVisible(x, y)
        );

        this.query = this.game.ecs.createQuery({
            all: [IsVisible],
        });
    }

    isSquareVisible(x, y) {
        return !this.game.map
            .getEntitiesAt(x, y)
            .some((e) => e.has(Shadowcaster));
    }

    setVisible(x, y, amount, range) {
        this.game.map.getEntitiesAt(x, y, true).forEach((e) => {
            e.add(IsVisible, {
                range,
                amount,
            });
            if (e.explorable && !e.explored) {
                e.add(Explored);
                if (e.bitmaskGlyph) {
                    this.game.bitmasks.refreshMaskAndNeighbors(e);
                }
            }
        });
    }

    computeFOV() {
        this.query.get().forEach((e) => e.isVisible.destroy());

        const pos = this.game.player.position;

        this.fov.compute(pos.x, pos.y, 8, (x, y, r, visibility) => {
            this.setVisible(x, y, visibility, r);
        });
    }

    update(dt) {
        if (this.game.clock.tickDelta) {
            this.computeFOV();
        }
    }
}
