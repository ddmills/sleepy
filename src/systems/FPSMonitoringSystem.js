import System from './System';

export default class FPSMonitoringSystem extends System {
    update(dt) {
        const fps = Math.trunc(1000/dt);
        const display = `${fps}`;

        const textWidth = this.game.renderer.computeTextWidth(display);
        const x = this.game.camera.width - textWidth;

        this.game.renderer.drawText(x, this.game.renderer.height - 1, display, '#172e2e');
    }
}
