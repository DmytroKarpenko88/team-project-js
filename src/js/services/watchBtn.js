

import {libraryPageNotCard} from '../events/libraryPageNotCard';



// libraryPageNotCard();

import { renderListMovies } from '../events/renderGalleryCard';
// import smoothScroll from '../events/scrollUp';

const LIST_WATCHED = 'watchedMovies';
const LIST_QUEUE = 'listQueue';
const baseActive = LIST_WATCHED;

const blkCtrlLib = document.querySelector('.js-blockCtrlLib');

if (Object.keys(JSON.parse(localStorage.getItem(baseActive))).length > 0) {
  const listMovies = getArrayFromObjMovies(baseActive);
  setActiveButton(baseActive);
  renderListMovies(listMovies);
} else {
  libraryPageNotCard();
}

function setActiveButton(typeList) {
  const opts = {
    btn__watched: LIST_WATCHED,
    btn__queue: LIST_QUEUE,
  };

  Object.entries(opts).forEach(item => {
    const currentBtn = document.querySelector(`#${item[0]}`);
    if (item[1] === typeList) {
      currentBtn.classList.add('active');
      currentBtn.disabled = true;
    } else {
      currentBtn.classList.remove('active');
      currentBtn.disabled = false;
    }
  });
}

if (blkCtrlLib) {
  blkCtrlLib.addEventListener('click', onClickBtn);
}

export function getArrayFromObjMovies(fieldLocalStorage) {
  const objMovies = JSON.parse(localStorage.getItem(fieldLocalStorage));
  return Object.entries(objMovies).map(item => ({id: +item[0], ...item[1]}));
}

function onClickBtn(event) {
  event.preventDefault();
  const target = event.target;

  let type = null;
  let listMovies = null;

  if (target.closest('#btn__watched')) {
    type = LIST_WATCHED;
    setActiveButton(LIST_WATCHED);
  }
  if (target.closest('#btn__queue')) {
    type = LIST_QUEUE;
    setActiveButton(LIST_QUEUE);
  }

  if (type) {
    switch (type) {
      case LIST_WATCHED:
        listMovies = getArrayFromObjMovies(LIST_WATCHED);
        break;
      case LIST_QUEUE:
        listMovies = getArrayFromObjMovies(LIST_QUEUE);
        break;
    }
  }

  renderListMovies(listMovies);
};


