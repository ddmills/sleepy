import { Component } from 'geotic';
import { game } from '../../core/Game';
import { SPWN_GLASS_SHARD } from '../../data/Spawnables';
import { spawn } from '../../data/Spawner';
import { CONSOLE_EVENT_SHATTER } from '../../enums/ConsoleEvents';
import { IsDestroying } from './IsDestroying';
import { LiquidContainer } from './LiquidContainer';

export class FragileGlass extends Component {
    shatter(x, y) {
        spawn(SPWN_GLASS_SHARD, x, y, {
            stackable: {
                quantity: 3,
            },
        });

        if (this.entity.has(LiquidContainer)) {
            if (this.entity.liquidContainer.pour(x, y)) {
                game.console.event(CONSOLE_EVENT_SHATTER, {
                    target: this.entity,
                    liquid: this.entity.liquidContainer.content,
                });
            }
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
