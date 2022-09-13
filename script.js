const password = document.getElementById('pswd');
const passwordEye = document.querySelector('.eye');
const confirmPassword = document.getElementById('rp_pswd');
const submitButton = document.querySelector('button');

function showAndHidePassword() {
    if(password.type === 'password') {
        password.type = 'text'
    } else {
        password.type = 'password'
    }
}

function changeEye() {
    if(password.type === 'password') {
        passwordEye.setAttribute('src', 'img/opened_eye.png')
    } else {
        passwordEye.setAttribute('src', 'img/closed_eye.png')
    }
}

function checkPasswords() {
    if(password.value !== confirmPassword.value) {
        password.setCustomValidity("Invalid password");
        confirmPassword.setCustomValidity("Invalid password")
    } else {
        password.setCustomValidity("");
        confirmPassword.setCustomValidity("")
    }
}

passwordEye.addEventListener('click', () => {
    changeEye();
    showAndHidePassword();
});

confirmPassword.addEventListener('input', checkPasswords)