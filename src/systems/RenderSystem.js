import { Glyph, Position, Visible } from '../ecs/components';
import System from './System';

export default class RenderSystem extends System {
    #query = null;

    constructor(game) {
        super(game);
        this.#query = game.ecs.createQuery({
            all: [Glyph, Position, Visible],
        });
    }

    render() {
        this.game.renderer.clear();

        this.#query.get().forEach((renderable) => {
            const pos = renderable.position.getPos();
            this.game.renderer.draw(
                pos.x,
                pos.y,
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
