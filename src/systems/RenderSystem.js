import {
    IsInventoried,
    Explored,
    Glyph,
    Position,
    Visible,
} from '../ecs/components';
import System from './System';

export default class RenderSystem extends System {
    #query = null;
    #explored = null;

    constructor(game) {
        super(game);
        this.#query = game.ecs.createQuery({
            all: [Glyph, Position, Visible],
            not: [IsInventoried],
        });
        this.#explored = game.ecs.createQuery({
            all: [Glyph, Position, Explored],
            none: [Visible],
        });
    }

    render() {
        this.game.renderer.clear();

        this.#explored.get().forEach((renderable) => {
            const pos = renderable.position.getPos();

            if (!this.game.camera.isInView(pos.x, pos.y)) {
                return;
            }

            const screen = this.game.camera.worldToScreen(pos.x, pos.y);

            this.game.renderer.draw(
                screen.x,
                screen.y,
                renderable.glyph.char,
                '#283131',
                '#283131'
            );
        });

        this.#query.get().forEach((renderable) => {
            const pos = renderable.position.getPos();

            if (!this.game.camera.isInView(pos.x, pos.y)) {
                return;
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
        });
    }

    update(dt) {
        this.render();
    }
}
