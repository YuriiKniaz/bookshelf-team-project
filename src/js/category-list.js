import axios from 'axios';

const CATURL = 'https://books-backend.p.goit.global/books/category-list';
const menuCategory = document.querySelector('.categories-list');
const firstItem = document.querySelector('#all-cat-li');

function createCategoryList(dataList) {
  return dataList
    .map(lishka => {
      return `<li class="categories-item">
          <a href="" class="categories-btn" data-category="${lishka.list_name}">${lishka.list_name}</a>
        </li>`;
    })
    .join('');
}
window.addEventListener('load', () => {
  firstItem.click();
  fetchCategoryList()
    .then(el => {
      const markup = createCategoryList(el);
      menuCategory.insertAdjacentHTML('beforeend', markup);
    })
    .catch();
});

export async function fetchCategoryList() {
  try {
    const response = await axios.get(CATURL);
    const dataPromise = response.data;
    return dataPromise;
  } catch (err) {
    console.log('FETCH ERROR: ' + err);
  }
}
