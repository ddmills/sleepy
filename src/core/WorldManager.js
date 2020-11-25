import WorldData from '../data/WorldData';
import { IsPlayer } from '../ecs/components';
import Manager from './Manager';
import { SCREEN_LOAD_SECTOR } from './screens/ScreenType';

export class WorldManager extends Manager {
    #data;
    #sectorId;
    #entry;

    get sectorId() {
        return this.#sectorId;
    }

    get sector() {
        return this.#data.getSector(this.#sectorId);
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
            sectorId: this.#data.getStartingSector().id,
            exploredSectorIds: [],
        };
    }

    getSaveGameData() {
        // TODO only save sector data??
        // const data = Array.from(this.game.ecs.entities.all).filter((e) => e.has(IsPlayer));
        // this.game.state.saveSectorEntityData(this.sector.id, this.game.ecs.serialize(data));

        this.game.state.saveSectorEntityData(this.sector.id, this.game.ecs.serialize());

        return {
            sectorId: this.sector.id,
            exploredSectorIds: []
        };
    }

    setup(data) {
        const sector = this.#data.getSector(data.sectorId);

        this.game.screens.setScreen(SCREEN_LOAD_SECTOR, {
            nextSector: sector,
            entry: data.position
        });
    }

    teardown() {
        // TODO: destroy all sector entities?
        this.#sectorId = null;
    }

    onSectorLoaded(sector, entry) {
        this.#sectorId = sector.id;

        const data = this.game.state.loadSectorEntityData(sector.id);

        if (data) {
            console.log('loading sector...', data);
            this.game.ecs.deserialize(data);
        } else {
            console.log('generating sector...');
            sector.generate(this.game);
        }
    }

    enterSector(sector, entry) {
        this.game.screens.setScreen(SCREEN_LOAD_SECTOR, {
            prevousSector: this.sector,
            nextSector: sector,
            entry
        });
    }
}
