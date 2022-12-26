const body = document.querySelector('body');
const nav = document.querySelector('.page-header__nav');
const links = document.querySelectorAll('.page-header__link--taged');
const button = document.querySelector('.page-header__toggle');

const onLinkClick = () => {
  closeMenu();
};

function closeMenu() {
  body.classList.remove('overflowed');
  nav.classList.remove('page-header__nav--opened');
  nav.classList.add('page-header__nav--closed');
  links.forEach((link) => {
    link.removeEventListener('click', onLinkClick);
  });
}

const openMenu = () => {
  body.classList.add('overflowed');
  nav.classList.remove('page-header__nav--closed');
  nav.classList.add('page-header__nav--opened');
  links.forEach((link) => {
    link.addEventListener('click', onLinkClick);
  });
};

const initBurgerMenu = () => {
  if (nav && links && button) {
    nav.classList.add('page-header__nav--closed');
    button.addEventListener('click', () => {
      if (nav.classList.contains('page-header__nav--closed')) {
        openMenu();
      } else {
        closeMenu();
      }
    });
  }
};


export {initBurgerMenu};
