import { login, logout } from './login'
import { updateSettings } from './updateSettings'

// DOM elements
const loginForm = document.querySelector('.form')
const logOutBtn = document.querySelector('.logoutBtn')
const userDataForm = document.querySelector('.form-user-data')

if (loginForm)
    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        login(email, password);
        
    })

if (logOutBtn) logOutBtn.addEventListener('click', logout);

if (userDataForm)
    userDataForm.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;

        updateSettings({name, email}, 'data');
    });
