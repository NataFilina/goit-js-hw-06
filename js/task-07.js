const text = document.querySelector('#text');
const fontSizeControl = document.querySelector('#font-size-control');

fontSizeControl.addEventListener('input', onChangeSize);

function onChangeSize() {
    text.style.fontSize = `${fontSizeControl.value}px`;
}