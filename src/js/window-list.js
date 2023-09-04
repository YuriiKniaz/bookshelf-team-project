// const bookList = document.querySelector('.currentBook');
// const bookName = document.getElementById('#book.title');
// const bookAuthor = document.getElementById('#book.author');

// МОДАЛЬНЕ ВІКНО************************************************************
const refs = {
  borderModal: document.querySelector('.backdrop'),
  btnClose: document.querySelector('.btn-close'),
  addBook: document.querySelector('#addBookBtn'),
  prgFinal: document.querySelector('.prg-final'),
};

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

// function markupBookInfo(bookName, bookAuthor) {
//   borderModal.style.display = 'block';
//   bookName.textContent = bookName;
//   bookAuthor.textContent = bookAuthor;
// }

bookList.addEventListener('click', showBookInfo);

function showBookInfo(event) {
  markupBookInfo();
}

// const bookListOpen = document.querySelectorAll('.book-list');
// currentBook.forEach(function (bookListOpen) {
//   bookListOpen.addEventListener('click', function () {});
// });
function markupBookInfo({ bookName, bookAuthor, urlImg, description }) {
  return `<div class="modal-book">

      <img class="modal-img" srcset="
          /src/images/img-window/image@1x.png 1x,
          /src/images/img-window/image@2x.png 2x
        " src="/src/images/img-window/image.png" alt="HELLO BEAUTIFUL" />

      <div class="section-one">
        <h2 class="modal-title">${bookName}</h2>
        <p class="modal-prg">${bookAuthor}</p>
        <p class="modal-prgtho">
          In a homage to Louisa May Alcott’s “Little Women,” a young man’s dark
          past resurfaces as he gets to the know the family of his college
          sweetheart.
        </p>
        <div class="modal-links">
          <ul class="links-list list">
            <li class="icon-list">
              <a href="">
                <img src="/src/images/modal-img/amazon.png" alt="amazon" width="62" heigth="19">
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
