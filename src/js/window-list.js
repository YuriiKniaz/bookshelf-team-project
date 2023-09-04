import axios from 'axios';
import amazonImg from '../images/modal-img/amazon.png';
const refs = {
  borderModal: document.querySelector('.backdrop'),
  btnClose: document.querySelector('.btn-close'),
  addBook: document.querySelector('#addBookBtn'),
  prgFinal: document.querySelector('.prg-final'),
};

const bookList = document.querySelector('.category-list');
const bContainer = document.querySelector('.book-list-container');
const BOOK_URL = 'https://books-backend.p.goit.global/books/';

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
      //ПРАЦЮВАТИ З КНИГОЮ ВИЩЕ
    })
    .catch(err => console.log(err));
});

let isAdded = null;

refs.btnClose.addEventListener('click', closeBackdrop);
refs.addBook.addEventListener('click', onChangeText);

function openWindow() {
  borderModal.style.display = 'block';
}

function closeBackdrop() {
  document.body.style.overflowY = 'visible';
  refs.borderModal.classList.add('is-hidden');
}

function onChangeText() {
  if (isAdded) {
    refs.addBook.textContent = 'Add to shopping list';
    refs.prgFinal.classList.add('is-hidden');
    isAdded = null;
    return;
  }
  refs.addBook.textContent = 'Remove from the shopping list';
  isAdded = 'yes';
  refs.prgFinal.classList.remove('is-hidden');
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

// document.addEventListener('click', function (event) {
  // if (event.target === refs.borderModal) {
  //   closeBackdrop();
  // }
// });


// if (bookList) bookList.addEventListener('click', showBookInfo);


//bookList.addEventListener('click', showBookInfo);


// function showBookInfo(event) {
//   markupBookInfo();
// }
function markupBookInfo(book) {
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
              <a href="${book.amazon_product_url}" target="_blank">
                <img src="${amazonImg}" alt="amazon" width="62" heigth="19">
              </a>
            </li>
            <li class="icon-list">
              <a href="">
                <img src="/src/images/modal-img/ibook.png" alt="book" width="33" heigth="32">
              </a>
            </li>
            <li class="icon-list">
              <a href="">
                <img src="/src/images/modal-img/book-shop.png" alt="books" width="38" heigth="36">
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
