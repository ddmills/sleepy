import { avgArray } from '../utils/ArrayUtil';
import { lerp } from '../utils/LerpUtil';
import MemoryGrid from '../utils/MemoryGrid';
import System from './System';

export default class TemperatureSystem extends System {
    data;

    get width() {
        return this.game.map.width;
    }

    get height() {
        return this.game.map.height;
    }

    constructor(game) {
        super(game);

        this.grid = new MemoryGrid(this.width, this.height);
    }

    teardown() {
        this.grid.clear();
    }

    getAmbientTemperature() {
        return this.game.world.sector.temperature.ambient;
    }

    getAmbientCapacity() {
        return this.game.world.sector.temperature.capacity;
    }

    getSaveGameData() {
        const data = this.grid.serialize();

        this.game.state.saveSectorTemperatureData(
            this.game.world.sectorId,
            data
        );
    }

    onSectorLoaded(sector) {
        const data = this.game.state.loadSectorTemperatureData(sector.id);

        if (data) {
            this.grid.deserialize(data);
        } else {
            this.grid.defaultValueGenerator = () => sector.temperature.ambient;
            this.grid.previous.defaultValueGenerator = () =>
                sector.temperature.ambient;
            this.grid.setAll(sector.temperature.ambient);
        }
    }

    setTemperature(x, y, value) {
        this.grid.set(x, y, value);
    }

    getTemperature(x, y) {
        return this.grid.get(x, y);
    }

    getCapacity(x, y) {
        let hasCap = false;
        let hasFire = false;

        const capacity = this.game.map.getEntitiesAt(x, y).reduce((cap, e) => {
            if (e.fire) {
                hasFire = true;
                return 0;
            }
            if (e.thermalCapacity) {
                hasCap = true;

                return cap + e.thermalCapacity.value;
            }

            return cap;
        }, 0);

        if (hasFire) {
            return 0;
        }

        if (hasCap) {
            return capacity;
        }

        return this.getAmbientCapacity();
    }

    update(dt) {
        if (!this.game.clock.tickDelta) {
            return;
        }

        this.grid.copyToPrevious();

        const ambient = this.getAmbientTemperature();

        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                const previous = this.grid.previous.get(x, y);
                const cells = this.grid.previous.getNeighbors(x, y);

                cells.push(ambient);
                cells.push(previous);

                const avg = avgArray(cells);

                if (Math.abs(previous - avg) < 0.01) {
                    continue;
                }

                const capacity = this.getCapacity(x, y);
                const t = lerp(previous, avg, capacity);

                this.grid.set(x, y, t);
            }
        }
    }
}
