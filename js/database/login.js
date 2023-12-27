function openLoginModal() {
    const modal = document.getElementById('myModal_auth');
    modal.style.display = 'block';
}

document.getElementById('button__auth').addEventListener('click', openLoginModal);

function checkLoggedInUser() {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
        const user = JSON.parse(loggedInUser);
        updateUIOnLogin(user);
    }
}

function updateUIOnLogin(user) {
    const greeting = document.createElement('div');
    greeting.innerHTML = `Привет, ${user.name}`;
            
    const userIcon = document.createElement('img');
    userIcon.src = 'путь_к_иконке_пользователя';

    const loginButton = document.getElementById('button__auth');
    loginButton.replaceWith(userIcon, greeting);

    const logoutButton = document.createElement('button');
    logoutButton.classList.add('button__logout');
    logoutButton.textContent = 'Выйти';
    logoutButton.addEventListener('click', logoutUser);
    document.querySelector('.header__right__container').appendChild(logoutButton);
}

function loginUser(event) {
    event.preventDefault();

    const loginEmail = document.querySelector('#login-form input[type="email"]').value;
    const loginPassword = document.querySelector('#login-form input[type="password"]').value;

    const usersData = localStorage.getItem('users');
    if (usersData) {
        const users = JSON.parse(usersData);
        const foundUser = users.find(user => user.email === loginEmail && user.password === loginPassword);

        if (foundUser) {
            localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
            updateUIOnLogin(foundUser);
        } else {
            alert('Данные не совпадают, проверьте пожалуйста!');
        }
    } else {
        alert('Нет зарегистрированных пользователей');
    }
}

function logoutUser() {
    localStorage.removeItem('loggedInUser');

    const userIcon = document.querySelector('.header__right__container img');
    const greeting = document.querySelector('.header__right__container div');

    if (userIcon && greeting) {
        userIcon.remove();
        greeting.remove();
    }

    const loginButton = document.createElement('button');
    loginButton.classList.add('button__auth');
    loginButton.textContent = 'Войти';
    loginButton.addEventListener('click', openLoginModal);
    document.querySelector('.header__right__container').appendChild(loginButton);

    const logoutButton = document.querySelector('.button__logout');
    if (logoutButton) {
        logoutButton.remove();
    }
    location.reload();
}

document.getElementById('login-form').addEventListener('submit', loginUser);

checkLoggedInUser();
