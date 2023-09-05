import { support } from './support';

const listEl = document.querySelector('.support-list');
const scrollButton = document.querySelector('.support-next-button');
const slider = document.querySelector('.support-list-container');

let index = 1;

support.forEach(item => {
  const listItem = `
    <div class="support-list-item">
      <a class="support-list-link" href="${item.url}">
        0${index++}<img class="support-img" src="${item.img}" alt="${
    item.title
  }" height="32"/>
      </a>
    </div>
    `;
  listEl.insertAdjacentHTML('beforeend', listItem);
});

const supportItems = document.querySelectorAll('.support-list-item');
const itemHeight = supportItems[0].offsetHeight;
let currentPosition = 0;

scrollButton.addEventListener('click', () => {
  currentPosition =
    (currentPosition + slider.clientHeight) %
    (supportItems.length * itemHeight);
  slider.scrollTop = currentPosition;
});

// e.preventDefault();
// if (scrollAmount < supportItems.length - 1) {
//     scrollAmount++;
// } else {
//     scrollAmount = 0;
// }
// const itemHeight = supportItems[0].offsetHeight;
// slider.style.transform = `translateY(-${scrollAmount * itemHeight}px)`;
