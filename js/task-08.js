
const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;
    if (email.value === '' || password.value === '') {
      alert("всі поля повинні бути заповнені")
    } else {
        return console.log({
            email: email.value,
            password: password.value
        }),
            form.reset();
    }

}
