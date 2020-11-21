import { Component } from 'geotic';
import { Moniker } from './Moniker';

export class Logger extends Component {
    get moniker() {
        return this.entity.has(Moniker) ? this.entity.moniker.display : 'Unknown';
    }

    onLog(evt) {
        console.log(`[${this.moniker}]`, evt.data);
        evt.handle();
    }
}
