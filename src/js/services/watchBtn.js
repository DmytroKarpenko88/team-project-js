
const refs = {
    btnWatch: document.querySelector('#watch'),
    btnQueue: document.querySelector('#queue'),
    btnAddQueue: document.querySelector('#addQueue'),
    btnAddWatch: document.querySelector('#addWatch'),
};
 refs.btnWatch.addEventListener('click', onBtnWatched);
 refs.btnQueue.addEventListener('click', onQueueBtn);
 refs.btnAddQueue.addEventListener('click', onAddQueue);
 refs.btnAddWatch.addEventListener('click', onAddWatch);

 function onBtnWatched(event) {
    if (event.target === refs.btnWatch) {
      event.target.classList.add('btn__library--active');
      refs.btnQueue.classList.remove('btn__library--active');
      smoothScroll();
      renderWatched();
    } else if (event.target === refs.btnQueue) {
      event.target.classList.add('btn__library--active');
      refs.btnWatched.classList.remove('btn__library--active');
      smoothScroll();
      renderQueue();
    }
  };
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