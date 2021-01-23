import { SCREEN_ADVENTURE } from '../ScreenType';
import Screen from './Screen';

export default class LoadAreaScreen extends Screen {
    #prevousArea;
    #nextArea;

    onEnter(ctx) {
        this.#prevousArea = ctx.prevousArea;
        this.#nextArea = ctx.nextArea;

        this.renderLoadingText();

        if (ctx.prevousArea) {
            const data = this.game.state.saveGame();

            data.world.areaId = ctx.nextArea.id;
            data.map.playerPosition = ctx.entry;

            this.game.state.loadGameData(data);

            return;
        }

        this.game.world.onAreaLoaded(ctx.nextArea, ctx.entry);
        this.game.map.onAreaLoaded(ctx.nextArea, ctx.entry);
        this.game.music.onAreaLoaded(ctx.nextArea, ctx.entry);
        this.game.temperature.onAreaLoaded(ctx.nextArea, ctx.entry);

        this.game.screens.setScreen(SCREEN_ADVENTURE);
    }

    renderLoadingText() {
        this.game.renderer.clear();
        if (this.#prevousArea) {
            const prevText = `You are leaving area ${this.#prevousArea.id}`;
            this.game.renderer.drawTextCenter(11, prevText, '#ce5454');
        } else {
            const nextText = `You are entering area ${this.#nextArea.id}`;
            this.game.renderer.drawTextCenter(11, nextText, '#ce5454');
        }
    }

    onUpdate(dt) {
        this.renderLoadingText();
    }
}
