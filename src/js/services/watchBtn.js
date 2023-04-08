const refs = {
    btnWatch: document.querySelector('#watch'),
    btnQueue: document.querySelector('#queue'),
    btnAddQueue: document.querySelector('#addQueue'),
    btnAddWatch: document.querySelector('#addWatch'),
};
 refs.btnWatch.addEventListener('click', onWatchedBtn);
 refs.btnQueue.addEventListener('click', onQueueBtn);
 refs.btnAddQueue.addEventListener('click', onAddQueue);
 refs.btnAddWatch.addEventListener('click', onAddWatch);

 function onWatchedBtn() {

    refs.watchedBtn.classList.add('is-active');
    refs.queueBtn.classList.remove('is-active'); 
  }

