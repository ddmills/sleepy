
export default class MouseManager {
    #x = 0;
    #y = 0;
    #hasMouse = false;

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    get hasMouse() {
        return this.#hasMouse;
    }

    updatePosition(x, y) {
        this.#x = Math.max(0, x);
        this.#y = Math.max(0, y);
    }

    updateMouseEnter() {
        this.#hasMouse = true;
    }

    updateMouseLeave() {
        this.#hasMouse = false;
    }
}
