const backdrop = document.querySelector('[data-modal]')
// const openButtonModal = document.querySelector('[data-modal-open]')
const openButtonModal = document.querySelector('.gallery');
const closeButtonModal = document.querySelector('[data-modal-close]')


openButtonModal.addEventListener('click', onOpenButtonClick)
closeButtonModal.addEventListener('click', onCloseButtonClick)
backdrop.addEventListener('click', onBackdropClicl)


function onOpenButtonClick(e) {
  e.preventDefault();
  const currentMovie = e.target.closest('[data-modal-open]');
  if (currentMovie) {
    backdrop.classList.remove('is-hidden');
    window.addEventListener('keydown', closeModalByEscape);
    renderPopupBody(currentMovie.dataset.id);
  }
}

function onCloseButtonClick()  {
  backdrop.classList.add('is-hidden')
  window.removeEventListener('keydown', closeModalByEscape)
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
  console.log(id);
  const dataMovie = JSON.parse(localStorage.getItem('listMovies'));
  console.log(dataMovie);
  console.log(dataMovie[id]);

  const {
    poster,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
  } = dataMovie[id];

  const container = document.querySelector('.modal-content-container');
  if (container) {
    console.log(poster);
    console.log(dataMovie);
    container.innerHTML = `
      <div class="modal-photo-container">
        <picture>
          <img src="${poster}" width="" class="statistick-img" alt="" />
        </picture>
      </div>
      <div class="content-modal">
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
          <button class="modal-btn btn-add-watched">add to Watched</button>
          <button class="modal-btn btn-add-queue">add to queue</button>
        </div>
      </div>
    `;
  }
}