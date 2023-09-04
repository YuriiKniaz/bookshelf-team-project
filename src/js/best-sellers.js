import axios from 'axios';

const TOPBOOKS_URL = 'https://books-backend.p.goit.global/books/top-books';
async function fetchTopBooks() {
  try {
    const response = await axios.get(TOPBOOKS_URL);
    return response.data.map(({ list_name, books }) => {
      return {
        list_name,
        books,
      };
    });
  } catch (error) {
    ('Sorry, there are no books in this category');
  }
}
const refs = {
  bestsellersEl: document.querySelector('.book-list-container'),
  buttonEl: document.querySelector('#all-cat-li'),
  bookList: document.querySelector('.book-list'),
  home: document.getElementById('bestsellers'),
  body: document.querySelector('body'),
  categoryName: document.querySelector('.category-name'),
  seeMoreBtn: document.querySelector('.seemorebtn'),
};

refs.home.addEventListener('click', onHomeB);
function onHomeB(e) {
  e.preventDefault();
  refs.categoryName.innerHTML = `Best Sellers <span class="category-name-accent">Books</span>`;
  onClickBestsellers();
}

refs.buttonEl.addEventListener('click', onClickBestsellers);
async function onClickBestsellers() {
  const listEl = await fetchTopBooks();
  const elements = createBestsellers(listEl);
  refs.bestsellersEl.innerHTML = elements;
  refs.bestsellersEl.addEventListener('click', onBookClick);

    function onBookClick(evt) {
      evt.preventDefault();
      const { id, list_name } = evt.target.closest('li').dataset; //
      const searchList = listEl.find(({ list_name: listName }) => listName === list_name);
      const currentBook = searchList.books.find(({ _id: bookId }) => bookId === id);// отримаємо ID 'li' по якому клікнули

      function addCuurentBook(currentBook) {
        localStorage.setItem('currentBook', JSON.stringify(currentBook)); // записуємо в localStorage об'єкт книги, яку вибрали
      }
      addCuurentBook(currentBook);

      const modalWindow = document.getElementById('myWindow');

      modalWindow.classList.remove('is-hidden'); // відкриваєм модалку
    }
}


function createBestsellers(data) {
  return data
    .map(({ list_name, books }) => {
      return `<div class="wrapper-bestsellers"><h2 class="category-list-title">${list_name}</h2>
            <ul class="category-list">
        <li class="category-item" data-id="${books[0]._id}" data-list_name="${books[0].list_name}"><a class="link" href=""><div class="book-card"><div class="overlay-wrapper"><img class="item-image" src="${books[0].book_image}" alt="${books[0].title}" loading="lazy" ><p class="overlay">QUICK VIEW</p></div><div class="item-text"><h3 class="item-title">${books[0].title}</h3><p class="item-author">${books[0].author}</p></div></div></a></li>
        <li class="category-item mobile-h" data-id="${books[1]._id}" data-list_name="${books[1].list_name}"><a class="link" href=""><div class="book-card"><div class="overlay-wrapper"><img class="item-image" src="${books[1].book_image}" alt="${books[1].title}" loading="lazy" ><p class="overlay">QUICK VIEW</p></div><div class="item-text"><h3 class="item-title">${books[1].title}</h3><p class="item-author">${books[1].author}</p></div></div></a></li>
        <li class="category-item mobile-h" data-id="${books[2]._id}" data-list_name="${books[2].list_name}"><a class="link" href=""><div class="book-card"><div class="overlay-wrapper"><img class="item-image" src="${books[2].book_image}" alt="${books[2].title}" loading="lazy" ><p class="overlay">QUICK VIEW</p></div><div class="item-text"><h3 class="item-title">${books[2].title}</h3><p class="item-author">${books[2].author}</p></div></div></a></li>
        <li class="category-item mobile-h tablet-h " data-id="${books[3]._id}" data-list_name="${books[3].list_name}"><a class="link" href=""><div class="book-card"><div class="overlay-wrapper"><img class="item-image" src="${books[3].book_image}" alt="${books[3].title}" loading="lazy" ><p class="overlay">QUICK VIEW</p></div><div class="item-text"><h3 class="item-title">${books[3].title}</h3><p class="item-author">${books[3].author}</p></div></div></a></li>
        <li class="category-item mobile-h tablet-h " data-id="${books[4]._id}" data-list_name="${books[4].list_name}"><a class="link" href=""><div class="book-card"><div class="overlay-wrapper"><img class="item-image" src="${books[4].book_image}" alt="${books[4].title}" loading="lazy" ><p class="overlay">QUICK VIEW</p></div><div class="item-text"><h3 class="item-title">${books[4].title}</h3><p class="item-author">${books[4].author}</p></div></div></a></li>
        </ul>
        <button type="button" class="seemorebtn" data-category="${list_name}">See more</button></div>`;
    })
    .join('');
}
