const initBurgerMenu = (body, nav, button) => {
  nav.classList.add('page-header__nav--closed');
  button.addEventListener('click', () => {
    if (nav.classList.contains('page-header__nav--closed')) {
      nav.classList.remove('page-header__nav--closed');
      nav.classList.add('page-header__nav--opened');
      body.classList.add('overflowed');
    } else {
      nav.classList.remove('page-header__nav--opened');
      nav.classList.add('page-header__nav--closed');
      body.classList.remove('overflowed');
    }
  });
};

export {initBurgerMenu};
