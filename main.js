const hamburger = document.querySelector('#js-hamburger');
const menu = document.querySelector('#js-menu');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    menu.classList.toggle('active');
})