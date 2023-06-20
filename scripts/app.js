// Selecting Elements
const navbar = document.querySelector('#navbar');
const navToggleBtn = navbar.querySelector('.nav__btn');
const navlist = navbar.querySelector('.nav-list');

navToggleBtn.addEventListener("click", toggleNavbar);

function toggleNavbar() {
    navlist.classList.toggle('expanded');
    navToggleBtn.getAttribute('aria-expanded') === 'false' ? navToggleBtn.setAttribute('aria-expanded', 'true') : navToggleBtn.setAttribute('aria-expanded', 'false');
}