const container = document.querySelector('.containor');
const Signupbtn = document.querySelector('.signup');
const loginbtn = document.querySelector('.login');

Signupbtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginbtn.addEventListener('click', () => {
    container.classList.remove('active');
})