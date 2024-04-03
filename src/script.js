const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.loginLink');
const registerLink = document.querySelector('.registerLink');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});