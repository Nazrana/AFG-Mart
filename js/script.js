'use strict';

 // On page load - replace the default user icon with the uploaded profile picture if available
 window.onload = function() {
    const profilePic = localStorage.getItem('profilePic');
    if (profilePic) {
        document.getElementById('user-icon').src = profilePic;
    }
};



function checkLoginStatus() {
    // Check if user data is available in localStorage - if the user is logged in
    const username = localStorage.getItem('username');
    
    if (username) {
        // If username exists - assume user is logged in and redirect to profile
        window.location.href = 'userprofile.html';
    } else {
        // If no username -  redirect to login page
        window.location.href = 'login-register-forms.html';
    }
}








//login and register forms
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



