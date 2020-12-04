import { Component } from 'geotic';
import { getFactionByName } from '../../enums/Factions';

export class FactionMember extends Component {
    static properties = {
        name: 'Neutral',
    };

    get faction() {
        return getFactionByName(this.name);
    }
}
