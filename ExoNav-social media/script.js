// Get buttons
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');

loginBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
});

signupBtn.addEventListener('click', () => {
    window.location.href = 'signup.html';
});


document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm'); 

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();  

            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            console.log("Form submitted with username:", username, "and password:", password); 

            
            if (username && password) {
                console.log("Login successful, redirecting..."); 
                window.location.href = "feed.html"; 
            } else {
                console.log("Login failed. Missing fields."); 
                alert("Please fill in both fields.");
            }
        });
    }
});
