const backdrop = document.querySelector('[data-modal]')
const openButtonModal = document.querySelector('.gallery');
const closeButtonModal = document.querySelector('[data-modal-close]')
const body = document.querySelector('body');
const modal = document.querySelector('.modal');

const BTN_WATCHED_ADD = 'add to Watched';
const BTN_WATCHED_REMOVE = 'remove from Watched';
const BTN_QUEUE_ADD = 'add to queue';
const BTN_QUEUE_REMOVE = 'remove from queue';

let dataMovie = null;

openButtonModal.addEventListener('click', onOpenButtonClick)
closeButtonModal.addEventListener('click', onCloseButtonClick)
backdrop.addEventListener('click', onBackdropClicl)
modal.addEventListener('click', handleClickModal);

function onOpenButtonClick(e) {
  e.preventDefault();
  const currentMovie = e.target.closest('[data-modal-open]');

  if (currentMovie) {
    backdrop.classList.remove('is-hidden');
    window.addEventListener('keydown', closeModalByEscape);
    body.style.overflow = 'hidden';
    renderPopupBody(currentMovie.dataset.id);
  }
}

function onCloseButtonClick()  {
  backdrop.classList.add('is-hidden')
  window.removeEventListener('keydown', closeModalByEscape)
  body.style.overflow = 'auto';
}

function onBackdropClicl(event) {
  if (event.currentTarget === event.target) {
    onCloseButtonClick()
  }
}

function closeModalByEscape(event) {
  const closeButtonEscape = 'Escape'
  if (event.code === closeButtonEscape) {
    onCloseButtonClick()
  }
}

function renderPopupBody(id) {
  dataMovie = JSON.parse(localStorage.getItem('listMovies'))[id];
  // localStorage.getItem('listWatched') || localStorage.setItem('listWatched', JSON.stringify({}));
  // localStorage.getItem('listQueue') || localStorage.setItem('listQueue', JSON.stringify({}));

  const {
    poster,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
  } = dataMovie;

  const container = document.querySelector('.modal-content-container');

  if (container) {
    container.innerHTML = `
      <div class="modal-photo-container">
        <picture>
          <img src="${poster}" width="" class="statistick-img" alt="" />
        </picture>
      </div>
      <div class="content-modal" data-id='${id}'>
        <h2 class="modal-title">${title}</h2>
        <div class="statistic-container">
          <ul class="list">
            <li class="statistics-name">Vote / Votes</li>
            <li class="statistics-name">Popularity</li>
            <li class="statistics-name">Original Title</li>
            <li class="statistics-name">Genre</li>
          </ul>
          <ul class="list">
            <li class="statistics-value">
              <span class="statistic-vote">${vote_average}</span>/<span class="statistic-votes">${vote_count}</span>
            </li>
            <li class="statistics-value">${popularity}</li>
            <li class="statistics-value">${original_title}</li>
            <li class="statistics-value">${genres.join(', ')}</li>
          </ul>
        </div>
        <h3 class="content-modal-title">About</h3>
        <p class="content-modal">${overview}</p>
        <div class="modal-btn-container">
          <button class="modal-btn btn-add-watched" data-btn-watch>add to Watched</button>
          <button class="modal-btn btn-add-queue" data-btn-queue>add to queue</button>
        </div>
      </div>
    `;
  }
}

function handleClickModal(e) {
  const target = e.target;
  if (target.closest('[data-btn-watch]')) {
    toggleWatch(target.closest('[data-btn-watch]'));
  }
}

function isIncluded(idMovie, listLocalStorage) {
  return idMovie in listLocalStorage;
}

function toggleWatch(el) {
  // const currentID = el.closest('.content-modal').dataset.id;
  // const listWatched = JSON.parse(localStorage.getItem('listWatched')) ?? {};
  //
  // if (isIncluded(currentID, listWatched)) {
  //   delete listWatched[currentID];
  //   el.textContent = 'add to Watched';
  // } else {
  //   listWatched[currentID] = dataMovie;
  //   el.textContent = 'remove from Watched';
  // }
  //
  // localStorage.setItem('listWatched', JSON.stringify(listWatched));
}