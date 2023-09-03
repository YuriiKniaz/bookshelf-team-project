const refs = {
  authModal: document.querySelector('.registration'),
  btnOpen: document.querySelector('.avatar'),
  form: document.querySelector('.form'),
  btnClose: document.querySelector('.close-btn'),
  mainBtn: document.querySelector('.form-main-btn'),
  btnSignUp: document.querySelector('.sign-up-btn'),
  btnSignIn: document.querySelector('.sign-in-btn'),
  inputsList: document.querySelector('.list'),
  popup: document.querySelector('.registration-window'),
};
let onSignIn = null;

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
  refs.form.innerHTML = markupSignIn();
  refs.popup.classList.add('signin');
  onSignIn = true;
  refs.btnSignIn.classList.add('active-btn');
  refs.btnSignUp.classList.remove('active-btn');
}
function showSignUpMarkup() {
  if (!onSignIn) {
    return;
  }
  refs.form.innerHTML = markupSignUp();
  refs.popup.classList.remove('signin');
  refs.btnSignUp.classList.add('active-btn');
  refs.btnSignIn.classList.remove('active-btn');

  onSignIn = false;
}

function markupSignIn() {
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
          <svg class="form-icon" width="28" height="28">
            <use href="./images/icons.svg#icon-message"></use>
          </svg>
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
          <svg class="form-icon" width="28" height="28">
            <use href="./images/icons.svg#icon-lock"></use>
          </svg>
        </li>
      </ul>

      <button class="form-main-btn" type="submit">Sign In</button>
    </form>`;
}
function markupSignUp() {
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
          <svg class="form-icon" width="28" height="28">
            <use href="./images/icons.svg#icon-message"></use>
          </svg>
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
          <svg class="form-icon" width="28" height="28">
            <use href="./images/icons.svg#icon-lock"></use>
          </svg>
        </li>
      </ul>

      <button class="form-main-btn" type="submit">Sign up</button>
    </form>`;
}
