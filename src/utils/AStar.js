import { diagonalDistance } from './diagonalDistance';
import { manhattanDistance } from './ManhattanDistance';
import PriorityQueue from './PriorityQueue';

const getNeighbors = (x, y) => [
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
    },
];

const key = (pos) => `${pos.x},${pos.y}`;

export const computeAStar = (start, goal, cost, heuristic = diagonalDistance) => {
    const open = new PriorityQueue();
    const cameFrom = {};
    const costSoFar = {};
    const startKey = key(start);
    const goalKey = key(goal);

    const result = {
        success: false,
        path: [],
        costs: [],
        cost: Infinity
    };

    if (cost(start, goal) === Infinity) {
        return result;
    }

    open.put({
        key: startKey,
        pos: start
    }, 0);

    costSoFar[startKey] = 0;

    while (!open.isEmpty()) {
        const {
            key: currentKey,
            pos: current
        } = open.pop();

        if (currentKey === goalKey) {
            result.success = true;
            break;
        }

        const neighbors = getNeighbors(current.x, current.y);

        for (let next of neighbors) {
            const nextKey = key(next);
            const graphCost = cost(current, next);

            if (graphCost === Infinity) {
                continue;
            }

            const newCost = costSoFar[currentKey] + graphCost;

            if (!(nextKey in costSoFar) || newCost < costSoFar[nextKey]) {
                costSoFar[nextKey] = newCost;

                const priority = newCost + heuristic(next, goal);

                open.put({
                    key: nextKey,
                    pos: next
                }, priority);

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
}
