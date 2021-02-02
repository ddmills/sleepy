const colorMap = {
    AREA_TYPE_PLAINS: '#57723a',
    AREA_TYPE_CANYON: '#804c36',
    AREA_TYPE_DESERT: '#b3904d',
    AREA_TYPE_FOREST: '#3c5837',
    AREA_TYPE_WATER: '#326475',
    AREA_TYPE_DEEP_WATER: '#235465'
};

export const renderEditorMap = (data) => {
    const display = document.getElementsByClassName('display-grid')[0];

    display.innerHTML = '';

    for (let y = 0; y < data.grid.height; y++) {
        const row = document.createElement('div');

        row.classList.add('display-row');

        for (let x = 0; x < data.grid.width; x++) {
            const area = data.grid.get(x, y);
            const cell = document.createElement('div');

            cell.dataset.x = x;
            cell.dataset.y = y;

            cell.classList.add('display-cell');

            cell.style.backgroundColor = colorMap[area.type];

            row.appendChild(cell);
        }

        display.appendChild(row);
    }
};
