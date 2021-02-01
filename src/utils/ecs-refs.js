export const getEntityRef = (entity, idProp) => {
    const id = entity[idProp];

    if (!id) {
        return;
    }

    const targetEntity = entity.world.getEntity(id);

    if (!targetEntity) {
        entity[idProp] = undefined;
    }

    return;
}

export const setEntityRef = (entity, idProp, value) => {
    let id = value;

    if (!(value instanceof String)) {
        id = value.id;
    }

    entity[idProp] = id;
}

export const getEntityArrayRef = (entity, idArrayProp) => {
    const ids = entity[idArrayProp];
    const newIds = [];
    const entities = [];

    for (const id of ids) {
        const targetEntity = entity.world.getEntity(id);

        if (!targetEntity) {
            entity[idProp] = undefined;
        } else {
            newIds.push(id);
            entities.push(targetEntity);
        }
    }

    entity[idArrayProp] = newIds;

    return entities;
}
