import { game } from '../core/Game';

export const drawTags = (x, y) => {
    const entities = game.map.getEntitiesAt(x, y).filter((e) => e.moniker && e.isVisible)
    const screen = game.camera.worldToScreen(x, y);

    if (screen.x < game.camera.width / 2) {
        entities.forEach((entity, i) => {
            const c = i === 0 ? '◄' : ' ';
            game.renderer.drawText(
                screen.x + 1,
                screen.y + i,
                `${c}█`,
                '#ddd'
            );
            game.renderer.drawText(
                screen.x + 2,
                screen.y + i,
                entity.moniker.display + ' ',
                '#111133',
                'white',
                '#ddd'
            );
        });
    } else {
        entities.forEach((entity, i) => {
            const c = i === 0 ? '►' : ' ';
            game.renderer.drawText(
                screen.x - 1,
                screen.y + i,
                `█${c}`,
                '#ddd'
            );
            const len = game.renderer.computeTextWidth(
                entity.moniker.display
            );
            game.renderer.drawText(
                screen.x - len - 1.5,
                screen.y + i,
                ' ' + entity.moniker.display,
                '#111133',
                'white',
                '#ddd'
            );
        });
    }
}
