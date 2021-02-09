const nav = document.querySelector('nav');
const navToggle = document.querySelector('.navbar-toggle');
const navtog = document.querySelector('.navMenu-mobile');

function scroll() {
    nav.classList.toggle("sticky", window.scrollY > 0);
}

function toggleNav() {
    navToggle.classList.toggle('active');
    navtog.classList.toggle('active');
}

window.addEventListener('scroll', scroll);
navToggle.addEventListener('click', toggleNav)

