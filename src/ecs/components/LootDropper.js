import { Component } from 'geotic';
import { SPWN_VIAL_BLOOD } from '../../data/Spawnables';
import { spawn } from '../../data/Spawner';

export class LootDropper extends Component {
    onDeath(evt) {
        const pos = this.entity.position.getPos();

        spawn(SPWN_VIAL_BLOOD, pos.x, pos.y);
    }
}
