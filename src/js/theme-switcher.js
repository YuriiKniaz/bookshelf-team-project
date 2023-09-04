const toggle = document.querySelector('.box-toggle');

function initialState(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem('theme') == 'dark-theme') {
    initialState('light-theme');
  } else {
    initialState('dark-theme');
  }
}

toggle.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  toggleTheme();
}
