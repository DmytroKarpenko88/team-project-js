const noneCardList = document.querySelector('.gallery');
const blockEmptyLib = document.querySelector('.library-gallery');

export function libraryPageNotCard() {
  try {
    noneCardList.innerHTML = "";
    blockEmptyLib.classList.add('active');
  } catch (err) {}
}
