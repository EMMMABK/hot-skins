let modal = document.getElementById("myModal");
let overlay = document.getElementById("overlay");
let btn = document.getElementById("connectButton");
let span = document.getElementById("closeModal");

btn.onclick = function() {
    modal.classList.add("show");
    overlay.classList.add("show"); 
};

span.onclick = function() {
    modal.classList.remove("show");
    overlay.classList.remove("show"); 
};

window.onclick = function(event) {
    if (event.target == overlay) {
        modal.classList.remove("show");
        overlay.classList.remove("show"); 
    }
};



let modal_auth = document.getElementById("myModal_auth");
let overlay_auth = document.getElementById("overlay_auth");
let btn_auth = document.getElementById("button__auth");
let span_auth = document.getElementById("closeModal_auth");

btn_auth.onclick = function() {
    modal_auth.classList.add("show_auth");
    overlay_auth.classList.add("show_auth"); 
};

span_auth.onclick = function() {
    modal_auth.classList.remove("show_auth");
    overlay_auth.classList.remove("show_auth"); 
};

window.onclick = function(event) {
    if (event.target == overlay_auth) {
        modal_auth.classList.remove("show_auth");
        overlay_auth.classList.remove("show_auth"); 
    }
};

const passwordField = document.getElementById('passwordField');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', function() {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});

passwordField.addEventListener('input', function() {
    const password = passwordField.value;
    if (password.length < 8 || password.length > 8) {
        passwordField.setCustomValidity('Пароль должен содержать от 8 символов');
    } else {
        passwordField.setCustomValidity('');
    }
});