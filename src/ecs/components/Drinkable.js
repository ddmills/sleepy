import { Component } from 'geotic';

export class Drinkable extends Component {
    onGetInteractions(evt) {
        evt.data.interactions.push({
            name: 'Drink',
            evt: 'try-drink',
        });
    }
}
