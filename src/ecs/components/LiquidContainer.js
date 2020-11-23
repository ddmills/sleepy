import { Component } from 'geotic';
import { drinkLiquid, liquids, LIQUID_BLOOD } from '../../enums/LiquidTypes';

export class LiquidContainer extends Component {
    static properties = {
        contents: LIQUID_BLOOD,
        volume: 10,
        maxVolume: 10,
        overridePrimary: false,
        overrideSecondary: false,
        isPourable: false,
        destroyOnEmpty: false,
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

    _checkDestroyOnEmpty() {
        if (this.destroyOnEmpty && this.isEmpty) {
            this.entity.destroy();
        }
    }

    pour(x, y, quantity) {
        if (!this.isPourable) {
            console.log('The container connot be poured.');
            return;
        }

        if (this.volume <= 0) {
            console.log('The contianer is empty and cannot be poured.');
            return;
        }

        if (isNaN(quantity) || quantity >= this.volume) {
            quantity = this.volume;
        }

        this.volume -= quantity;

        const pool = this.ecs.createPrefab('Pool', {
            liquidContainer: {
                contents: this.contents,
                volume: quantity,
            }
        });
        pool.position.setPos(x, y);
        this._checkDestroyOnEmpty();
    }

    onTryPour(evt) {
        if (this.isEmpty) {
            console.log('The container is empty.');
            return;
        }

        const pos = evt.data.interactor.position.getPos();

        this.pour(pos.x, pos.y, evt.data.volume);

        evt.handle();
    }

    onTryDrink(evt) {
        if (this.isEmpty) {
            console.log('The container is empty.');
            return;
        }

        drinkLiquid(evt.data.interactor, this.contents, this.volume);
        this.volume = 0;
        this._checkDestroyOnEmpty();
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

        if (this.isPourable) {
            evt.data.interactions.push({
                name: 'Pour',
                evt: 'try-pour',
            });
        }
    }
}
