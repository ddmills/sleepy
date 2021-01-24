import { EditorMap } from './EditorMap';
import { renderEditorMap } from './EditorRenderer';
import { generateWorld } from './EditorWorldGenerator';

const data = generateWorld(32, 24);

window.data = data;

renderEditorMap(data);

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('display-cell')) {
        const x = parseInt(e.target.dataset.x);
        const y = parseInt(e.target.dataset.y);
        const cell = data.grid.get(x, y);

        console.log(cell);
    }
});
