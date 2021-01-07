import Screen from './Screen';
import { INPUT_DOMAIN_ADVENTURE } from '../../input/InputDomainType';

export default class WaitScreen extends Screen {
    time = 1000;
    curTime = 0;

    onEnter(ctx) {
        this.time = ctx.time || 1000;
        this.curTime = 0;
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
    }

    onUpdate(dt) {
        this.curTime += dt;

        if (this.curTime >= this.time) {
            this.game.screens.popScreen();
            return;
        }

        this.handleInput();
    }
}
