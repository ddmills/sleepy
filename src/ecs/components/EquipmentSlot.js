import { Component } from 'geotic';
import { EQ_SLOT_BODY } from '../../data/EquipmentSlotType';

export class EquipmentSlot extends Component {
    static allowMultiple = true;
    static keyProperty = 'key';
    static properties = {
        name: 'Body',
        key: 'body',
        slotType: EQ_SLOT_BODY,
        contents: '<Entity>',
    };
}
