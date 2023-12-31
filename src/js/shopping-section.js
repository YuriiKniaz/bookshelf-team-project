import removeIcon from '/src/images/icons.svg';
import amazonI from '/src/images/modal-img/amazon.png';
import ibookI from '/src/images/modal-img/ibook.png';
import bookShopI from '/src/images/modal-img/book-shop.png';
import amazonWhite from '../images/modal-img/amazon-white.png';
// Отримання посилань на елементи DOM
const booksEl = document.querySelector('.shopping-container');
const emptyListImg = document.querySelector('.empty-shopping-list-div');
const imagesToHide = document.querySelectorAll('.shopping-list-book-img'); // Отримати всі зображення, які потрібно сховати
const containerBooks = document.querySelector('.empty-shop-list');
const empty = emptyShopping();

// Робить активну Shopping-кнопку на сторінці Shopping List
document.querySelector('#shop-page').classList.add('active');
document.querySelector('#bestsellers').classList.remove('active');
// Отримання збережених книг з localStorage

function getSavedBooks() {
  const savedBooks = localStorage.getItem('userBucket');

  return JSON.parse(savedBooks);
}
function showBooks() {
  let arrBooks = getSavedBooks();

  if (!arrBooks) {
    return;
  }
  if (arrBooks.length > 0) {
    let shoppingListMarkup = arrBooks
      .map(book => generateBookCard(book))
      .join('');
    containerBooks.innerHTML = shoppingListMarkup;

    return;
  }
  containerBooks.innerHTML = empty;
}

showBooks();
// Створення HTML-розмітки для книги
function generateBookCard(book) {
  let amazonLnk = '';
  let ibookLnk = '';
  let bookshopLnk = '';
  if (book.buy_links) {
    for (const iterator of book.buy_links) {
      switch (iterator.name) {
        case 'Amazon':
          amazonLnk = iterator.url;
          break;
        case 'Apple Books':
          ibookLnk = iterator.url;
          break;
        case 'Bookshop':
          const url = new URL(iterator.url);
          bookshopLnk = url.searchParams.get('url1');
          break;
        default:
          break;
      }
    }
  }

  return `<div class="shopping-card">
    <img class="book-card-image" src="${book.book_image}" alt="${book.title}" loading="lazy"/>
    <div class="book-card-info">
      <div class="card-title-container">
        <h3 class="card-title">${book.title}</h3>
        <p class="card-category">${book.list_name}</p>
        <p class="book-card-description">${book.description}</p>
      </div>
      <button class="card-remove" data-bookid="${book._id}">
        
        <svg class="remove-icon" width="18" height="18">
                            <use href="${removeIcon}#icon-remove">
                        </svg>
      </button>
      <div class="shop-author-banner">
    <p class="book-card-author">${book.author}</p>
      <ul class="shop-links-list list">
            <li class="icon-list">
              <a href="${amazonLnk}" target="_blank" aria-label="Amazon book link">
               

                <img data-bleak src="${amazonI}" alt="amazon" width="62" heigth="19" loading="lazy">
                <img data-white src="${amazonWhite}" alt="amazon" width="62" heigth="19" loading="lazy">

              </a>
            </li>
            <li class="icon-list">
              <a href="${ibookLnk}" target="_blank" aria-label="IBook book link">
              
                <img src="${ibookI}" alt="book" width="33" heigth="32" loading="lazy">
              </a>
            </li>
            <li class="icon-list">
              <a href="${bookshopLnk}" target="_blank" aria-label="BookShop book link">
                
                <img src="${bookShopI}" alt="books" width="38" heigth="36" loading="lazy">
              </a>
            </li>
       </ul>
    </div>
    </div>
  </div>`;
}
function emptyShopping() {
  return ` 
    <p class="shop-list-text">
      This page is empty, add some books and proceed to order.
    </p>
    <div class="shopping-list-book-img"></div>

  `;
}

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

containerBooks.addEventListener('click', removeButton);
function removeButton(event) {
  if (event.target.tagName != 'svg') return;
  let curentBookId = event.target.parentElement.dataset.bookid;
  if (!curentBookId) return;
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
