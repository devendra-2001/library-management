
let button = document.getElementById('login-button');
let signupbutton = document.getElementById('signup-button');
let modalbg = document.querySelector('.modal-bg');
let modalclose = document.querySelector('.modal-close')

let signmodalbg = document.querySelector('.signmodal-bg');
let signmodalclose = document.querySelector('.signmodal-close')

button.addEventListener('click', function () {
    modalbg.classList.add('bg-active');
})
modalclose.addEventListener('click', function () {
    modalbg.classList.remove('bg-active');
})
signupbutton.addEventListener('click', function () {
    signmodalbg.classList.add('bg-active');
})
signmodalclose.addEventListener('click', function () {
    signmodalbg.classList.remove('bg-active');
})