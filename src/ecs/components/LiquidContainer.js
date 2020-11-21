import { Component } from 'geotic';
import { drinkLiquid, liquids, LIQUID_HEALING } from '../../enums/LiquidTypes';

export class LiquidContainer extends Component {
    static properties = {
        contents: LIQUID_HEALING,
        volume: 10,
        maxVolume: 10,
    }

    onTryDrink(evt) {
        if (this.isEmpty) {
            console.log('The container is empty.');
            return;
        }

        drinkLiquid(evt.data.target, this.contents, this.volume);
        this.volume = 0;
        evt.handle();
    }

    get isEmpty() {
        return !this.contents || this.volume <= 0;
    }

    get display() {
        if (this.isEmpty) {
            return 'empty';
        }

        return `${this.volume} drams of ${liquids[this.contents].name}`;
    }
}
