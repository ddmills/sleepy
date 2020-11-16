import Manager from './Manager';

export default class GameStateManager extends Manager {
    newGame() {
        console.log('NEW GAME');
        this.game.clock.onNewGame();
        this.game.engine.onNewGame();
        this.game.map.onNewGame();
        this.game.player.onNewGame();
    }

    saveGame() {
        const data = {
            ...this.game.clock.onSaveGame(),
            ...this.game.player.onSaveGame(),
            ...this.game.engine.onSaveGame(),
            ...this.game.map.onSaveGame(),
        };

        console.log('SAVE GAME', data);
        localStorage.setItem('save', JSON.stringify(data));
    }

    loadGame() {
        const data = JSON.parse(localStorage.getItem('save'));

        console.log('LOAD GAME', data);

        this.game.clock.onLoadGame(data);
        this.game.engine.onLoadGame(data);
        this.game.map.onLoadGame(data);
        this.game.player.onLoadGame(data);
        this.game.screens.onLoadGame(data);
    }
}
