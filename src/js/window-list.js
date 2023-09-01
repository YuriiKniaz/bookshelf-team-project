const backdrop = document.getElementById('backdrop ');
const btn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('.btn-close')[0];
const addBookBtn = document.getElementById('btn-add-submit');
const removeBookBtn = document.getElementById('btn-remove-submit');
// openButton.addEventListener('click', () => {
//   backdrop.style.display = 'block';
// });

// closeBtn.addEventListener('click', () => {
//   backdrop.style.display = 'none';
// });

// відкриття
btn.addEventListener('click', function () {
  backdrop.style.display = 'block';
});

// Закриття
closeBtn.addEventListener('click', function () {
  backdrop.style.display = 'none';
});

// Закриття модального вікна, поза ним
window.addEventListener('click', function (event) {
  if (event.target == backdrop) {
    backdrop.style.display = 'none';
  }
});
// Додавання книги
addBookBtn.addEventListener('click', function () {
  alert('Додано книгу');
});

// Видалення книги
removeBookBtn.addEventListener('click', function () {
  alert('Видалено книгу');
});
