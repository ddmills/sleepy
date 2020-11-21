import Manager from './Manager';

export default class CameraManager extends Manager {
    width = 24;
    height = 24;

    #focusX = 0;
    #focusY = 0;

    get topLeftWorldX() {
        return Math.min(
            Math.max(0, this.#focusX - this.width / 2),
            this.game.map.width - this.width
        );
    }

    get topLeftWorldY() {
        return Math.min(
            Math.max(0, this.#focusY - this.height / 2),
            this.game.map.height - this.height
        );
    }

    setFocus(x, y) {
        this.#focusX = x;
        this.#focusY = y;
    }

    worldToScreen(x, y) {
        return {
            x: x - this.topLeftWorldX,
            y: y - this.topLeftWorldY,
        };
    }

    screenToWorld(x, y) {
        return {
            x: x + this.topLeftWorldX,
            y: y + this.topLeftWorldY,
        };
    }

    isInView(worldX, worldY) {
        const screen = this.worldToScreen(worldX, worldY);

        return (
            screen.x < this.width &&
            screen.y < this.height &&
            screen.x >= 0 &&
            screen.y >= 0
        );
    }
}
