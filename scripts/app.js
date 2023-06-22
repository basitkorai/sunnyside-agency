// Selecting Elements
const navbar = document.querySelector("#navbar");
const navToggleBtn = navbar.querySelector(".nav__btn");
const navlist = navbar.querySelector(".nav-list");
const body = document.body;
let lastScroll = 0;

navToggleBtn.addEventListener("click", toggleNavbar);

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll <= 250) {
    body.classList.remove("scroll-up");
    navlist.style.paddingBlock = '2rem';
  } else {
    navlist.style.paddingBlock = `0`;
  }

  if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
    body.classList.remove('scroll-up');
    body.classList.add('scroll-down');
  } else if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
    body.classList.add('scroll-up');
    body.classList.remove('scroll-down');
  }

  lastScroll = currentScroll;
});

function toggleNavbar() {
  navlist.classList.toggle("expanded");
  navToggleBtn.getAttribute("aria-expanded") === "false"
    ? navToggleBtn.setAttribute("aria-expanded", "true")
    : navToggleBtn.setAttribute("aria-expanded", "false");
}
