const password = document.getElementById('pswd');
const passwordEye = document.querySelector('.eye');

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

passwordEye.addEventListener('click', () => {
    changeEye();
    showAndHidePassword();
});