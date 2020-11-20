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
        return this.game.map.getEntitiesAt(this.x, this.y).filter((e) => e.has(Visible));
    }

    update(dt) {
        if (!this.#isEnabled) {
            return;
        }

        const entities = this.getEntities();

        if (this.x < this.game.map.width / 2) {
            entities
                .filter((e) => e.has(Moniker))
                .forEach((entity, i) => {
                    const c = i === 0 ? '◄' : ' ';
                    this.game.renderer.drawText(
                        this.x + 1,
                        this.y + i,
                        `${c}█`,
                        '#ddd'
                    );
                    this.game.renderer.drawText(
                        this.x + 2,
                        this.y + i,
                        entity.moniker.name + ' ',
                        '#111133',
                        'white',
                        '#ddd'
                    );
                });
        } else {
            entities
                .filter((e) => e.has(Moniker))
                .forEach((entity, i) => {
                    const c = i === 0 ? '►' : ' ';
                    this.game.renderer.drawText(
                        this.x - 1,
                        this.y + i,
                        `█${c}`,
                        '#ddd'
                    );
                    const len = this.game.renderer.computeTextWidth(entity.moniker.name);
                    this.game.renderer.drawText(
                        this.x - len - 1.5,
                        this.y + i,
                        ' ' + entity.moniker.name,
                        '#111133',
                        'white',
                        '#ddd'
                    );
                });
        }

        this.game.renderer.draw(this.x, this.y, 'X', 'yellow');
    }
}
