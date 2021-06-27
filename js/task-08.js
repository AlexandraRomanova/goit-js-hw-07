const control = document.querySelector('#controls');
const input = document.querySelector('#controls input');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

const randomRgb = () => {
    const rgb = () => Math.floor(Math.random() * 256);
    const r = rgb();
    const g = rgb();
    const b = rgb();

    return `rgb(${r},${g},${b})`;
};

const createBoxes = amount => {
    const arr = [];
    amount = input.value;
    arr.length = amount;

    arr.fill(amount).map((item, index) => {
        const baseSize = 30;
        const biggestSize = baseSize + index * 10;
        const box = document.createElement('div');
        box.setAttribute(
            'style',
            `width:${biggestSize}px ;height:${biggestSize}px; background-color:${randomRgb()}`,
        );
        boxes.append(box);
    });

    // for (let index = 0; index < amount; index += 1) {
    //     const baseSize = 30;
    //     const biggestSize = baseSize + index * 10;
    //     const box = document.createElement('div');
    //     box.setAttribute(
    //         'style',
    //         `width:${biggestSize}px ;height:${biggestSize}px; background-color:${randomRgb()}`,
    //     );
    //     boxes.append(box);
    // }
};

const destroyBoxes = () => {
    input.value = '';
    boxes.innerHTML = '';
};


renderBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);