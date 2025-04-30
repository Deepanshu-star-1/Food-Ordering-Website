// const container = document.querySelector('.containor');
// const Signupbtn = document.querySelector('.signup');
// const loginbtn = document.querySelector('.login');

// Signupbtn.addEventListener('click', () => {
//     container.classList.add('active');  // Show the signup form and hide the login form
// });

// loginbtn.addEventListener('click', () => {
//     container.classList.remove('active');  // Show the login form and hide the signup form
// });
const container = document.querySelector('.containor');
const Signupbtn = document.querySelector('.signup');
const loginbtn = document.querySelector('.login');

// When clicking "Sign Up" button, show sign up form and hide login form
Signupbtn.addEventListener('click', () => {
    container.classList.add('active');  // Add 'active' class to show signup form
});

// When clicking "Login" button, show login form and hide sign up form
loginbtn.addEventListener('click', () => {
    container.classList.remove('active');  // Remove 'active' class to show login form
});
