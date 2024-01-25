const formElem = document.querySelector('.login-form');
formElem.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const userEmail = formElem.elements.email.value.trim();
    const userPassword = formElem.elements.password.value.trim();
    const obj = {
        email: userEmail,
        password: userPassword,
    };
    console.log(obj);
    if (userEmail === '' || userPassword === '') {
        alert('All form fields must be filled in');
        return;
    }
    formElem.reset();
};




