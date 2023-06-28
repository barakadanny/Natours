import { login, logout } from './login'
import { updateSettings } from './updateSettings'

// DOM elements
const loginForm = document.querySelector('.form')
const logOutBtn = document.querySelector('.logoutBtn')
const userDataForm = document.querySelector('.form-user-data')
const userPasswordForm = document.querySelector('.form-user-password')

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

if (userPasswordForm)
    userPasswordForm.addEventListener('submit', async e => {
        e.preventDefault();
        const passwordCurrent = document.getElementById('password-current').value;
        const password = document.getElementById('password').value;
        const passwordConfirm = document.getElementById('password-confirm').value;

        await updateSettings({passwordCurrent, password, passwordConfirm}, 'password');

        document.querySelector('.btn--save-password').textContent = 'Save password';
        document.getElementById('password-current').value = '';
        document.getElementById('password').value = '';
        document.getElementById('password-confirm').value = '';
    });
