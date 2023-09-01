import axios from 'axios';

const URL = 'https://books-backend.p.goit.global/books/category';
const refs = {
  bestsellersEl: document.querySelector('.bestsellers'),
  buttonEl: document.querySelector('.btn'),
};

refs.buttonEl.addEventListener('click', onClick);
async function onClick() {
  fetchBooksByCategory('Paperback Nonfiction').then(el => {
    const elements = createBookList(el);
    refs.bestsellersEl.innerHTML = elements;
  });
}

function createBookList(dataList) {
  return dataList
    .map(book => {
      return `<div class="photo-card">
      <div class="pict">
        <a href=${book.book_image} class='gallery__link'>
        <img src="${book.book_image}" alt="${book.description}" loading="lazy" class="gallery__img"/>
        </a>
      </div>
   
    <div class="info">
    </div>
    
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
