import { game } from '../../core/Game';

const truthy = () => true;

export const simpleCursorRenderer = (options = {}) => {
    const isValid = options.isValid || truthy;

    return {
        isValid,
        render: (opts) => {
            const color = isValid(opts) ? 'blue' : 'red';
            const screen = game.camera.worldToScreen(opts.x, opts.y);

            game.renderer.draw(
                screen.x,
                screen.y,
                'X',
                color
            );
        },
    };
};
