import {
    IsInventoried,
    Explored,
    Glyph,
    Position,
    IsVisible,
    IsDestroying,
} from '../ecs/components';
import System from './System';

export default class RenderSystem extends System {
    #query = null;
    #explored = null;

    constructor(game) {
        super(game);
        this.#query = game.ecs.createQuery({
            all: [Glyph, Position, IsVisible],
            none: [IsInventoried, IsDestroying],
        });
        this.#explored = game.ecs.createQuery({
            all: [Glyph, Position, Explored],
            none: [IsInventoried, IsVisible, IsDestroying],
        });
    }

    render(dt) {
        this.game.renderer.clear();

        const explored = Array.from(this.#explored.get());

        for (let i = 0; i < explored.length; i++) {
            const renderable = explored[i];
            const pos = renderable.position.getPos();

            if (!this.game.camera.isInView(pos.x, pos.y)) {
                continue;
            }

            const screen = this.game.camera.worldToScreen(pos.x, pos.y);

            this.game.renderer.draw(
                screen.x,
                screen.y,
                renderable.glyph.char,
                '#2c3538',
                '#2c3538'
            );
        };

        const renderables = Array.from(this.#query.get());

        for (let i = 0; i < renderables.length; i++) {
            const renderable = renderables[i];
            const pos = renderable.position.getPos();

            if (!this.game.camera.isInView(pos.x, pos.y)) {
                continue;
            }

            const screen = this.game.camera.worldToScreen(pos.x, pos.y);

            this.game.renderer.draw(
                screen.x,
                screen.y,
                renderable.glyph.char,
                renderable.glyph.primary,
                renderable.glyph.secondary,
                renderable.glyph.background
            );
        }
    }

    update(dt) {
        this.render();
    }
}
