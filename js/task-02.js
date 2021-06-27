const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const menuItem = document.querySelector('#ingredients');

const itemName = ingredients.map(ingredient => {
    const itemList = document.createElement('li');
    itemList.textContent = ingredient;

    return itemList;
});
menuItem.append(...itemName);
console.log(menuItem);