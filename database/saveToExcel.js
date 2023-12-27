const form = document.getElementById('myForm');

function saveToLocalStorage(event) {
    event.preventDefault(); 

    const name = form.querySelector('.name_form[type="text"]').value;
    const email = form.querySelector('.name_form[type="email"]').value;

    const existingUsers = localStorage.getItem('users');

    const newUser = {
        name,
        email,
        password: form.querySelector('#passwordField_reg').value,
        contacts: form.querySelector('.name_form_area').value
    };

    if (existingUsers) {
        const users = JSON.parse(existingUsers);

        const userExists = users.some(user => user.email === email || user.name === name);

        if (userExists) {
            alert('Извините, данное имя или почта уже заняты');
            return;
        }

        users.push(newUser);

        localStorage.setItem('users', JSON.stringify(users));
    } else {
        localStorage.setItem('users', JSON.stringify([newUser]));
    }

    form.reset();
}


form.addEventListener('submit', saveToLocalStorage);

document.addEventListener('DOMContentLoaded', () => {
    const userData = localStorage.getItem('userData');

    if (userData) {
        const { name, email, password, contacts } = JSON.parse(userData);

        form.querySelector('.name_form[type="text"]').value = name;
        form.querySelector('.name_form[type="email"]').value = email;
        form.querySelector('#passwordField_reg').value = password;
        form.querySelector('.name_form_area').value = contacts;
    }
});
