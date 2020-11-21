import { Component } from 'geotic';

export class Loot extends Component {
    onGetInteractions(evt) {
        evt.data.interactions.push({
            name: 'Drop',
            evt: 'try-drop'
        });
    }
}
