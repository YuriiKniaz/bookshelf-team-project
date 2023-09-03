const boxToggleEl = document.querySelector('.box-toggle');
const mobMenuEl = document.querySelector('.mob-menu');

boxToggleEl.addEventListener('click', onClickToggle);
function onClickToggle(event) {
  event.currentTarget.classList.toggle('active');
}

mobMenuEl.addEventListener('click', onClickMobMenu);
function onClickMobMenu(event) {
  event.currentTarget.classList.toggle('active');
}
