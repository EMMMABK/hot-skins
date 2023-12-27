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


// Получаем элементы DOM
const buttonAuth = document.getElementById('button__auth');
const modalAuth = document.getElementById('myModal_auth');
const closeModalAuth = document.getElementById('closeModal_auth');
const overlayAuth = document.getElementById('overlay_auth');

// Функция для отображения модального окна
function openModal() {
    modalAuth.style.display = 'block';
    overlayAuth.style.display = 'block';
}

// Функция для скрытия модального окна
function closeModal() {
    modalAuth.style.display = 'none';
    overlayAuth.style.display = 'none';
}

// Обработчик события для открытия модального окна при клике на кнопку "Войти"
buttonAuth.addEventListener('click', openModal);

// Обработчик события для закрытия модального окна при клике на крестик
closeModalAuth.addEventListener('click', closeModal);

// Обработчик события для закрытия модального окна при клике на задний фон (overlay)
overlayAuth.addEventListener('click', function(event) {
    if (event.target === overlayAuth) {
        closeModal();
    }
});


// Дополнительно можно добавить обработчик события для закрытия модального окна по нажатию клавиши Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
