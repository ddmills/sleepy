import Screen from './Screen';
import { INPUT_DOMAIN_ADVENTURE } from '../../input/InputDomainType';
import { INPUT_CMD_CANCEL, INPUT_CMD_WAIT } from '../../input/InputCommandType';
import { getChanneling } from '../../../data/Abilities';
import { allDirections, directionDelta } from '../../../enums/Directions';

export default class ChannelScreen extends Screen {
    onEnter(ctx) {
        this.entity = ctx.entity;
        this.channel = getChanneling(this.entity);
        this.game.commands.pushDomain(INPUT_DOMAIN_ADVENTURE);
    }

    onLeave() {
        this.game.commands.popDomain(INPUT_DOMAIN_ADVENTURE);
    }

    handleInput() {
        const cmd = this.game.commands.getNextCommand();

        if (!cmd) {
            return;
        }

        if (cmd.type === INPUT_CMD_WAIT) {
            this.channel.ability.channel(200, this.channel);
        }

        if (cmd.type === INPUT_CMD_CANCEL) {
            this.channel.ability.cancelChannel(this.channel);
        }
    }

    renderChanneling() {
        const percent = this.channel.currentChannelDuration / this.channel.channelDuration;
        const maxLength = 16;
        const length = Math.ceil(percent * maxLength * 2) / 2;
        const center = Math.floor(this.game.camera.width / 2) - (maxLength / 2);
        const bottom = this.game.camera.height - 6;

        const fract = `(${(Math.floor(this.channel.currentChannelDuration / 100) / 10).toFixed(1)}/${Math.ceil(this.channel.channelDuration/ 100) / 10})`;
        this.game.renderer.drawTextCenter(bottom, `Channeling ${this.channel.ability.name} ${fract}`);
        this.game.renderer.drawTextCenter(bottom + 2, 'press [S] to channel or [ESC] to cancel', '#53575b');


        for (let i = 0; i < maxLength; i++) {
            const diff = length - i;

            if (diff == .5) {
                this.game.renderer.drawUI(center + i, bottom - 1, ' ', '#3c5b76', '#2f3438');
            } else if (diff > 0) {
                this.game.renderer.drawUI(center + i, bottom - 1, '►', '#3c5b76');
            } else {
                this.game.renderer.drawUI(center + i, bottom - 1, '►', '#2f3438');
            }
        }
    }

    onUpdate(dt) {
        this.handleInput();

        this.game.updateAdventureSystems(dt);
        this.renderChanneling();

        if (!this.channel.isChanneling) {
            this.game.screens.popScreen();
        }
    }
}
