const input = document.querySelector('#validation-input');

input.addEventListener('blur', onCheckedCorrect);

function onCheckedCorrect(event) {

    const valueData = Number(input.dataset.length);
    input.classList.remove('invalid');
    input.classList.remove('valid');
    if (event.currentTarget.value.length !== valueData) {
        return input.classList.add('invalid');
    } 
    
    input.classList.add('valid');
}