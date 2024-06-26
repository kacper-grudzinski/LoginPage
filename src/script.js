const wrapper = document.querySelector('.wrapper');
const container = document.querySelector('.container');
const loginLink = document.querySelector('.loginLink');
const registerLink = document.querySelector('.registerLink');
const popup = document.querySelector('.btnLogin-popup');
const closeIcon = document.querySelector('.iconClose');
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

popup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
    container.classList.add('closed');
});
closeIcon.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
    container.classList.remove('closed');
});

hamburger.addEventListener('click', ()=>{
    navigation.classList.toggle('open');
})