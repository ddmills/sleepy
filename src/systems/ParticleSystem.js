import { game } from '../core/Game';
import { Particle, ParticleEmitter } from '../ecs/components';
import System from './System';

export default class ParticleSystem extends System {
    #particleQuery = null;
    #emitterQuery = null;

    constructor(game) {
        super(game);
        this.#emitterQuery = game.ecs.createQuery({
            all: [ParticleEmitter],
        });
        this.#particleQuery = game.ecs.createQuery({
            all: [Particle],
        });
    }

    createParticle(x, y, properties = {}) {
        const e = this.game.ecs.createEntity();

        e.add(Particle, {
            ...properties,
            x,
            y,
        });
    }

    createEmitter(x, y, particleData = {}) {
        const e = this.game.ecs.createEntity();

        e.add(ParticleEmitter, {
            x,
            y,
            particleData: {
                direction: {
                    x: 0,
                    y: 1,
                },
                glyphs: ['░', '▒', '▓', '█'],
                fg1s: ['cyan', 'blue'],
                speed: 0.04,
                lifetime: 600,
                ...particleData,
            },
        });
    }

    update(dt) {
        this.#emitterQuery.get().forEach((entity) => {
            const emitter = entity.particleEmitter;

            emitter.age += dt;

            if (emitter.isExpired) {
                entity.destroy();
            } else {
                const total = (emitter.rate / 1000) * emitter.duration;
                const targetCount = Math.trunc(emitter.percent * total);

                for (let i = emitter.count; i < targetCount; i++) {
                    emitter.createParticle();
                }
            }
        });

        this.#particleQuery.get().forEach((entity) => {
            const particle = entity.particle;

            particle.age += dt;

            if (particle.isExpired) {
                entity.destroy();
                return;
            }

            particle.x += particle.direction.x * particle.speed;
            particle.y += particle.direction.y * particle.speed;

            if (!this.game.camera.isInView(particle.x, particle.y)) {
                return;
            }

            const screen = this.game.camera.worldToScreen(
                particle.x,
                particle.y
            );

            this.game.renderer.draw(
                Math.round(screen.x),
                Math.round(screen.y),
                particle.glyph,
                particle.fg1,
                particle.fg2,
                particle.bg
            );
        });
    }
}
