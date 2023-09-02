const refs = {
  authModal: document.querySelector('.registration'),
  btnOpen: document.querySelector('.right-col'),
  form: document.querySelector('.form'),
  btnClose: document.querySelector('.close-btn'),
  mainBtn: document.querySelector('.form-btn'),
  btnSignUp: document.querySelector('.sign-up'),
  btnSignIn: document.querySelector('.sign-in'),
  inputsList: document.querySelector('.list'),
  popup: document.querySelector('.registration-window'),
};

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

refs.btnSignIn.addEventListener('click', showMarkup);

function showMarkup() {
  refs.form.innerHTML = markupSignIn();
  refs.popup.classList.add('signin');
}

function markupSignIn() {
  return `<form class="form form-sign-in">
      <ul class="list">
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

      <button class="form-btn" type="submit">Sign In</button>
    </form>`;
}
