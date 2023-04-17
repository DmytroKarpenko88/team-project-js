import * as basicLightbox from 'basiclightbox';
import { registration } from '../services/firebase';

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);

// instance.show();

const markup = `
        <div class="user-modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>`;
const container = document.querySelector('#authentication');

const modal = basicLightbox.create(markup);
// const visible = basicLightbox.visible();

container.addEventListener('click', openModal);

function openModal(e) {
  modal.show();

  window.addEventListener('keydown', closeModalHandler);

  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}

const refs = {
  form_login: document.querySelector('#login'),
  form_register: document.querySelector('#register'),
};

refs.form_login.addEventListener('submit', onLogin);
refs.form_register.addEventListener('submit', onRegister);

function onLogin(e) {
  e.preventDefault();
  const {
    elements: { logemail, logpass },
  } = e.currentTarget;
  alert(`Login: ${logemail.value}, Password: ${logpass.value}`);
  refs.form_login.reset();
}

function onRegister(e) {
  e.preventDefault();
  const {
    elements: { logname, logemail, logpass },
  } = e.currentTarget;
  let email = logemail.value;
  let password = logpass.value;
  let userName = logname.value;
  registration(email, password, userName);
  console.log(
    `User Name: ${logname.value},  Login: ${logemail.value}, Password: ${logpass.value}`
  );
}
