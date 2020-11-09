import { Component } from 'geotic';

export class Actor extends Component {
    static properties = {
        energy: 0,
    };

    get hasEnergy() {
        return this.energy >= 0;
    }

    onEnergyConsumed(evt) {
        this.reduceEnergy(evt.data);
    }

    onTick(evt) {
        this.addEnergy(1);
    }

    addEnergy(value) {
        this.energy += value;

        if (this.energy >= 0) {
            this.energy = 0;
        }
    }

    reduceEnergy(value) {
        this.addEnergy(value * -1);
    }
}
