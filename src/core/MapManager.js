import { Map as MapGenerator } from 'rot-js';
import Manager from './Manager';
import { BoredGoalType } from '../ai/GoalTypes';
import { Position } from '../ecs/components';

export default class MapManager extends Manager {
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
        const w = 24;
        const h = 24;
        const generator = new MapGenerator.Uniform(w, h, {
            timeLimit: 8000,
            roomWidth: [3, 6],
            roomHeight: [3, 6],
            roomDugPercentage: 0.8,
        });

        generator.create((x, y, v) => {
            if (v !== 1) {
                return;
            }

            this.game.ecs.createPrefab('Wall', {
                position: {
                    x,
                    y,
                },
            });
        })

        for (let i = 0; i < 3; i++) {
            const wanderer = this.game.ecs.createPrefab('HumanWanderer', {
                moniker: {
                    name: `Wanderer ${i}`,
                },
                position: {
                    x: 4 + i,
                    y: 16,
                },
            });

            wanderer.brain.pushGoal(BoredGoalType.create());
        }

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 6; j++) {
                const type = (j + i) % 2 === 0 ? 'SmallPineTree' : 'PineTree';

                this.game.ecs.createPrefab(type, {
                    position: {
                        x: 10 + i,
                        y: 5 + j,
                    },
                });
            }
        }
    }
}
