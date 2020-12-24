import { Component } from 'geotic';
import { randomWeightedBool } from '../../utils/rand';
import { Fire } from './Fire';

export class Combustible extends Component {
    static properties = {
        heat: 0,
        fuel: 20,
        minHeat: 5,
        flashPoint: 25,
        spawnableRemains: null,
    };

    get isOnFire() {
        return !!this.entity.fire;
    }

    get isOutOfFuel() {
        return this.fuel <= 0;
    }

    getDieOutChance() {
        return 0;
    }

    getSparkChance() {
        return this.heat / 100;
    }

    getCatchChance() {
        if (this.fuel <= 0 || this.heat < this.minHeat) {
            return 0;
        }

        return this.heat / this.flashPoint;
    }

    onSpark(evt) {
        if (this.isOnFire) {
            return;
        }

        if (randomWeightedBool(this.getCatchChance())) {
            this.entity.add(Fire);
        }
    }

    onTryIgnite(evt) {
        this.heat = 25;
        this.entity.add(Fire);
    }

    onGetInteractions(evt) {
        if (!this.isOnFire) {
            evt.data.interactions.push({
                name: 'Ignite',
                evt: 'try-ignite',
            });
        }
    }
}
