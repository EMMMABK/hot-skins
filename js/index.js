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

// Получаем ссылки на поля формы
const nameInput = document.querySelector('.name_form[type="text"]');
const emailInput = document.querySelector('.name_form[type="email"]');
const websiteInput = document.querySelectorAll('.name_form[type="text"]')[1]; // Второе поле типа text
const contactsTextarea = document.querySelector('.name_form_area');
const submitButton = document.querySelector('.request_send');

// Функция для сохранения данных в localStorage
function saveToLocalStorage() {
    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        website: websiteInput.value,
        contacts: contactsTextarea.value
    };

    // Преобразуем объект с данными в строку и сохраняем в localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
}

// Функция для загрузки данных из localStorage (если они есть)
function loadFromLocalStorage() {
    const savedData = localStorage.getItem('formData');

    if (savedData) {
        const parsedData = JSON.parse(savedData);

        // Заполняем поля формы сохраненными данными из localStorage
        nameInput.value = parsedData.name;
        emailInput.value = parsedData.email;
        websiteInput.value = parsedData.website;
        contactsTextarea.value = parsedData.contacts;
    }
}

// Загружаем данные из localStorage при загрузке страницы
loadFromLocalStorage();

// Обработчик события отправки формы
submitButton.addEventListener('click', function(event) {
    // Предотвращаем отправку формы, чтобы сохранить данные в localStorage
    event.preventDefault();

    // Сохраняем данные в localStorage при отправке формы
    saveToLocalStorage();

    // Дополнительно: можно добавить код для отправки данных на сервер
    // например, с использованием fetch или отправки AJAX запроса
    // fetch('/url-для-обработки-формы', {
    //     method: 'POST',
    //     body: JSON.stringify(formData),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }).then(response => {
    //     // Обработка ответа от сервера
    // });
});
