import removeIcon from '/src/images/icons.svg#icon-remove';

// Отримання посилань на елементи DOM
const booksEl = document.querySelector('.shopping-container');
const emptyListImg = document.querySelector('.empty-shop-list');
const imagesToHide = document.querySelectorAll('.shopping-list-book-img'); // Отримати всі зображення, які потрібно сховати

// Отримання збережених книг з localStorage
function getSavedBooks() {
const savedBooks = localStorage.getItem('userBucket'); 
  if (savedBooks) {
    return JSON.parse(savedBooks);
  }
  return [];
}

// Створення HTML-розмітки для книги
function generateBookCard(book) {
  const { book_image, title, list_name, description, author, _id } = book;
  return `<div class="book-card">
    <img class="book-card-image" src="${book_image}" alt="${title}" />
    <div class="book-card-info">
      <div class="card-title-container">
        <h3 class="card-title">${title}</h3>
        <p class="card-category">${list_name}</p>
      </div>
      <button class="card-remove" data-bookid="${_id}">
        <svg width="20" height="20">
                            <use href="${removeIcon}">
                        </svg>
      </button>
    </div>
    <p class="book-card-description">${description}</p>
    <p class="book-card-author">Author: ${author}</p>
  </div>`;
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



// Обробник кліку на кнопці видалення
// function handleRemoveBook(event) {
//   // Код обробки кліку на кнопці видалення тут
// }

// Видалення книги зі списку корзини
// function removeBookFromList(bookId) {
//   // Код видалення книги зі списку тут
// }

// // Виклик функції для відображення списку книг при завантаженні сторінки
// document.addEventListener('DOMContentLoaded', renderBooks);

// // Виклик функції handleRemoveBook при кліку
// document.querySelector('.card-remove').addEventListener('click', handleRemoveBook);
