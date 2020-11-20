import { Faction } from '../ecs/components';
import Manager from './Manager';

export default class FactionManager extends Manager {
    isHostile(factionA, factionB) {
        return factionA !== factionB;
    }

    areEntitiesHostile(entityA, entityB) {
        const factionA = entityA.get(Faction);
        const factionB = entityB.get(Faction);

        if (factionA && factionB) {
            return this.isHostile(factionA.name, factionB.name);
        }

        return false;
    }
}
