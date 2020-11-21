import { Component } from 'geotic';
import { drinkLiquid, liquids, LIQUID_BLOOD } from '../../enums/LiquidTypes';

export class LiquidContainer extends Component {
    static properties = {
        contents: LIQUID_BLOOD,
        volume: 10,
        maxVolume: 10,
        overridePrimary: false,
        overrideSecondary: false,
    };

    get liquid() {
        return !this.isEmpty && liquids[this.contents];
    }

    get isEmpty() {
        return isNaN(this.contents) || this.volume <= 0;
    }

    get display() {
        if (this.isEmpty) {
            return `[empty] ${this.volume}/${this.maxVolume}`;
        }

        return `[${liquids[this.contents].name}] ${this.volume}/${
            this.maxVolume
        }`;
    }

    get primaryColorOverride() {
        if (this.overridePrimary && this.liquid) {
            return this.liquid.primary;
        }

        return null;
    }

    get secondaryColorOverride() {
        if (this.overrideSecondary && this.liquid) {
            return this.liquid.secondary;
        }

        return null;
    }

    onTryDrink(evt) {
        if (this.isEmpty) {
            console.log('The container is empty.');
            return;
        }

        drinkLiquid(evt.data.interactor, this.contents, this.volume);
        this.volume = 0;
        evt.handle();
    }

    onGetInteractions(evt) {
        if (this.isEmpty) {
            return;
        }

        evt.data.interactions.push({
            name: 'Drink',
            evt: 'try-drink',
        });
    }
}
