import { game } from '../../core/Game';

const truthy = () => true;

export const simpleLineRenderer = (options = {}) => {
    const isValid = options.isValid || truthy;

    return {
        isValid,
        render: (opts) => {
            opts.line.forEach(({ x, y }, idx) => {
                if (idx === 0) {
                    return;
                }

                const color = isValid({
                    ...opts,
                    x,
                    y
                }, idx) ? 'blue' : 'red';
                const screen = game.camera.worldToScreen(x, y);

                game.renderer.draw(screen.x, screen.y, '•', color);
            });
        },
    };
};
