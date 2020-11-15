import { Moniker } from '../ecs/components';
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
        this.#x = this.game.player.x;
        this.#y = this.game.player.y;
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
        return this.game.map.getEntitiesAt(this.x, this.y);
    }

    update(dt) {
        if (!this.#isEnabled) {
            return;
        }

        this.game.renderer.draw(this.x, this.y, 'X', 'yellow');

        const entities = this.getEntities();

        entities
            .filter((e) => e.has(Moniker))
            .forEach((entity, i) => {
                const c = i === 0 ? '◄' : ' ';
                this.game.renderer.drawText(
                    entity.position.x + 1,
                    entity.position.y + i,
                    `${c}█`,
                    '#ddd'
                );
                this.game.renderer.drawText(
                    entity.position.x + 2,
                    entity.position.y + i,
                    entity.moniker.name + ' ',
                    '#111133',
                    'white',
                    '#ddd'
                );
            });
    }
}