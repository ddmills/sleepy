const createItem = (value, priority) => ({ value, priority });

export default class PriorityQueue {
    #items = [];

    isEmpty() {
        return this.#items.length <= 0;
    }

    pop() {
        if (!this.isEmpty()) {
            return this.#items.shift().value;
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.#items[0].value;
        }
    }

    put(value, priority) {
        const item = createItem(value, priority);

        for (let i = 0; i < this.#items.length; i++) {
            if (this.#items[i].priority > item.priority) {
                this.#items.splice(i, 0, item);
                return;
            }
        }

        this.#items.push(item);
    }
}
