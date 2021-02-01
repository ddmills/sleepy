import { Component } from 'geotic';
import * as GoalEvaluator from '../../ai/GoalEvaluator';

export class Goal extends Component {
    static properties = {
        name: 'Bored',
        originalIntentId: 0,
        parentId: 0,
        targetId: 0,
        complete: false,
        data: {},
    };

    get originalIntent() {
        return getEntityRef(this, 'originalIntentId');
    }

    set originalIntent(value) {
        setEntityRef(this, 'originalIntentId', value);
    }

    get parent() {
        return getEntityRef(this, 'parentId');
    }

    set parent(value) {
        setEntityRef(this, 'parentId', value);
    }

    get target() {
        return getEntityRef(this, 'targetId');
    }

    set target(value) {
        setEntityRef(this, 'targetId', value);
    }

    isFinished() {
        return GoalEvaluator.isFinished(this.parent, this);
    }

    takeAction() {
        return GoalEvaluator.takeAction(this.parent, this);
    }
}
