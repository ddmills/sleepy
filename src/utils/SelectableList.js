export default class SelectableList {
    _items = [];
    _idx = 0;

    get selected() {
        return this._items[this._idx];
    }

    get items() {
        return this._items;
    }

    get data() {
        return this._items.map((item, idx) => ({
            item,
            idx,
            isSelected: idx === this._idx,
        }));
    }

    get isEmpty() {
        return this._items.length <= 0;
    }

    get length() {
        return this._items.length;
    }

    constructor(items = [], idx = 0) {
        this._idx = idx;
        this.setItems(items);
    }

    setItems(items = []) {
        this._items = items;
        this._idx = Math.min(Math.max(this._idx, 0), this._items.length - 1);
    }

    up() {
        this._idx--;

        if (this._idx < 0) {
            this._idx = this._items.length - 1;
        }
    }

    down() {
        this._idx++;

        if (this._idx >= this._items.length) {
            this._idx = 0;
        }
    }
}
