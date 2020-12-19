import System from './System';

const fpsElement = document.getElementsByClassName('fps')[0];

export default class FPSMonitoringSystem extends System {
    frames = [];
    frameCount = 60;

    constructor(game) {
        super(game);
        this.frames = [];

        for (let i = 0; i < this.frameCount; i++) {
            this.frames[i] = 0;
        }
    }

    update(dt) {
        this.frames.push(1000 / dt);
        this.frames.shift();

        const sum = this.frames.reduce((s, v) => s + v, 0);
        const fps = Math.trunc(sum / this.frameCount);

        fpsElement.innerText = fps;
    }
}
