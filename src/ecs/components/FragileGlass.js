import { Component } from 'geotic';
import { game } from '../../core/Game';
import { CONSOLE_EVENT_SHATTER } from '../../enums/ConsoleEvents';
import { Dead } from './Dead';
import { IsDestroying } from './IsDestroying';
import { LiquidContainer } from './LiquidContainer';

export class FragileGlass extends Component {
    shatter(x, y) {
        const shards = this.ecs.createPrefab('GlassShard', {
            stackable: {
                quantity: 3
            }
        });

        shards.position.setPos(x, y);

        if (this.entity.has(LiquidContainer)) {
            if (this.entity.liquidContainer.pour(x, y)) {
                game.console.event(CONSOLE_EVENT_SHATTER, {
                    target: this.entity,
                    liquid: this.entity.liquidContainer.contents
                });
            };
        } else {
            game.console.event(CONSOLE_EVENT_SHATTER, {
                target: this.entity,
            });
        }

        this.entity.add(IsDestroying);
    }

    onCollideGround(evt) {
        this.shatter(evt.data.x, evt.data.y);
    }

    onCollide(evt) {
        this.shatter(evt.data.x, evt.data.y);
    }
}
