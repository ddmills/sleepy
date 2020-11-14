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
