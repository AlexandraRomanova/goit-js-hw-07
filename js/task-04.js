const refs = {
    // counter: document.querySelector('#counter'),
    decreaseValue: document.querySelector('button[data-action="decrement"]'),
    increaseValue: document.querySelector('button[data-action="increment"]'),
    value: document.querySelector('#value'),
};

const service = {
    counterValue: 0,

    decrement() {
        this.counterValue -= 1;
    },

    increment() {
        this.counterValue += 1;
    },

    update(ref) {
        ref.textContent = service.counterValue;
    },
};

refs.decreaseValue.addEventListener('click', () => {
    service.decrement();
    service.update(refs.value);
});

refs.increaseValue.addEventListener('click', () => {
    service.increment();
    service.update(refs.value);
});