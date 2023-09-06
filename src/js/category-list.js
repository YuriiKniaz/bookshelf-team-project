import axios from 'axios';

const CATURL = 'https://books-backend.p.goit.global/books/category-list';
const menuCategory = document.querySelector('.categories-list');
const firstItem = document.querySelector('#all-cat-li');

function createCategoryList(dataList) {
  document.querySelector('.categories-btn').textContent = 'All categories';
  return dataList
    .map(lishka => {
      return `<li class="categories-item">
          <a href="" class="categories-btn" data-category="${lishka.list_name}">${lishka.list_name}</a>
        </li>`;
    })
    .join('');
}
window.addEventListener('load', async () => {
  firstItem.click();
  const el = await fetchCategoryList();
  const markup = createCategoryList(el);
      menuCategory.insertAdjacentHTML('beforeend', markup);
});

menuCategory.addEventListener('click', event => {
  const trgt = event.target.parentElement;

  if (trgt.tagName == 'LI') {
    const liItems = menuCategory.querySelectorAll('li');
    liItems.forEach(el => el.classList.remove('categories-item-current'));
    trgt.classList.add('categories-item-current');
  }
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
