import Manager from './Manager';

export default class GameStateManager extends Manager {
    newGame() {
        console.log('NEW GAME');
        this.game.clock.onNewGame();
        this.game.engine.onNewGame();
        this.game.playerManager.onNewGame();
    }

    saveGame() {
        const data = {
            ...this.game.clock.onSaveGame(),
            ...this.game.playerManager.onSaveGame(),
            ...this.game.engine.onSaveGame(),
        };

        console.log('SAVE GAME', data);
        localStorage.setItem('save', JSON.stringify(data));
    }

    loadGame() {
        const data = JSON.parse(localStorage.getItem('save'));

        console.log('LOAD GAME', data);

        this.game.clock.onLoadGame(data);
        this.game.engine.onLoadGame(data);
        this.game.playerManager.onLoadGame(data);
        this.game.screenManager.onLoadGame(data);
    }
}
