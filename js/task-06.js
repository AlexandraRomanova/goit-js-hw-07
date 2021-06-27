const input = document.querySelector('#validation-input')
const limitLength = parseInt(input.dataset.length);

input.addEventListener('blur', getValue)

function getValue() {
    let value = input.value.length;

    if (value !== limitLength) {
        input.classList.add('invalid');
        return
    }

    input.classList.remove('invalid');
    input.classList.add('valid');   
}












