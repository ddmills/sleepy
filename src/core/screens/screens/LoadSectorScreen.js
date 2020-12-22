import { SCREEN_ADVENTURE } from '../ScreenType';
import Screen from './Screen';

export default class LoadSectorScreen extends Screen {
    #prevousSector;
    #nextSector;

    onEnter(ctx) {
        this.#prevousSector = ctx.prevousSector;
        this.#nextSector = ctx.nextSector;

        this.renderLoadingText();

        if (ctx.prevousSector) {
            const data = this.game.state.saveGame();

            data.world.sectorId = ctx.nextSector.id;
            data.map.playerPosition = ctx.entry;

            this.game.state.loadGameData(data);

            return;
        }

        this.game.world.onSectorLoaded(ctx.nextSector, ctx.entry);
        this.game.map.onSectorLoaded(ctx.nextSector, ctx.entry);
        this.game.music.onSectorLoaded(ctx.nextSector, ctx.entry);

        this.game.screens.setScreen(SCREEN_ADVENTURE);
    }

    renderLoadingText() {
        this.game.renderer.clear();
        if (this.#prevousSector) {
            const prevText = `You are leaving sector ${this.#prevousSector.id}`;
            this.game.renderer.drawTextCenter(11, prevText, '#ce5454');
        } else {
            const nextText = `You are entering sector ${this.#nextSector.id}`;
            this.game.renderer.drawTextCenter(11, nextText, '#ce5454');
        }
    }

    onUpdate(dt) {
        this.renderLoadingText();
    }
}
