import ecs from '../ecs';
import display from '../core/display';
import { Glyph, Position } from '../ecs/components';

const renderables = ecs.createQuery({
    all: [Glyph, Position],
});

export const update = (tick) => {
    display.clear();

    renderables.get().forEach((renderable) => {
        display.draw(
            renderable.position.x,
            renderable.position.y,
            renderable.glyph.char,
            renderable.glyph.fg,
            renderable.glyph.bg
        );
    });
};
