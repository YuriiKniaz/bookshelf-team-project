const refs = {
  authModal: document.querySelector('.registration'),
  btnOpen: document.querySelector('.avatar-button'),
  form: document.querySelector('.form'),
  btnClose: document.querySelector('.close-btn'),
  mainBtn: document.querySelector('.form-main-btn'),
  btnSignUp: document.querySelector('.sign-up-btn'),
  btnSignIn: document.querySelector('.sign-in-btn'),
  inputsList: document.querySelector('.list'),
  popup: document.querySelector('.registration-window'),
  svgIcons: document.querySelectorAll('.form-icon'),
};
let onSignIn = null;
const messageIcon = refs.svgIcons[0];
const lockIcon = refs.svgIcons[1];

refs.btnOpen.addEventListener('click', showModalAuth);
refs.btnClose.addEventListener('click', closeModalAuth);
refs.form.addEventListener('submit', showData);

function showModalAuth() {
  document.body.style.overflowY = 'hidden';
  refs.authModal.classList.remove('is-hidden');
}
function closeModalAuth() {
  document.body.style.overflowY = 'visible';
  refs.authModal.classList.add('is-hidden');
}
function showData(e) {
  e.preventDefault();
  closeModalAuth();
}

refs.btnSignIn.addEventListener('click', showSignInMarkup);
refs.btnSignUp.addEventListener('click', showSignUpMarkup);

function showSignInMarkup() {
  if (onSignIn) {
    return;
  }
  refs.form.innerHTML = markupSignIn(messageIcon, lockIcon);
  refs.popup.classList.add('signin');
  onSignIn = true;
  refs.btnSignIn.classList.add('active-btn');
  refs.btnSignUp.classList.remove('active-btn');
}
function showSignUpMarkup() {
  if (!onSignIn) {
    return;
  }
  refs.form.innerHTML = markupSignUp(messageIcon, lockIcon);
  refs.popup.classList.remove('signin');
  refs.btnSignUp.classList.add('active-btn');
  refs.btnSignIn.classList.remove('active-btn');

  onSignIn = false;
}

function markupSignIn(iconMessage, iconLock) {
  return `<form class="form form-sign-in">
      <ul class="form-list">
        <li class="input-container">
          <input
            class="form-input"
            id="user-email"
            type="email"
            name="user_email"
            placeholder="Email"
            required
          />
          ${iconMessage.outerHTML}
        </li>
        <li class="input-container">
          <input
            class="form-input"
            id="user-password"
            type="password"
            name="user_password"
            placeholder="Password"
            required
          />
          ${iconLock.outerHTML}
        </li>
      </ul>

      <button class="form-main-btn" type="submit">Sign In</button>
    </form>`;
}
function markupSignUp(iconMessage, iconLock) {
  return `<form class="form form-sign-in">
      <ul class="sign-up-list form-list">
        <li class="input-container">
          <input
            class="form-input"
            type="text"
            name="user-name"
            placeholder="Name"
            required
          />
        </li>
        <li class="input-container">
          <input
            class="form-input"
            id="user-email"
            type="email"
            name="user_email"
            placeholder="Email"
            required
          />
          ${iconMessage.outerHTML}
        </li>
        <li class="input-container">
          <input
            class="form-input"
            id="user-password"
            type="password"
            name="user_password"
            placeholder="Password"
            required
          />
          ${iconLock.outerHTML}
        </li>
      </ul>

      <button class="form-main-btn" type="submit">Sign up</button>
    </form>`;
}
