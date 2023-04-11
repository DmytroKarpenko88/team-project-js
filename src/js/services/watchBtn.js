import libraryPageNotCard from '../events/libraryPageNotCard'
libraryPageNotCard()


const refs = {
  btnWatched: document.querySelector('#btn__watched'),
  btnQueue: document.querySelector('#btn__queue'),
};
 refs.btnWatched.addEventListener('click', onClickBtn);
 refs.btnQueue.addEventListener('click', onClickBtn);


function onLibrary() {
  const reference = {
    btnList: document.querySelector('.libr'),
  };
  refs.filterContainer.classList.add('is-hidden');
  reference.btnList.classList.remove('visually-hidden');
  refs.filterWrapper.classList.add('visually-hidden');
  reference.btnList.addEventListener('click', onClickBtn);

  renderPageLibrary();
  onCheckButtonLibrary();
}

 function onClickBtn(event) {
    if (event.target === refs.btnWatched) {
      event.target.classList.add('.current-page');
      refs.btnQueue.classList.remove('.current-page');
      smoothScroll();
      renderWatched();
    } else if (event.target === refs.btnQueue) {
      event.target.classList.add('.current-page');
      refs.btnWatched.classList.remove('.current-page');
      smoothScroll();
      renderQueue();
    }
  };

  function renderPageLibrary() {
    const refs = {
      home: document.querySelector('.header__nav '),
      btnHome: document.querySelector('.home'),
      btnLibrary: document.querySelector('#btn__watched'),
      header: document.querySelector('.header'),
    };
  
    refs.home.classList.add('header__library');
  }

  const addToStorage = (key, value) => {
    try {
      if (typeof value === 'string') {
        localStorage.setItem(key, value);
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getFromStorage = key => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromStorage = key => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };