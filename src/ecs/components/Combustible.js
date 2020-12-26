import { Component } from 'geotic';
import { game } from '../../core/Game';
import { randomWeightedBool } from '../../utils/rand';
import { Fire } from './Fire';

export class Combustible extends Component {
    static properties = {
        fuel: 200,
        flashPoint: 200,
        spawnableRemains: null,
        burnRate: 5,
    };

    get isOnFire() {
        return !!this.entity.fire;
    }

    get isOutOfFuel() {
        return this.fuel <= 0;
    }

    getTemperature() {
        const pos = this.entity.position.getPos();

        return game.temperature.getTemperature(pos.x, pos.y);
    }

    setTemperature(value) {
        const pos = this.entity.position.getPos();

        return game.temperature.setTemperature(pos.x, pos.y, value);
    }

    getDieOutChance() {
        return 0.01;
    }

    getSparkChance() {
        return this.getTemperature() / 1000;
    }

    getCatchChance(intensity) {
        if (this.fuel <= 0) {
            return 0;
        }

        const temperature = this.getTemperature();

        return (temperature * intensity) / 1000;
    }

    onSpark(evt) {
        if (this.isOnFire) {
            return;
        }

        const intensity = evt.data.intensity;

        if (randomWeightedBool(this.getCatchChance(intensity))) {
            this.entity.add(Fire, {
                intensity,
            });
            this.setTemperature(this.flashPoint);
        }
    }

    onTryIgnite(evt) {
        this.entity.add(Fire, {
            intensity: 3,
        });
        this.setTemperature(this.flashPoint);
    }

    onGetInteractions(evt) {
        if (!this.isOnFire) {
            evt.data.interactions.push({
                name: 'Ignite',
                evt: 'try-ignite',
                intensity: 3,
            });
        }
    }
}
