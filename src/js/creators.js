const refs = {
  createBtn: document.querySelector('.creators-btn'),
  creatorsWindow: document.querySelector('.creators-container'),
  btnClose: document.querySelector('.creators-close-btn'),
};

refs.createBtn.addEventListener('click', showCreatorsModal);
refs.creatorsWindow.addEventListener('click', onWrapperClose);
refs.btnClose.addEventListener('click', onBtnClose);

function showCreatorsModal() {
  document.body.style.overflowY = 'hidden';
  refs.creatorsWindow.classList.remove('is-hidden');
}
function onWrapperClose(e) {
  if (!e.target.classList.contains('creators-container')) {
    return;
  }
  closeCreatorsModal();
}
function onBtnClose() {
  closeCreatorsModal();
}
function closeCreatorsModal() {
  document.body.style.overflowY = 'visible';
  refs.creatorsWindow.classList.add('is-hidden');
}
