import { Glyph, Position } from '../ecs/components';
import System from './System';

export default class RenderSystem extends System {
    #query = null;

    constructor(game) {
        super(game);
        this.#query = game.ecs.createQuery({
            all: [Glyph, Position],
        });
    }

    render() {
        this.game.renderer.clear();

        this.#query.get().forEach((renderable) => {
            this.game.renderer.draw(
                renderable.position.x,
                renderable.position.y,
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
