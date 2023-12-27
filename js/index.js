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
    modal_auth.classList.add("show");
    overlay_auth.classList.add("show"); 
};

span_auth.onclick = function() {
    modal_auth.classList.remove("show");
    overlay_auth.classList.remove("show"); 
};

window.onclick = function(event) {
    if (event.target == overlay_auth) {
        modal_auth.classList.remove("show");
        overlay_auth.classList.remove("show"); 
    }
};

