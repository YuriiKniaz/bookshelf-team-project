import { support } from './support';

const listEl = document.getElementById('support-list');
const scrollButton = document.getElementById('scroll-btn');
const btnIcon = document.querySelector('.support-btn-icon');

let index = 1;
let currentItemIndex = 0;
let listItemHeight = 0;
const maxItems = support.length;

const loadItems = () => {
  support.forEach(item => {
    const listItem = `
      <li class="support-list-item">

        <a class="support-list-link" href="${
          item.url
        }" target="_blank" aria-label="${
      item.title
    }">
          0${index++}<img class="support-img" srcset="${item.img} 1x, ${
      item.img
    } 2x"src="${item.img}" alt="${item.title}" />

        </a>
      </li>
    `;
    listEl.insertAdjacentHTML('beforeend', listItem);
  });

  listItemHeight = listEl.firstElementChild.clientHeight;
};

const scrollToNextItem = () => {
  let INC = 4;
  if (window.innerWidth >= 768) {
    INC = 6;
  } else {
    INC = 4;
  }
  currentItemIndex = currentItemIndex + INC;

  if (currentItemIndex >= maxItems) {
    currentItemIndex = 0;
    listEl.scrollTo({
      top: currentItemIndex * listItemHeight,
      behavior: 'auto',
    });
  } else {
    listEl.scrollTo({
      top: currentItemIndex * listItemHeight,
      behavior: 'smooth',
    });
  }
  if (currentItemIndex + INC >= maxItems) {
    btnIcon.classList.add('rotate');
  } else {
    btnIcon.classList.remove('rotate');
  }
};

scrollButton.addEventListener('click', scrollToNextItem);

loadItems();
