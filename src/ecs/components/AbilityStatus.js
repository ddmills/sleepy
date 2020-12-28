import { Component } from 'geotic';

export class AbilityStatus extends Component {
    static allowMultiple = true;
    static keyProperty = 'key';
    static properties = {
        key: 'ABILITY_SPRINT',
        target: '<Entity>',
        isCoolingDown: false,
        isToggled: true,
        duration: 10000,
    };
};
