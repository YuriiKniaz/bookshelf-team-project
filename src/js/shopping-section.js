import removeIcon from '/src/images/icons.svg#icon-remove';
import amazonImg from '../images/modal-img/amazon.png';
import ibookImg from '../images/modal-img/ibook.png';
import bookShopImg from '../images/modal-img/book-shop.png';
// Отримання посилань на елементи DOM
const booksEl = document.querySelector('.shopping-container');
const emptyListImg = document.querySelector('.empty-shopping-list-div');
const imagesToHide = document.querySelectorAll('.shopping-list-book-img'); // Отримати всі зображення, які потрібно сховати
const containerBooks = document.querySelector('.empty-shop-list');
// Отримання збережених книг з localStorage
function getSavedBooks() {
  const savedBooks = localStorage.getItem('userBucket');
  return JSON.parse(savedBooks);
}
function showBooks() {
  let arrBooks = getSavedBooks();
  let test = arrBooks.map(book => generateBookCard(book));
  containerBooks.innerHTML = test;
}
showBooks();
// Створення HTML-розмітки для книги
function generateBookCard(book) {
  let amazonLnk = '';
  let ibookLnk = '';
  let bookshopLnk = '';
  if (book.buy_links) {
    for (const iterator of book.buy_links) {
      if (iterator.name === 'Amazon') {
        amazonLnk = iterator.url;
      }
      if (iterator.name === 'Apple Books') {
        ibookLnk = iterator.url;
      }
      if (iterator.name === 'Bookshop') {
        const url = new URL(iterator.url);
        bookshopLnk = url.searchParams.get('url1');
      }
    }
  }

  return `<div class="shopping-card">
    <img class="book-card-image" src="${book.book_image}" alt="${book.title}" />
    <div class="book-card-info">
      <div class="card-title-container">
        <h3 class="card-title">${book.title}</h3>
        <p class="card-category">${book.list_name}</p>
        <p class="book-card-description">${book.description}</p>
      </div>
      <button class="card-remove" data-bookid="${book._id}">
        <svg width="20" height="20">
                            <use href="${removeIcon}">
                        </svg>
      </button>
      <div class="shop-author-banner">
    <p class="book-card-author">${book.author}</p>
      <ul class="shop-links-list list">
            <li class="icon-list">
              <a href="${amazonLnk}" target="_blank">
                <img src="${amazonImg}" alt="amazon" width="62" heigth="19">
              </a>
            </li>
            <li class="icon-list">
              <a href="${ibookLnk}" target="_blank">
                <img src="${ibookImg}" alt="book" width="33" heigth="32">
              </a>
            </li>
            <li class="icon-list">
              <a href="${bookshopLnk}" target="_blank">
                <img src="${bookShopImg}" alt="books" width="38" heigth="36">
              </a>
            </li>
    </div>
    </div>
    
  </div>`;
}
function emptyShopping() {
  return ` <div class="empty-shop-list">
    <p class="shop-list-text">
      This page is empty, add some books and proceed to order.
    </p>
    <div class="shopping-list-book-img"></div>
  </div>`;
}
emptyShopping();
//edited;

// Відображення списку книг
function renderBooks() {
  const savedBooks = getSavedBooks();

  if (savedBooks.length === 0) {
    emptyListImg.style.display = 'block';
    booksEl.innerHTML = '';
    // Сховати всі зображення, якщо список порожній
    imagesToHide.forEach(image => {
      image.style.display = 'none';
    });
  } else {
    const booksMarkup = savedBooks.map(book => generateBookCard(book)).join('');
    booksEl.innerHTML = booksMarkup;
    emptyListImg.style.display = 'none';
    // Відобразити всі зображення, якщо є книги в списку
    imagesToHide.forEach(image => {
      image.style.display = 'block';
    });
  }
}

// remove book
//  const userBucketNew = [];
//       for (const iterator of userBucket) {
//         if (iterator._id != curentBook._id) {
//           userBucketNew.push(iterator);
//         }
//       }
//       save('userBucket', userBucketNew);

const removeBtn = document.querySelector('.card-remove');
removeBtn.addEventListener('click', removeButton);
function removeButton(event) {
  let curentBookId = event.currentTarget.dataset.bookid;
  const userBucket = load('userBucket');
  const curentBook = [];
  const userBucketNew = userBucket.filter(
    iterator => iterator._id !== curentBookId
  );
  save('userBucket', userBucketNew);
  showBooks();
}

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? [] : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
    return [];
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
