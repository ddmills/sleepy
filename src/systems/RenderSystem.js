import ecs from '../ecs';
import Display from '../core/rendering/Display';
import { Glyph, Position } from '../ecs/components';

const renderables = ecs.createQuery({
    all: [Glyph, Position],
});

export const update = (tick) => {
    Display.clear();

    renderables.get().forEach((renderable) => {
        Display.draw(
            renderable.position.x,
            renderable.position.y,
            renderable.glyph.char,
            renderable.glyph.fg,
            renderable.glyph.bg
        );
    });
};
