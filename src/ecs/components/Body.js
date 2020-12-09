import { Component } from 'geotic';
import { SPWN_CORPSE } from '../../data/Spawnables';
import { spawn } from '../../data/Spawner';

export class Body extends Component {
    static properties = {
        corpseSpawnable: SPWN_CORPSE,
    };

    onDeath(evt) {
        if (!this.entity.has('Position')) {
            return;
        }

        const pos = this.entity.position.getPos();
        const corpse = spawn(this.corpseSpawnable, pos.x, pos.y);

        if (this.entity.has('Moniker')) {
            corpse.moniker.name = `${this.entity.moniker.name} corpse`;
        }
    }

    onProjectileHit(evt) {
        evt.data.stopProjectile = true;
    }
}
