import { support } from "./support";

const listEl = document.getElementById('support-lsit');
const scrollBtn = document.getElementById('scroll-btn');
const slider = document.querySelector('.supprot-list-container');

let index = 1;
let scrollAmount = 0;
    support.map(item => {
        const listItem = `
        <li class="support-list-item">
          <a class="support-list-link" href="${item.url}">
            0${index++}<img class="support-img" src="${item.img}" alt="${item.title}" height="32"/>
          </a>
          </li>
        `;
        listEl.insertAdjacentHTML('beforeend', listItem);
    }).join('');
   

const supportItems = document.querySelectorAll('.support-list-item');
  const itemHeight = supportItems[0].offsetHeight;
  

  scrollBtn.addEventListener('click', () => {
    slider.scrollAmount = (scrollAmount + itemHeight) % (supportItems.length * itemHeight);
    
  });


    

