const input = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

input.addEventListener('input', fontSizeControl)

function fontSizeControl() {
    text.setAttribute('style', `font-size:${input.value}px`)
}
