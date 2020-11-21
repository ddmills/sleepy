import { Map as MapGenerator } from 'rot-js';
import Manager from './Manager';
import FastMap from '../utils/FastMap';
import { BoredGoalType } from '../ai/GoalTypes';
import { IsInventoried, Position } from '../ecs/components';
import { LIQUID_BLOOD, LIQUID_HONEY, LIQUID_WATER } from '../enums/LiquidTypes';

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
            roomWidth: [2, 5],
            roomHeight: [2, 5],
            roomDugPercentage: 0.9,
        });

        generator.create((x, y, v) => {
            if (v !== 1) {
                return;
            }

            const type = Math.random() < 0.5 ? 'PineTree' : 'SmallPineTree';
            const entity = this.game.ecs.createPrefab(type);

            entity.position.setPos(x, y);
        });

        for (let i = 0; i < 3; i++) {
            const position = this.getRandomEmptyPosition();
            const chest = this.game.ecs.createPrefab('Chest');

            const vial = this.game.ecs.createPrefab('Vial');
            vial.liquidContainer.contents = LIQUID_HONEY;

            chest.position.setPos(position.x, position.y);
            chest.inventory.addLoot(vial);
        }

        for (let i = 0; i < 3; i++) {
            const position = this.getRandomEmptyPosition();
            const vial = this.game.ecs.createPrefab('Vial');

            vial.liquidContainer.contents = LIQUID_BLOOD;
            vial.position.setPos(position.x, position.y);
        }

        for (let i = 0; i < 3; i++) {
            const position = this.getRandomEmptyPosition();
            const vial = this.game.ecs.createPrefab('Vial');

            vial.liquidContainer.contents = LIQUID_WATER;
            vial.position.setPos(position.x, position.y);
        }

        for (let i = 0; i < 3; i++) {
            const position = this.getRandomEmptyPosition();
            const vial = this.game.ecs.createPrefab('Vial');

            vial.liquidContainer.contents = LIQUID_HONEY;
            vial.position.setPos(position.x, position.y);
        }

        for (let i = 0; i < 4; i++) {
            const position = this.getRandomEmptyPosition();
            const wanderer = this.game.ecs.createPrefab('HumanWanderer');

            wanderer.position.setPos(position.x, position.y);
            wanderer.brain.pushGoal(BoredGoalType.create());
        }

        for (let i = 0; i < 8; i++) {
            const position = this.getRandomEmptyPosition();
            const goblin = this.game.ecs.createPrefab('Goblin');

            goblin.position.setPos(position.x, position.y);
            goblin.brain.pushGoal(BoredGoalType.create());
        }
    }

    onSaveGame() {
        return {
            map: {
                lookup: this.#lookup.serialize(),
            },
        };
    }

    onLoadGame(data) {
        this.#lookup.deserialize(data.map.lookup);
    }

    getPosition(entityId) {
        return this.#lookup.getPosition(entityId);
    }

    setPosition(x, y, entityId) {
        this.#lookup.set(x, y, entityId);
    }

    getEntitiesAt(x, y) {
        return this.#lookup
            .get(x, y)
            .map((id) => this.game.ecs.getEntity(id))
            .filter((e) => !e.has(IsInventoried));
    }

    isAdjacent(x1, y1, x2, y2) {
        return Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1;
    }

    getNeighborEntities(x, y) {
        return [
            this.getEntitiesAt(x - 1, y - 1), // TOP LEFT
            this.getEntitiesAt(x, y - 1), // TOP
            this.getEntitiesAt(x + 1, y - 1), // TOP RIGHT
            this.getEntitiesAt(x - 1, y), // LEFT
            this.getEntitiesAt(x + 1, y), // RIGHT
            this.getEntitiesAt(x - 1, y + 1), // BOTTOM LEFT
            this.getEntitiesAt(x, y + 1), // BOTTOM
            this.getEntitiesAt(x + 1, y + 1), // BOTTOM RIGHT
        ];
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
