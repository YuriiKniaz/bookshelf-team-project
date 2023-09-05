import removeIcon from '/src/images/icons.svg#icon-remove';
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
  const {
    book_image,
    title,
    list_name,
    description,
    author,
    _id,
    amazon_product_url,
    amazonImg,
    ibookLink,
    ibookImg,
    bookshopLink,
    bookShopImg,
  } = book;
  return `<div class="shopping-card">
    <img class="book-card-image" src="${book_image}" alt="${title}" />
    <div class="book-card-info">
      <div class="card-title-container">
        <h3 class="card-title">${title}</h3>
        <p class="card-category">${list_name}</p>
        <p class="book-card-description">${description}</p>
      </div>
      <button class="card-remove" data-bookid="${_id}">
        <svg width="20" height="20">
                            <use href="${removeIcon}">
                        </svg>
      </button>
      <div class="shop-author-banner">
    <p class="book-card-author">${author}</p>
      <ul class="shop-links-list list">
            <li class="icon-list">
              <a href="${amazon_product_url}" target="_blank">
                <img src="${amazonImg}" alt="amazon" width="62" heigth="19">
              </a>
            </li>
            <li class="icon-list">
              <a href="${amazon_product_url}" target="_blank">
                <img src="${ibookImg}" alt="book" width="33" heigth="32">
              </a>
            </li>
            <li class="icon-list">
              <a href="${amazon_product_url}" target="_blank">
                <img src="${bookShopImg}" alt="books" width="38" heigth="36">
              </a>
            </li>
    </div>
    </div>
    
  </div>`;
};
function emptyShopping() {
  return ` <div class="empty-shop-list">
    <p class="shop-list-text">
      This page is empty, add some books and proceed to order.
    </p>
    <div class="shopping-list-book-img"></div>
  </div>`;
}
emptyShopping(); (edited) 

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
const load = (key) => {
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
function removeButton() {
  const userBucket = load('userBucket');
  const curentBook = [];
  const userBucketNew = userBucket.filter((iterator) => iterator._id !== curentBook._id);
  save('userBucket', userBucketNew);
}
removeBtn.addEventListener('click', removeButton);