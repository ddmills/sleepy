import { Component } from 'geotic';

export class Body extends Component {
    onDeath(evt) {
        if (!this.entity.has('Position')) {
            return;
        }

        const corpse = this.ecs.createPrefab('Corpse');
        const pos = this.entity.position.getPos();

        if (this.entity.has('Moniker')) {
            corpse.moniker.name = `${this.entity.moniker.name} corpse`;
        }

        corpse.position.setPos(pos.x, pos.y);
    }

    onProjectileHit(evt) {
        evt.data.stopProjectile = true;
    }
}
