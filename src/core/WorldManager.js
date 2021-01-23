import WorldData from '../data/WorldData';
import { IsPlayer } from '../ecs/components';
import Manager from './Manager';
import { SCREEN_LOAD_AREA } from './screens/ScreenType';

export class WorldManager extends Manager {
    #data;
    #areaId;
    #entry;

    get areaId() {
        return this.#areaId;
    }

    get area() {
        return this.#data.getArea(this.#areaId);
    }

    get entry() {
        return this.#entry;
    }

    constructor(game) {
        super(game);

        this.#data = new WorldData();
    }

    getSetupData() {
        return {
            areaId: this.#data.getStartingArea().id,
            exploredAreaIds: [],
        };
    }

    getSaveGameData() {
        // TODO only save area data??
        const data = Array.from(this.game.ecs.entities.all).filter(
            (e) => !e.has(IsPlayer)
        );
        const serialized = this.game.ecs.serialize(data);

        console.log('serialized map data', serialized);

        this.game.state.saveAreaEntityData(this.area.id, serialized);

        return {
            areaId: this.area.id,
            exploredAreaIds: [],
        };
    }

    setup(data) {
        const area = this.#data.getArea(data.areaId);

        this.game.screens.setScreen(SCREEN_LOAD_AREA, {
            nextArea: area,
            entry: data.position,
        });
    }

    teardown() {
        // TODO: destroy all area entities?
        this.#areaId = null;
    }

    onAreaLoaded(area, entry) {
        this.#areaId = area.id;

        const data = this.game.state.loadAreaEntityData(area.id);

        if (data) {
            this.game.ecs.deserialize(data);
        } else {
            area.generate(this.game);
        }
    }

    enterArea(area, entry) {
        this.game.screens.setScreen(SCREEN_LOAD_AREA, {
            prevousArea: this.area,
            nextArea: area,
            entry,
        });
    }
}
