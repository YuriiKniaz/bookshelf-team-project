const toggle = document.querySelector('.box-toggle');
const logo = document.querySelector('.logo');
const amazonLogo = document.querySelector('.amazon-white');

if (localStorage.getItem('theme')) {
  document.documentElement.className = localStorage.getItem('theme');
}

replacingLogo();

function initialState(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem('theme') === 'dark-theme') {
    initialState('light-theme');
  } else {
    initialState('dark-theme');
  }
}

toggle.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  toggleTheme();
  replacingLogo();
}

function replacingLogo() {
  if (document.documentElement.className === 'dark-theme') {
    logo.lastElementChild.lastElementChild.removeAttribute('href');
    logo.lastElementChild.lastElementChild.setAttribute(
      'href',
      '/icons.adfc4680.svg#icon-logo-dark'
    );
  } else {
    logo.lastElementChild.lastElementChild.removeAttribute('href');
    logo.lastElementChild.lastElementChild.setAttribute(
      'href',
      '/icons.adfc4680.svg#icon-logo'
    );
  }
}
