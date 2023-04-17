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
