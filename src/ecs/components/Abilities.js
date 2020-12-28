import { Component } from 'geotic';

export class Abilities extends Component {
    static properties = {
        known: [],
        state: {},
    };

    onQueryAbilities(evt) {
        evt.data.abilities.push(...this.known);
    }
}
