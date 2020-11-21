import { Component } from 'geotic';

export class IsInventoried extends Component {
    static properties = {
        owner: '<Entity>',
    };

    onTryDrop(evt) {
        this.owner.inventory.dropLoot(this.entity);

        evt.handle();
    }
}
