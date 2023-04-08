import { serviceApi } from './service-api';
import { renderMovieCards } from '../events/renderGalleryCard';
import { pagination } from '../pagination';
// import { loader }

const searchForm = document.querySelector('.header__input');

searchForm.addEventListener('submit', onSearchByKeyword);

let query;

function onSearchByKeyword(e) {
  e.preventDefault();

  query = e.target.value.trim();
  if (!query) {
    return;
  }
  let page = 1;

  serviceApi.searchMovie(query);

  renderMovieCards(searchMovie());

  // сповіщення, якщо будемо додавати (якщо будемо, то підключи, будь ласка, бібліотеку нотіфай)
  // функція, яка буде показувати лоадер
  // підключаємо пагінацію
}
