const input = document.querySelector('#controls > input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes'); 

input.addEventListener('change', onGetValue);
btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', onDestroyElements);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let val; 

function onGetValue(event) {

  return val = event.currentTarget.value, btnCreate.addEventListener('click', createBoxes);;
}

let firstSize = 20;

let arrBoxes = [];

function createBoxes(amount) {
  amount = val;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${boxBigger()}px`;
    div.style.height = div.style.width;
    div.style.backgroundColor = getRandomHexColor();
    arrBoxes.push(div);
    boxesContainer.append(...arrBoxes);
  };
};
let size = 10;
function boxBigger() {
  return firstSize += size;
}

function onDestroyElements(event) {
  input.value = '';
  boxesContainer.innerHTML = '';
  btnCreate.removeEventListener('click', createBoxes);  
};