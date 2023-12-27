function saveToLocalStorage(data) {
    const existingData = JSON.parse(localStorage.getItem('formData')) || [];

    if (Array.isArray(existingData)) {
        existingData.push(data);
        localStorage.setItem('formData', JSON.stringify(existingData));
    } else {
        const newData = [data];
        localStorage.setItem('formData', JSON.stringify(newData));
    }
}

const sendButton = document.querySelector('.request_send');
sendButton.addEventListener('click', function(event) {
    event.preventDefault();

    const formData = {
        'Name': document.querySelector('.name_form[type="text"]').value,
        'Email': document.querySelector('.name_form[type="email"]').value,
        'Website': document.querySelector('.name_form[type="text"][placeholder="Адрес сайта"]').value,
        'Contacts': document.querySelector('.name_form_area').value
    };

    saveToLocalStorage(formData);

    const form = document.getElementById('myForm');
    form.reset();

    closeAndClearModal();
});
