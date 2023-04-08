const backdrop = document.querySelector('[data-modal]')
const openButtonModal = document.querySelector('[data-modal-open]')
const closeButtonModal = document.querySelector('[data-modal-close]')


openButtonModal.addEventListener('click', onOpenButtonClick)
closeButtonModal.addEventListener('click', onCloseButtonClick)
backdrop.addEventListener('click', onBackdropClicl)


function onOpenButtonClick() {
  backdrop.classList.remove('is-hidden')
  window.addEventListener('keydown', closeModalByEscape)
  console.log('csdc')
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
 
