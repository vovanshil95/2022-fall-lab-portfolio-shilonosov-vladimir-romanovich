const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('menu--showed');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('menu--showed');
  });
}

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  navMenu.classList.remove('menu--showed');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrolly = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrolly > sectionTop && scrolly <= sectionTop + sectionHeight) {
      document.querySelector(`.nav__menu a[href="#${sectionId}"]`).classList.add('link--active');
    } else {
      document.querySelector(`.nav__menu a[href="#${sectionId}"]`).classList.remove('link--active');
    }
  });
}
window.addEventListener('scroll', scrollActive);

function scrollHeader() {
  const nav = document.getElementById('header');
  if (this.scrollY >= 10) nav.classList.add('header--scrolled'); else nav.classList.remove('header--scrolled');
}
window.addEventListener('scroll', scrollHeader);

function scrollUp() {
  const scrollUpEl = document.getElementById('scroll-up');

  if (this.scrollY >= 560) scrollUpEl.classList.add('scroll--showed'); else scrollUpEl.classList.remove('scroll--showed');
}
window.addEventListener('scroll', scrollUp);
