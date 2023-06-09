let hamburger = document.querySelector('.hamburger');
let navbar = document.querySelector('.navbar');
let navLink = document.querySelectorAll('.nav-link');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
})

navLink.forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navbar.classList.remove('active');
}))