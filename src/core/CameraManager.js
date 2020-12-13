import Manager from './Manager';

export default class CameraManager extends Manager {
    width = 32;
    height = 24;
    zoom = 2;
    padding = 4;

    #focusX = 0;
    #focusY = 0;

    constructor(game) {
        super(game);
        window.addEventListener('resize', this.onWindowResize.bind(this));
        this.onWindowResize();
    }

    get renderedTileWidth() {
        return this.zoom * this.game.renderer.tileWidth;
    }

    get renderedTileHeight() {
        return this.zoom * this.game.renderer.tileHeight;
    }

    get topLeftWorldX() {
        return Math.floor(Math.min(
            Math.max(-this.padding, this.#focusX - this.width / 2),
            Math.max(
                (this.width - this.game.map.width) / -2,
                this.padding + this.game.map.width - this.width
            ))
        );
    }

    get topLeftWorldY() {
        return Math.floor(Math.min(
            Math.max(-this.padding, this.#focusY - this.height / 2),
            Math.max(
                (this.height - this.game.map.height) / -2,
                this.padding + this.game.map.height - this.height
            ))
        );
    }

    computeSize() {
        this.width = Math.floor(window.innerWidth / this.renderedTileWidth) - 2;
        this.height = Math.floor(window.innerHeight / this.renderedTileHeight) - 2;
    }

    onWindowResize() {
        this.computeSize();
        this.game.renderer.resizeDisplay(this.width, this.height, this.zoom);
    }

    setZoom(zoom) {
        this.zoom = zoom;
        this.onWindowResize();
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
