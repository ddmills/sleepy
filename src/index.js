import keycodes from './enums/keycodes';


const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let actorId = 1;


const createActor = () => ({
    id: ++actorId,
    energy: getRandomInt(-5, 5)
});

const actors = [
    createActor(),
    createActor(),
    createActor(),
];


let tick = 0;

const updateTick = (v) => {
    tick = v
    document.getElementById('tick').innerText = v;
};

updateTick(tick);

const getDesiredAction = (actor) => {
    const cost = getRandomInt(5, 10);

    return {
        cost,
        perform: () => {
            console.log(`Actor ${actor.id} performs action of cost ${cost}`);
        }
    }
};


const doTick = () => {
    for (let actor of actors) {
        actor.energy++;

        if (actor.energy >= 0) {
            const action = getDesiredAction(actor) // if player, wait for input(?)

            actor.energy -= action.cost
            action.perform()
        }
    }
    updateTick(tick + 1);
}

document.addEventListener('keydown', (e) => {
    if (keycodes[e.keyCode] == 'space') {
        doTick(tick + 1);
    }
});


setInterval(() => {
    doTick();
}, 1000);
