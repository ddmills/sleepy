import { diagonalDistance } from './diagonalDistance';
import { manhattanDistance } from './ManhattanDistance';
import PriorityQueue from './PriorityQueue';

const getNeighbors = (x, y, allowDiagonals = true) => {
    const neighbors = [
        {
            x: x,
            y: y - 1,
        },
        {
            x: x - 1,
            y: y,
        },
        {
            x: x + 1,
            y: y,
        },
        {
            x: x,
            y: y + 1,
        },
    ];

    if (allowDiagonals) {
        neighbors.push(
            {
                x: x - 1,
                y: y - 1,
            },
            {
                x: x + 1,
                y: y - 1,
            },
            {
                x: x - 1,
                y: y + 1,
            },
            {
                x: x + 1,
                y: y + 1,
            }
        );
    }

    return neighbors;
};

const key = (pos) => `${pos.x},${pos.y}`;

const defaultSettings = {
    start: {},
    goal: {},
    cost: () => {},
    allowDiagonals: true,
};

export const computeAStar = (settings = defaultSettings) => {
    const heuristic = settings.allowDiagonals
        ? diagonalDistance
        : manhattanDistance;
    const start = settings.start;
    const goal = settings.goal;
    const cost = settings.cost;

    const open = new PriorityQueue();
    const cameFrom = {};
    const costSoFar = {};
    const startKey = key(start);
    const goalKey = key(goal);

    const result = {
        success: false,
        path: [],
        costs: [],
        cost: Infinity,
        start,
        goal,
    };

    if (cost(start, goal) === Infinity) {
        return result;
    }

    open.put(
        {
            key: startKey,
            pos: start,
        },
        0
    );

    costSoFar[startKey] = 0;

    while (!open.isEmpty()) {
        const { key: currentKey, pos: current } = open.pop();

        if (currentKey === goalKey) {
            result.success = true;
            break;
        }

        const neighbors = getNeighbors(
            current.x,
            current.y,
            settings.allowDiagonals
        );

        for (let next of neighbors) {
            const nextKey = key(next);
            const graphCost = nextKey === goalKey ? 0 : cost(current, next);

            if (graphCost === Infinity) {
                continue;
            }

            const newCost = costSoFar[currentKey] + graphCost;

            if (!(nextKey in costSoFar) || newCost < costSoFar[nextKey]) {
                costSoFar[nextKey] = newCost;

                const priority = newCost + heuristic(next, goal);

                open.put(
                    {
                        key: nextKey,
                        pos: next,
                    },
                    priority
                );

                cameFrom[nextKey] = current;
            }
        }
    }

    if (!result.success) {
        return result;
    }

    result.path = [goal];
    result.cost = costSoFar[goalKey];
    result.costs = [costSoFar[goalKey]];

    let previous = cameFrom[key(goal)];

    while (previous) {
        const previousKey = key(previous);

        result.path.unshift(previous);
        result.costs.unshift(costSoFar[previousKey]);

        previous = cameFrom[previousKey];
    }

    return result;
};
