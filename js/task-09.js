const btn = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.querySelector('body');

btn.addEventListener('click', onChangeSize);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeSize() {
  const colorClick = getRandomHexColor();
  color.textContent = colorClick;
  body.style.backgroundColor = colorClick;
}