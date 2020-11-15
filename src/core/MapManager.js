import { Map as MapGenerator } from 'rot-js';
import Manager from './Manager';
import { BoredGoalType } from '../ai/GoalTypes';
import { Position } from '../ecs/components';

export default class MapManager extends Manager {
    #width = 24;
    #height = 24;

    get width() {
        return this.#width;
    }

    get height() {
        return this.#height;
    }


    constructor(game) {
        super(game);

        this.query = this.game.ecs.createQuery({
            all: [Position],
        });
    }

    getEntitiesAt(x, y) {
        return Array.from(this.query.get()).filter((entity) =>
            entity.position.equals(x, y)
        );
    }

    onNewGame() {
        const generator = new MapGenerator.Uniform(this.width, this.height, {
            timeLimit: 8000,
            roomWidth: [3, 6],
            roomHeight: [3, 6],
            roomDugPercentage: 0.8,
        });

        generator.create((x, y, v) => {
            if (v !== 1) {
                return;
            }

            const type = Math.random() < .5 ? 'PineTree' : 'SmallPineTree';

            this.game.ecs.createPrefab(type, {
                position: {
                    x,
                    y,
                },
            });
        });

        for (let i = 0; i < 3; i++) {
            const position = this.getRandomEmptyPosition();
            const wanderer = this.game.ecs.createPrefab('HumanWanderer', {
                moniker: {
                    name: `Wanderer ${i}`,
                },
                position,
            });

            wanderer.brain.pushGoal(BoredGoalType.create());
        }
    }

    getRandomEmptyPosition() {
        let x, y;
        do {
            x = Math.trunc(Math.random() * this.width);
            y = Math.trunc(Math.random() * this.height);
        } while (this.getEntitiesAt(x, y).length > 0);

        return { x, y };
    }
}
