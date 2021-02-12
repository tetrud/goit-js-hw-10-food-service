import templateMenu from '../templates/menu.hbs';
import menu from '../menu.json';

const markup = templateMenu(menu);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);
