import { Component } from 'geotic';
import { SKILL_SPEED } from '../../data/Skills';
import { getRaceData, RACE_HUMAN } from '../../data/Races';

export class Race extends Component {
    static properties = {
        key: RACE_HUMAN,
    };

    data() {
        return getRaceData(this.key);
    }

    get name() {
        return this.data().name;
    }

    get speed() {
        return this.data().speed;
    }

    getModifier(stat) {
        return this.data()[stat];
    }

    onQueryStatMod(evt) {
        const mod = this.getModifier(evt.data.stat);

        if (mod !== 0) {
            evt.data.modifiers.push({
                source: this.name,
                mod,
            });
        }
    }

    onQuerySkillMod(evt) {
        if (evt.data.skill === SKILL_SPEED) {
            const mod = this.speed;

            evt.data.modifiers.push({
                source: this.name,
                mod,
            });
        }
    }
}
