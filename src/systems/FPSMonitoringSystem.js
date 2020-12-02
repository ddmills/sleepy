import System from './System';

export default class FPSMonitoringSystem extends System {
    update(dt) {
        const sector = this.game.world.sector;
        let sectorTxt = '';

        if (sector) {
            sectorTxt = `(${sector.x}, ${sector.y})`;
        };

        const fps = Math.trunc(1000 / dt);
        const display = `${sectorTxt} ${fps}`;

        const textWidth = this.game.renderer.computeTextWidth(display);
        const x = this.game.camera.width - textWidth;

        this.game.renderer.drawText(
            x,
            this.game.camera.height - 1,
            display,
            '#172e2e'
        );
    }
}
