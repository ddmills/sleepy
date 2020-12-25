import Grid from './Grid';

export default class MemoryGrid extends Grid {
    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    constructor(width, height, defaultValueGenerator = () => null) {
        super(width, height, defaultValueGenerator);
        this.previous = new Grid(width, height, defaultValueGenerator);
    }

    copyToPrevious() {
        this.previous._width = this._width;
        this.previous._height = this._height;
        this.previous.data = [...this.data];
    }
}
