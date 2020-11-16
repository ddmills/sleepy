import { Map as MapGenerator } from 'rot-js';
import Manager from './Manager';
import FastMap from '../utils/FastMap';
import { BoredGoalType } from '../ai/GoalTypes';
import { Position } from '../ecs/components';

export default class MapManager extends Manager {
    #lookup;
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

        this.#lookup = new FastMap(this.width, this.height);

        this.query.onEntityAdded((e) => {
            this.#lookup.set(0, 0, e.id);
        });

        this.query.onEntityRemoved((e) => {
            this.#lookup.remove(e.id);
        });
    }

    onNewGame() {
        this.#lookup.clear();
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
            const entity = this.game.ecs.createPrefab(type);

            entity.position.setPos(x, y);
        });

        for (let i = 0; i < 5; i++) {
            const position = this.getRandomEmptyPosition();
            const wanderer = this.game.ecs.createPrefab('HumanWanderer', {
                moniker: {
                    name: `Wanderer ${i}`,
                }
            });
            wanderer.position.setPos(position.x, position.y);
            wanderer.brain.pushGoal(BoredGoalType.create());
        }
    }

    onSaveGame() {
        return {
            map: {
                lookup: this.#lookup.serialize()
            }
        };
    }

    onLoadGame(data) {
        this.#lookup.deserialize(data.map.lookup);
    }

    getPosition(entityId) {
        return this.#lookup.getPosition(entityId)
    }

    setPosition(x, y, entityId) {
        this.#lookup.set(x, y, entityId);
    }

    getEntityIdsAt(x, y) {
        return this.#lookup.get(x, y);
    }

    getEntitiesAt(x, y) {
        return this.getEntityIdsAt(x, y).map((id) => this.game.ecs.getEntity(id));
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
