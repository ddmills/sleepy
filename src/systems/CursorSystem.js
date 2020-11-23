import { Moniker, Visible } from '../ecs/components';
import * as Directions from '../enums/Directions';
import System from './System';

export default class CursorSystem extends System {
    #isEnabled = false;
    #x = 1;
    #y = 1;

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    get isEnabled() {
        return this.#isEnabled;
    }

    enable() {
        const player = this.game.player.position;

        this.#x = player.x;
        this.#y = player.y;

        this.#isEnabled = true;
    }

    disable() {
        this.#isEnabled = false;
    }

    toggle() {
        if (this.isEnabled) {
            this.disable();
        } else {
            this.enable();
        }
    }

    move(direction) {
        const delta = Directions.delta(direction);
        this.#x += delta.x;
        this.#y += delta.y;
    }

    getEntities() {
        return this.game.map
            .getEntitiesAt(this.x, this.y)
            .filter((e) => e.has(Visible));
    }

    drawCursor(color = 'yellow') {
        const screen = this.game.camera.worldToScreen(this.x, this.y);

        this.game.renderer.draw(screen.x, screen.y, 'X', color);
    }

    drawTags() {
        const entities = this.getEntities().filter((e) => e.has(Moniker));
        const screen = this.game.camera.worldToScreen(this.x, this.y);

        if (screen.x < this.game.camera.width / 2) {
            entities.forEach((entity, i) => {
                const c = i === 0 ? '◄' : ' ';
                this.game.renderer.drawText(
                    screen.x + 1,
                    screen.y + i,
                    `${c}█`,
                    '#ddd'
                );
                this.game.renderer.drawText(
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
                this.game.renderer.drawText(
                    screen.x - 1,
                    screen.y + i,
                    `█${c}`,
                    '#ddd'
                );
                const len = this.game.renderer.computeTextWidth(
                    entity.moniker.display
                );
                this.game.renderer.drawText(
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
}
