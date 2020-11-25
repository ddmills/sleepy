import { SCREEN_ADVENTURE } from '../ScreenType';
import Screen from './Screen';

export default class LoadSectorScreen extends Screen {
    #prevousSector;
    #nextSector;

    onEnter(ctx) {
        this.game.commands.disable();

        this.#prevousSector = ctx.prevousSector;
        this.#nextSector = ctx.nextSector

        this.renderLoadingText();

        setTimeout(() => {
            if (this.#prevousSector) {
                this.game.player.onSectorUnload(this.#prevousSector);
                this.game.map.onSectorUnload(this.#prevousSector);
                this.game.engine.onSectorUnload(this.#prevousSector);
            }

            this.game.engine.onSectorLoaded(this.#nextSector, ctx.entry);
            this.game.map.onSectorLoaded(this.#nextSector, ctx.entry);
            this.game.player.onSectorLoaded(this.#nextSector, ctx.entry);

            this.game.screens.setScreen(SCREEN_ADVENTURE);
        }, 1000);
    }

    onLeave() {
        this.game.commands.enable();
    }

    renderLoadingText() {
        this.game.renderer.clear();
        if (this.#prevousSector) {
            const prevText = `You are leaving sector ${this.#prevousSector.id}`;
            this.game.renderer.drawTextCenter(10, prevText, '#ce5454');
            const nextText = `and entering sector ${this.#nextSector.id}`;
            this.game.renderer.drawTextCenter(11, nextText, '#ce5454');
        } else {
            const nextText = `You are entering sector ${this.#nextSector.id}`;
            this.game.renderer.drawTextCenter(11, nextText, '#ce5454');
        }
    }

    onUpdate(dt) {
        this.renderLoadingText();
    }
}
