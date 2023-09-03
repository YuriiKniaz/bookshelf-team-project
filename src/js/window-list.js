const refs = {
  borderModal: document.querySelector('.backdrop'),
  btnClose: document.querySelector('.btn-close'),
  addBook: document.querySelector('#addBookBtn'),
  prgFinal: document.querySelector('.prg-final'),
};

let isAdded = null;

refs.btnClose.addEventListener('click', closeBackdrop);
refs.addBook.addEventListener('click', onChangeText);

function openWindow() {
  borderModal.style.display = 'block';
}

function closeBackdrop() {
  document.body.style.overflowY = 'visible';
  refs.borderModal.classList.add('is-hidden');
}

function onChangeText() {
  if (isAdded) {
    refs.addBook.textContent = 'Add to shopping list';
    refs.prgFinal.classList.add('is-hidden');
    isAdded = null;
    return;
  }
  refs.addBook.textContent = 'Remove from the shopping list';
  isAdded = 'yes';
  refs.prgFinal.classList.remove('is-hidden');
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeBackdrop();
  }
});

document.addEventListener('click', function (event) {
  if (event.target === 'borderModal') {
    closeBackdrop();
  }
});
