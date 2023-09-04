const booksEl = document.querySelector('.shopping-container');

function getShoppingListBooks() {
  const savedBooks = localStorage.getItem('currentBook');
  const currentBooks = JSON.parse(savedBooks);
  const elements = createShoppingListBooks(el);
  booksEl.innerHTML = elements;
}

function createShoppingListBooks(dataList) {
  if (dataList) {
    let li = dataList
      .map(book => {
        return `<div class="shopping-list">
      <li class="" data-id="${book._id}">
        <div class="">
            <img class="" src="${book.book_image}" alt="${book.description}" loading="lazy" class="gallery__img"/>
        </div>
        <div class="">
          <h2 class="">${book.title}</h2>
          <p class="">${book.list_name}<p>
          <p class=""><p> // опис книги
          <p class="">${book.author}</p>
        </div>
      </li>
    </div>`;
      })
      .join('');
    return ' <ul class="">' + li + '</ul>';
  }
  return '<p class="shop-list-text"></p>';
}
