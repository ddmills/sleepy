import { game } from '../core/Game';
import { lerpHSL } from '../utils/ColorUtil';
import System from './System';

const RENDER_MODE_DEFAULT = 0;
const RENDER_MODE_TEMPERATURE = 1;

const temperatureGradient = (v) => {
    const blue = [216, 40, 50];
    const red = [0, 80, 50];
    const rgb = lerpHSL(blue, red, Math.sqrt(v));

    return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
};

const modeLookup = {
    [RENDER_MODE_DEFAULT]: (x, y, e) => {
        if (e.isVisible) {
            game.renderer.draw(
                x,
                y,
                e.glyph.char,
                e.glyph.primary,
                e.glyph.secondary,
                e.glyph.background,
            );
        } else if (e.explored) {
            game.renderer.draw(
                x,
                y,
                e.glyph.char,
                '#2c3538',
                '#2c3538',
            );
        }
    },
    [RENDER_MODE_TEMPERATURE]: (x, y, e, worldX, worldY) => {
        const temp = game.temperature.getTemperature(worldX, worldY) / 200;
        const bg = temperatureGradient(Math.min(1, temp));

        if (e.isVisible) {
            game.renderer.draw(
                x,
                y,
                e.glyph.char,
                e.glyph.primary,
                e.glyph.secondary,
                bg,
            );
        } else {
            game.renderer.draw(
                x,
                y,
                e.glyph.char,
                '#2c3538',
                '#2c3538',
                bg,
            );
        }
    },
};


export default class RenderSystem extends System {
    mode = RENDER_MODE_DEFAULT;

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

        modeLookup[this.mode](x, y, renderable, world.x, world.y);
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
