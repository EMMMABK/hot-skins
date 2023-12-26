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


