import { Component } from 'geotic';
import { LiquidContainer } from './LiquidContainer';

export class FragileGlass extends Component {
    shatter(x, y) {
        const shards = this.ecs.createPrefab('GlassShard', {
            stackable: {
                quantity: 7
            }
        });

        shards.position.setPos(x, y);

        if (this.entity.has(LiquidContainer)) {
            this.entity.liquidContainer.pour(x, y);
        }

        this.entity.destroy();
    }

    onCollideGround(evt) {
        this.shatter(evt.data.x, evt.data.y);
    }

    onCollide(evt) {
        this.shatter(evt.data.x, evt.data.y);
    }
}
