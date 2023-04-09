const backdrop = document.querySelector('[data-modal]')
const openButtonModal = document.querySelector('[data-modal-open]')
const closeButtonModal = document.querySelector('[data-modal-close]')
const body = document.querySelector('body')


openButtonModal.addEventListener('click', onOpenButtonClick)
closeButtonModal.addEventListener('click', onCloseButtonClick)
backdrop.addEventListener('click', onBackdropClicl)


function onOpenButtonClick() {
  backdrop.classList.remove('is-hidden')
  window.addEventListener('keydown', closeModalByEscape)
  body.style.overflow = 'hidden'

}

function onCloseButtonClick()  {
  backdrop.classList.add('is-hidden')
  window.removeEventListener('keydown', closeModalByEscape)
  body.style.overflow = 'scroll'
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
 
