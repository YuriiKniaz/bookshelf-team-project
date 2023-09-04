import { support } from "./support";

const listEl = document.querySelector('.support-list');
const scrollButton = document.querySelector('.support-next-button');
const slider = document.querySelector('.supprot-list-container');

let index = 1;

    support.forEach(item => {
        const listItem = `
        <div class="support-list-item">
          <a class="support-list-link" href="${item.url}">
            0${index++}<img class="support-img" src="${item.img}" alt="${item.title}" height="32"/>
          </a>
          </div>
        `;
        listEl.insertAdjacentHTML('beforeend', listItem);
    });
   
let scrollAmount = 0;
const supportItems = document.querySelectorAll('.support-list-item');
  const itemHeight = supportItems[0].offsetHeight;
  let scrollTop = 0;





  scrollButton.addEventListener('click', () => {
    scrollTop = (scrollTop + itemHeight) % (supportItems.length * itemHeight);
    slider.scrollTop = scrollTop;
  });

    // e.preventDefault();
    // if (scrollAmount < supportItems.length - 1) {
    //     scrollAmount++;
    // } else {
    //     scrollAmount = 0;
    // }
    // const itemHeight = supportItems[0].offsetHeight;
    // slider.style.transform = `translateY(-${scrollAmount * itemHeight}px)`;


