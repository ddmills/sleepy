import { Particle } from '../ecs/components';
import System from './System';

export default class ParticleSystem extends System {
    #particleQuery = null;

    constructor(game) {
        super(game);
        this.#particleQuery = game.ecs.createQuery({
            all: [Particle],
        });
    }

    createAt(x, y) {
        const e = this.game.ecs.createEntity();
        e.add(Particle, {
            x,
            y
        });
    }

    update(dt) {
        this.#particleQuery.get().forEach((entity) => {
            const particle = entity.particle;

            particle.age += dt;

            if (particle.isExpired) {
                entity.destroy();
            } else {
                this.game.renderer.draw(
                    particle.x,
                    particle.y,
                    particle.glyph,
                    particle.fg1,
                    particle.fg2,
                    particle.bg,
                );
            }
        });
    }
}
