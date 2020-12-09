import { randomInt } from './rand';

export default class WeightedTable {
    rows = [];

    get sum() {
        return this.rows.reduce((sum, cur) => sum + cur.weight, 0);
    }

    pick() {
        const r = randomInt(0, this.sum);

        let currentW = 0;
        const row = this.rows.find((row) => {
            currentW += row.weight;

            return currentW >= r;
        });

        if (row) {
            return row.value;
        }
    }

    chance(value) {
        const row = this.get(value);

        if (!row) {
            return 0;
        }

        return row.weight / this.sum;
    }

    get(value) {
        return this.rows.find((row) => row.value === value);
    }

    add(weight, value) {
        const existing = this.get(value);

        if (!existing) {
            this.rows.push({
                weight,
                value,
            });

            return;
        }

        // take maximum weight
        const maxWeight = Math.max(existing.weight, weight);

        existing.weight = maxWeight;
    }

    static combine(tableA, tableB) {
        const table = new WeightedTable();

        tableA.rows.forEach((row) => table.add(row.weight, row.value));
        tableB.rows.forEach((row) => table.add(row.weight, row.value));

        return table;
    }
}
