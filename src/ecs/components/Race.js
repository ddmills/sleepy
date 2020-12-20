import { Component } from 'geotic';
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

    get strengthMod() {
        return this.data().modStrength;
    }

    get finesseMod() {
        return this.data().modFinesse;
    }

    get athleticismMod() {
        return this.data().modAthleticism;
    }

    get trickeryMod() {
        return this.data().modTrickery;
    }

    onQueryStatModifierStrength(evt) {
        const mod = this.strengthMod;

        if (mod !== 0) {
            evt.data.modifiers.push({
                source: this.name,
                mod,
            });
        }
    }

    onQueryStatModifierFinesse(evt) {
        const mod = this.finesseMod;

        if (mod !== 0) {
            evt.data.modifiers.push({
                source: this.name,
                mod,
            });
        }
    }

    onQueryStatModifierAthleticism(evt) {
        const mod = this.athleticismMod;

        if (mod !== 0) {
            evt.data.modifiers.push({
                source: this.name,
                mod,
            });
        }
    }

    onQueryStatModifierTrickery(evt) {
        const mod = this.trickeryMod;

        if (mod !== 0) {
            evt.data.modifiers.push({
                source: this.name,
                mod,
            });
        }
    }

    onQueryAbilityModifierSpeed(evt) {
        evt.data.modifiers.push({
            source: this.name,
            mod: this.speed,
        });
    }
}
