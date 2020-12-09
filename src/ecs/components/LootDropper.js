import { Component } from 'geotic';
import { spawnLoot } from '../../data/tables/LootSpawn';

export class LootDropper extends Component {
    static properties = {
        tables: [],
    };

    onDeath(evt) {
        const pos = this.entity.position.getPos();

        spawnLoot(this.tables, pos.x, pos.y);
    }
}
