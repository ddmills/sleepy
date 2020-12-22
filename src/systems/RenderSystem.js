import {
    IsInventoried,
    Explored,
    Glyph,
    Position,
    IsVisible,
    IsDestroying,
} from '../ecs/components';
import System from './System';

export default class RenderSystem extends System {
    renderTile(x, y) {
        const world = this.game.camera.screenToWorld(x, y);

        if (!this.game.camera.isInView(world.x, world.y)) {
            return;
        }

        const entities = this.game.map
            .getEntitiesAt(world.x, world.y, true)
            .filter((e) => e.glyph && !e.isInventoried && !e.isDestroying);

        if (entities.length <= 0) {
            return;
        }

        let renderableZ = -1;
        let renderable = null;

        entities.forEach((e) => {
            if (e.glyph.z >= renderableZ) {
                renderable = e;
                renderableZ = e.glyph.z;
            }
        });

        if (renderable.isVisible) {
            this.game.renderer.draw(
                x,
                y,
                renderable.glyph.char,
                renderable.glyph.primary,
                renderable.glyph.secondary,
                renderable.glyph.background,
            );
        } else if (renderable.explored) {
            this.game.renderer.draw(
                x,
                y,
                renderable.glyph.char,
                '#2c3538',
                '#2c3538',
            );
        }
    }

    render(dt) {
        this.game.renderer.clear();

        for (let x = 0; x < this.game.camera.width; x++) {
            for (let y = 0; y < this.game.camera.height; y++) {
                this.renderTile(x, y);
            }
        }
    }

    update(dt) {
        this.render();
    }
}
