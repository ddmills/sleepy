import { Component } from 'geotic';
import { LiquidContainer } from './LiquidContainer';
import { Stackable } from './Stackable';

export class Moniker extends Component {
    static properties = {
        name: 'Unknown',
    };

    get display() {
        const hasLiquid = this.entity.has(LiquidContainer);

        if (hasLiquid) {
            const disp = this.entity.liquidContainer.display;

            return `${this.name} ${disp}`;
        }

        const hasStackable = this.entity.has(Stackable);

        if (hasStackable) {
            const disp = this.entity.stackable.display;

            return `${this.name} ${disp}`;
        }

        return this.name;
    }
}
