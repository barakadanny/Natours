import { login } from './login'

// DOM elements
const loginForm = document.querySelector('.form')

if (loginForm)
    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        login(email, password);
        
    })