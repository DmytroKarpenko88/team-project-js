const noneCardList = document.querySelector('.gallery');

export function libraryPageNotCard() {

  noneCardList.innerHTML = `
    <li class="library-gallery">
      <div class="container library-gallery__wrap">
        <img class="library-gallery__image" src="./images/library-img/film 2.png" alt="" width="750"/>
        <p class="library-gallery__text">The library is empty.</p>
        <p class="library-gallery__text">Add some movies.</p>
      </div>
    </li>
  `;
  // noneCardList.classList.add('library-gallery');
}
