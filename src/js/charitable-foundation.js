import { support } from './support';

const listEl = document.getElementById('support-list');
const scrollButton = document.getElementById('scroll-btn');

let index = 1;
let currentItemIndex = 0;
let listItemHeight = 0;
const maxItems = support.length;

const loadItems = () => {
  support.forEach(item => {
    const listItem = `
      <li class="support-list-item">
        <a class="support-list-link" href="${item.url}" target="_blank">
          0${index++}<img class="support-img" src="${item.img}" alt="${
      item.title
    }" height="32"/>
        </a>
      </li>
    `;
    listEl.insertAdjacentHTML('beforeend', listItem);
  });

  listItemHeight = listEl.firstElementChild.clientHeight;
};

const scrollToNextItem = () => {
  currentItemIndex++;
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
};

scrollButton.addEventListener('click', scrollToNextItem);

loadItems();
