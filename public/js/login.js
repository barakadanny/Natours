// TODO: Use pop up to display messages
const login = async (email, password) => {
    try{
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:3000/api/v1/users/login',
            data: {
                email,
                password
            }
        });

        if(res.data.status === "success") {
            alert('Logged in successfully!')
            window.setTimeout(() => {
                location.assign('/tours')
            }, 1500)
        }
    } catch(err) {
        alert(err.response.data.message);
    }
}


document.querySelector('.form').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    login(email, password);
    
})