import { Component } from 'geotic';

export class Fire extends Component {
    extinguish() {
        this.destroy();
    }

    onTryExtinguish(evt) {
        this.extinguish();
    }

    onGetInteractions(evt) {
        evt.data.interactions.push({
            name: 'Extinguish',
            evt: 'try-extinguish',
        });
    }
}
