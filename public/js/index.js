import { login, logout } from './login'

// DOM elements
const loginForm = document.querySelector('.form')
const logOutBtn = document.querySelector('.logoutBtn')

if (loginForm)
    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        login(email, password);
        
    })

if (logOutBtn) logOutBtn.addEventListener('click', logout);