import axios from 'axios';
import amazonImg from '../images/modal-img/amazon.png';
import ibookImg from '../images/modal-img/ibook.png';
import bookShopImg from '../images/modal-img/book-shop.png';
import amazonWhite from '../images/modal-img/amazon-white.png';

const refs = {
  borderModal: document.querySelector('.backdrop'),
  btnClose: document.querySelector('.btn-close'),
  addBook: document.querySelector('#addBookBtn'),
  prgFinal: document.querySelector('.prg-final'),
};

const bookList = document.querySelector('.category-list');
const bContainer = document.querySelector('.book-list-container');
const BOOK_URL = 'https://books-backend.p.goit.global/books/';
let curentBook = null;

bContainer.addEventListener('click', event => {
  let parentElement = event.target.parentElement;
  while (parentElement.tagName != 'LI') {
    parentElement = parentElement.parentElement;
    if (parentElement === bContainer) {
      return;
    }
  }

  if (parentElement.tagName != 'LI') {
    return;
  }
  const bookId = parentElement.dataset.id;

  fetchBookById(bookId)
    .then(book => {
      //ПРАЦЮВАТИ З КНИГОЮ НИЖЧЕ
      const modalWindow = document.getElementById('myWindow');
      modalWindow.classList.remove('is-hidden'); // відкриваєм модалку
      let html = markupBookInfo(book);

      const backGRND = document.querySelector('#book-detail');
      backGRND.innerHTML = html;

      const amazonLogo = document.querySelector('.amazon-white');

      if (document.documentElement.className === 'dark-theme') {
        amazonLogo.src = amazonWhite;
      } else {
        amazonLogo.src = amazonImg;
      }

      //ПРАЦЮВАТИ З КНИГОЮ ВИЩЕ
      curentBook = book;
      if (curentBook) {
        const userBucket = load('userBucket');
        const bookIds = userBucket.map(el => el._id);
        let isAdded = bookIds.includes(curentBook._id);
        onChangeText(isAdded);
      }
    })
    .catch(err => console.log(err));
});

//ADD BOOK TO THE BUCKET (LocalStorage)
refs.addBook.addEventListener('click', event => {
  if (curentBook) {
    const userBucket = load('userBucket');
    const bookIds = userBucket.map(el => el._id);
    let isAdded = bookIds.includes(curentBook._id);

    // console.log(isAdded);
    if (!isAdded) {
      userBucket.push(curentBook);
      save('userBucket', userBucket);
    } else {
      const userBucketNew = [];
      for (const iterator of userBucket) {
        if (iterator._id != curentBook._id) {
          userBucketNew.push(iterator);
        }
      }
      save('userBucket', userBucketNew);
    }
    onChangeText(!isAdded);
  }
});

refs.btnClose.addEventListener('click', closeBackdrop);

function closeBackdrop() {
  document.body.style.overflowY = 'visible';
  refs.borderModal.classList.add('is-hidden');
}

function onChangeText(isAdded) {
  if (isAdded) {
    refs.addBook.textContent = 'Remove from the shopping list';
    refs.prgFinal.classList.remove('is-hidden');
  } else {
    refs.addBook.textContent = 'Add to shopping list';
    refs.prgFinal.classList.add('is-hidden');
  }
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeBackdrop();
  }
});

document.addEventListener('click', function (event) {
  if (event.target === refs.borderModal) {
    closeBackdrop();
  }
});
// МОДАЛЬНЕ ВІКНО************************************************************

function markupBookInfo(book) {
  let amazonLink = '';
  let ibookLink = '';
  let bookshopLink = '';
  if (book.buy_links) {
    for (const iterator of book.buy_links) {
      if (iterator.name === 'Amazon') {
        amazonLink = iterator.url;
      }
      if (iterator.name === 'Apple Books') {
        ibookLink = iterator.url;
      }
      if (iterator.name === 'Bookshop') {
        const url = new URL(iterator.url);
        bookshopLink = url.searchParams.get('url1');
      }
    }
  }

  return `<div class="modal-book">

      <img class="modal-img" srcset="
          ${book.book_image} 1x,
          ${book.book_image} 2x
        " src="${book.book_image}" alt="HELLO BEAUTIFUL" />

      <div class="section-one">
        <h2 class="modal-title">${book.title}</h2>
        <p class="modal-prg">${book.author}</p>
        <p class="modal-prgtho">
          ${book.description}
        </p>
        <div class="modal-links">
          <ul class="links-list list">
            <li class="icon-list">
              <a href="${amazonLink}" target="_blank" aria-label="Amazon book link">
                <img class="amazon-white" src="${amazonImg}" alt="amazon" width="62" heigth="19">
              </a>
            </li>
            <li class="icon-list">
              <a href="${ibookLink}" target="_blank" aria-label="IBook book link">
                <img src="${ibookImg}" alt="book" width="33" heigth="32">
              </a>
            </li>
            <li class="icon-list">
              <a href="${bookshopLink}" target="_blank" aria-label="BookShop book link">
                <img src="${bookShopImg}" alt="books" width="38" heigth="36">
              </a>
            </li>
            </use>
            </svg>
            </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
`;
}

async function fetchBookById(bookId) {
  try {
    const response = await axios.get(`${BOOK_URL}/${bookId}`);
    const dataPromise = response.data;
    return dataPromise;
  } catch (err) {
    console.log('FETCH ERROR: ' + err);
  }
}

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? [] : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};
