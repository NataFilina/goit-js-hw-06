const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector('#value');

let counterValue = 0;


btnIncrementEl.addEventListener('click', onClickIncrement);
btnDecrementEl.addEventListener('click', onClickDecrement);

function onClickIncrement() {
    counterValue += 1;
    return counterValueEl.textContent = counterValue;
}

function onClickDecrement() {
    counterValue -= 1;
    return counterValueEl.textContent = counterValue;
}