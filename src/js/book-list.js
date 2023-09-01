import axios from 'axios';

const URL = 'https://books-backend.p.goit.global/books/category';
const refs = {
  booksEl: document.querySelector('.book-list'),
  buttonEl: document.querySelector('.btn'),
  categoryEl: document.querySelector('h1.category-name'),
};

refs.buttonEl.addEventListener('click', onClick);
async function onClick() {
  refs.categoryEl.innerHTML = `Paperback <span class="category-name-accent">Nonfiction</span>`;
  fetchBooksByCategory('Paperback Nonfiction').then(el => {
    const elements = createBookList(el);
    refs.booksEl.innerHTML = elements;
  });
}

function createBookList(dataList) {
  return dataList
    .map(book => {
      return `<div class="photo-card">
      <li class="book-content" data-id="">
        <a href=${book.book_image} class='book-link link'>
        <div class="book-img-wrapper">
            <img src="${book.book_image}" alt="${book.description}" loading="lazy" class="gallery__img" width="180"/>
        </div>
        <div class="book-wrapper">
          <h2 class="book-name">${book.title}</h2>
          <p class="book-author">${book.author}</p>
        </div>
        </a>
      </li>
    </div>`;
    })
    .join('');
}
export async function fetchBooksByCategory(category) {
  try {
    const response = await axios.get(URL, {
      params: {
        category: category,
      },
    });
    const dataPromise = response.data;

    // return it
    return dataPromise;
  } catch (err) {
    console.log('FETCH ERROR: ' + err);
  }
}