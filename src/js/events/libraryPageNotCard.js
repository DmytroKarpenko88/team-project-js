const noneCardList = document.querySelector('.gallery');
const blockEmptyLib = document.querySelector('.library-gallery');

export function libraryPageNotCard() {
  noneCardList.innerHTML = `
  <li class="library-gallery">
    <div class="container library-gallery__wrap">
      <img class="library-gallery__image" src="./images/library-img/film2.png" alt="" width="750"/>
      <p class="library-gallery__text">The library is empty.</p>
      <p class="library-gallery__text">Add some movies.</p>
    </div>
  </li>
`;
  // noneCardList.classList.add('library-gallery');
  try {
    noneCardList.innerHTML = '';
    blockEmptyLib.classList.add('active');
  } catch (err) {}
}
