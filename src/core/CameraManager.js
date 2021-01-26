import Manager from './Manager';

export default class CameraManager extends Manager {
    width = 32;
    height = 24;
    zoom = 2;
    padding = 5;
    clampX = 16;
    clampY = 12;

    _focusX = 0;
    _focusY = 0;

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

    get left() {
        return this.topLeftWorldX;
    }

    get right() {
        return this.topLeftWorldX + this.width;
    }

    get top() {
        return this.topLeftWorldY;
    }

    get bottom() {
        return this.topLeftWorldY + this.height;
    }

    computeSize() {
        this.width = Math.max(
            this.clampX,
            Math.floor(window.innerWidth / this.renderedTileWidth)
        );
        this.height = Math.max(
            this.clampY,
            Math.floor(window.innerHeight / this.renderedTileHeight)
        );
        this.topLeftWorldX = Math.floor(
            Math.min(
                Math.max(-this.padding, this._focusX - this.width / 2),
                Math.max(
                    (this.width - this.game.map.width) / -2,
                    this.padding + this.game.map.width - this.width
                )
            )
        );
        this.topLeftWorldY = Math.floor(
            Math.min(
                Math.max(-this.padding, this._focusY - this.height / 2),
                Math.max(
                    (this.height - this.game.map.height) / -2,
                    this.padding + this.game.map.height - this.height
                )
            )
        );
    }

    onWindowResize() {
        this.computeSize();
        this.game.renderer.resizeDisplay(this.width, this.height, this.zoom);
    }

    setZoom(zoom) {
        this.zoom = zoom;
        this.computeSize();
        this.onWindowResize();
    }

    setFocus(x, y) {
        this._focusX = x;
        this._focusY = y;
        this.computeSize();
    }

    setPadding(value) {
        this.padding = value;
        this.computeSize();
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

    getScreenRect() {
        return {
            x: this.topLeftWorldX,
            y: this.topLeftWorldY,
            width: this.width,
            height: this.height,
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
