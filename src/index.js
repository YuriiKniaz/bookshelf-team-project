import './js/header-burger.js';
import './js/theme-switcher.js';
import './js/book-list.js';
import './js/best-sellers.js';

import './js/arrow-top.js';
import './js/registration.js';
import './js/category-list.js';
import './js/window-list.js';
import './js/charitable-foundation.js';
import './js/creators.js';
//Page change hover

const homeBtn = document.getElementById('bestsellers');
const shopPage = document.getElementById('shop-page');

if (document.querySelector('.shopping-list-section')) {
  homeBtn.classList.remove('active');
  shopPage.classList.add('active');
} else {
  homeBtn.classList.add('active');
  shopPage.classList.remove('active');
}
