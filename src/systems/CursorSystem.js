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
                this.game.renderer.drawText(
                    1,
                    this.game.renderer.height - 1 - (entities.length - i),
                    entity.moniker.name
                );
            });
    }
}
