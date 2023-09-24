const input = document.querySelector('#controls > input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

btnCreate.addEventListener('click', onCreateElements);
btnDestroy.addEventListener('click', onDestroyElements);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const div = document.createElement('div');
  amount = Number(input.currentTarget.value);
  // body.style.backgroundColor = getRandomHexColor();
  // color.textContent = getRandomHexColor();
  console.log(amount);
}