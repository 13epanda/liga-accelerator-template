const header = document.querySelector('.header');
const menu = document.querySelector('.header__wrapper');
const toggle = document.querySelector('.header__toggle');
const content = document.querySelector('.header__content');
const links = content.querySelectorAll('.header__link');

const openMenu = () => {
  menu.classList.remove('header__wrapper--closed');
  menu.classList.add('header__wrapper--opened');
  header.style.position = 'fixed';
  header.style.padding = '0';
  document.body.style.overflowY = 'hidden';
  document.addEventListener('click', outsideClickListener);
  for (let link of links) {
    link.addEventListener('click', linkClikListener);
  }
};

const closeMenu = () => {
  menu.classList.add('header__wrapper--closed');
  menu.classList.remove('header__wrapper--opened');
  header.style.position = 'absolute';
  header.style.padding = '0 20px';
  document.body.style.overflowY = null;
  document.removeEventListener('click', outsideClickListener);
};

function isVisible(elem) {
  return !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
}

const outsideClickListener = (event) => {
  if (!content.contains(event.target) && isVisible(content)) {
    closeMenu();
  }
};

const linkClikListener = () => {
  closeMenu();
};

const headerMenu = () => {
  header.style.position = 'absolute';
  menu.classList.add('header__wrapper--closed');
  toggle.addEventListener('click', function () {
    if (menu.classList.contains('header__wrapper--closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  });
};

export {headerMenu};
