import { support } from './support';

const listEl = document.querySelector('.support-list');
const scrollButton = document.querySelector('.support-next-button');

let index = 1;
let currentItemIndex = 0;

const loadItems = () => {
  support.forEach(item => {
    const listItem = `
      <li class="support-list-item">
        <a class="support-list-link" href="${item.url}">
          0${index++}<img class="support-img" src="${item.img}" alt="${
      item.title
    }" height="32"/>
        </a>
      </li>
    `;
    listEl.insertAdjacentHTML('beforeend', listItem);
  });
};

const scrollToNextItem = () => {
  const listItemHeight = listEl.firstElementChild.clientHeight;
  currentItemIndex = (currentItemIndex + 1) % support.length;
  listEl.scrollTo({
    top: currentItemIndex * listItemHeight,
    behavior: 'smooth',
  });
};

scrollButton.addEventListener('click', scrollToNextItem);

loadItems();
