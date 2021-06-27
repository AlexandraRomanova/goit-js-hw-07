const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', addUserName);

function addUserName (event)  {
    let name = event.currentTarget.value
    outputName.textContent = name.length > 0 ? name : 'незнакомец';

};



