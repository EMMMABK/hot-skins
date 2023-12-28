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
    const currentPage = window.location.pathname;
    const greeting = document.createElement('div');
    greeting.innerHTML = `Привет, <br> <span style="color: #F4C038;">${user.name}</span>`;
    greeting.style.fontSize = '14px';
    greeting.style.fontWeight = '400';
    greeting.style.lineHeight = '16px'
    greeting.style.color = '#FFFFFF80';
    if (currentPage.includes('index.html')){
        const userIcon = document.createElement('img');
        userIcon.src = 'icons/Profile.svg'; 

        const loginButton = document.getElementById('button__auth');
        loginButton.replaceWith(userIcon, greeting);

        const logoutButton = document.createElement('button');
        logoutButton.classList.add('button__logout');
        logoutButton.textContent = 'Выйти';
        logoutButton.style.width = '96px';
        logoutButton.style.height = '40px';
        logoutButton.style.borderRadius = '20px';
        logoutButton.style.border = '1px solid #3D4554';
        logoutButton.style.background = 'none'
        logoutButton.style.fontSize = '14px';
        logoutButton.style.fontWeight = '400';
        logoutButton.style.lineHeight = '16px'
        logoutButton.style.color = '#FFFFFF'
        logoutButton.style.cursor = 'pointer'

        logoutButton.addEventListener('click', logoutUser);
        let right_side = document.querySelector('.header__right__container')
        right_side.style.display = 'flex'
        right_side.style.alignItems = 'center'
        right_side.style.columnGap = '12px'

        const mySitesLink = document.createElement('a');
        mySitesLink.href = './html/mysites.html'; 
        mySitesLink.textContent = 'Мои сайты';

        const apiLink = document.createElement('a');
        apiLink.href = './html/api.html';
        apiLink.textContent = 'API';

        const mySitesListItem = document.createElement('li');
        mySitesListItem.classList.add('header__li');
        mySitesListItem.appendChild(mySitesLink);

        const apiListItem = document.createElement('li');
        apiListItem.classList.add('header__li');
        apiListItem.appendChild(apiLink);

        const headerUl = document.querySelector('.header__ul');

        headerUl.appendChild(mySitesListItem);
        headerUl.appendChild(apiListItem);    
        right_side.appendChild(logoutButton);
    }else{
        const userIcon = document.createElement('img');
        userIcon.src = '../icons/Profile.svg'; 

        const loginButton = document.getElementById('button__auth');
        loginButton.replaceWith(userIcon, greeting);

        const logoutButton = document.createElement('button');
        logoutButton.classList.add('button__logout');
        logoutButton.textContent = 'Выйти';
        logoutButton.style.width = '96px';
        logoutButton.style.height = '40px';
        logoutButton.style.borderRadius = '20px';
        logoutButton.style.border = '1px solid #3D4554';
        logoutButton.style.background = 'none'
        logoutButton.style.fontSize = '14px';
        logoutButton.style.fontWeight = '400';
        logoutButton.style.lineHeight = '16px'
        logoutButton.style.color = '#FFFFFF'
        logoutButton.style.cursor = 'pointer'

        logoutButton.addEventListener('click', logoutUser);
        let right_side = document.querySelector('.header__right__container')
        right_side.style.display = 'flex'
        right_side.style.alignItems = 'center'
        right_side.style.columnGap = '12px'

        const mySitesLink = document.createElement('a');
        mySitesLink.href = '../html/mysites.html'; 
        mySitesLink.textContent = 'Мои сайты';

        const apiLink = document.createElement('a');
        apiLink.href = '../html/api.html';
        apiLink.textContent = 'API';
        
        const mySitesListItem = document.createElement('li');
        mySitesListItem.classList.add('header__li');
        mySitesListItem.appendChild(mySitesLink);

        const apiListItem = document.createElement('li');
        apiListItem.classList.add('header__li');
        apiListItem.appendChild(apiLink);

        const headerUl = document.querySelector('.header__ul');

        headerUl.appendChild(mySitesListItem);
        headerUl.appendChild(apiListItem);    
        right_side.appendChild(logoutButton);
    }
    
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
    const modal = document.getElementById('myModal_auth');
    modal.style.display = 'none';

    const overlay = document.querySelector('.overlay_auth');
    overlay.style.display = 'none';

    const showAuth = document.querySelector('.show_auth');
    showAuth.style.display = 'none';
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
