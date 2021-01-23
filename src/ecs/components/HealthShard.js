import { Component } from 'geotic';
import { SHARD_VAL_LARGE, SHARD_VAL_MEDIUM } from './HealthShardDropper';

export class HealthShard extends Component {
    static properties = {
        value: 1,
    };

    get healValue() {
        return this.value;
    }

    onSpawned() {
        const name = this.entity.moniker.name;

        if (this.value >= SHARD_VAL_LARGE) {
            this.entity.glyph.ch = '♦';
            this.entity.moniker.name = `Large ${name}`;
        } else if (this.value >= SHARD_VAL_MEDIUM) {
            this.entity.glyph.ch = '♥';
            this.entity.moniker.name = `Medium ${name}`;
        } else {
            this.entity.glyph.ch = '☻';
            this.entity.moniker.name = `Small ${name}`;
        }
    }
}
