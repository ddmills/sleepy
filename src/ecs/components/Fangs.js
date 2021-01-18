import { Component } from 'geotic';
import { game } from '../../core/Game';
import { getWeaponType, WPN_TYPE_FANGS } from '../../data/WeaponTypes';

export class Fangs extends Component {
    onTryMelee(evt) {
        const targetPos = evt.data.target.position.getPos();
        const selfPos = this.entity.position.getPos();
        const isAdjacent = game.map.isAdjacent(
            selfPos.x,
            selfPos.y,
            targetPos.x,
            targetPos.y
        );

        if (!isAdjacent) {
            return;
        }

        const weaponType = getWeaponType(WPN_TYPE_FANGS);

        weaponType.attack(this.entity, evt.data.target);

        this.entity.fireEvent('energy-consumed', 600);

        evt.handle();
    }
}
