const boxToggleEl = document.querySelector('.box-toggle');
const mobMenuEl = document.querySelector('.mob-menu');
const boxMobMenuEl = document.querySelector('.box-mob-menu');

boxToggleEl.addEventListener('click', onClickToggle);
function onClickToggle(event) {
  event.currentTarget.classList.toggle('active');
}

mobMenuEl.addEventListener('click', onClickMobMenu);
function onClickMobMenu(event) {
  event.currentTarget.classList.toggle('active');
  boxMobMenuEl.classList.toggle('active');
}

const btnBestsellers = document.querySelector('#bestsellers');
btnBestsellers.classList.add('active');
