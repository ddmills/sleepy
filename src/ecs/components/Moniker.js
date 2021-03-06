import { Component } from 'geotic';
import { Door } from './Door';
import { LiquidContainer } from './LiquidContainer';
import { Stackable } from './Stackable';

export class Moniker extends Component {
    static properties = {
        name: 'Unknown',
    };

    get simpleDisplay() {
        return this.name;
    }

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

        const hasDoor = this.entity.has(Door);

        if (hasDoor) {
            const disp = this.entity.door.display;

            return `${this.name} ${disp}`;
        }

        return this.name;
    }
}
