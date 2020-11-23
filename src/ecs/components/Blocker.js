import { Component } from 'geotic';

export class Blocker extends Component {
    onProjectileHit(evt) {
        // https://github.com/ddmills/geotic/issues/22
        if (!this.isAttached) {
            return;
        }

        evt.data.stopProjectile = true;
        evt.data.deflectProjectile = true;
    }
}
