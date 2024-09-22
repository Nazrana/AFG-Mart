const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');


registerLink.addEventListener('click' , ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click' , ()=> {
    wrapper.classList.remove('active');
});



function login(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === 'admin' && password === '1234') {
        window.location.href = 'AdminPanel/AdminPanel.html';
    } else {
        alert('Invalid login. Please try again.');
    }
}