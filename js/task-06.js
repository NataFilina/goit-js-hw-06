const input = document.querySelector('#validation-input');

input.addEventListener('blur', onCheckedCorrect);

function onCheckedCorrect(event) {

    const valueData = Number(input.dataset.length);
    
    if (event.currentTarget.value.length !== valueData) {
        input.classList.add('invalid');
    } 
    
    input.classList.add('valid');
}