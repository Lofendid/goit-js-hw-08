const form = document.querySelector('.login-form');
const userEmail = document.querySelector('input[name="email"]');
const userPassword = document.querySelector('input[name="password"]');

const handleSubmit = event => { 
    event.preventDefault();
    const user = {};
    const trimmedEmail = userEmail.value.trim();
    const trimmedPassword = userPassword.value.trim();
    if (trimmedEmail === '' || trimmedPassword === '') return alert('All form fields must be filled in');
    else {
        user.email = trimmedEmail;
        user.password = trimmedPassword;
        console.log(user);
    }
    event.target.reset();
};

form.addEventListener('submit', handleSubmit);
