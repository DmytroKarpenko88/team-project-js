import { serviceApi } from './service-api';
import { renderMovieCards } from '../events/renderGalleryCard';
import { pagination } from '../pagination';
// import { loader }

const searchForm = document.querySelector('.header__input');
const pag = document.querySelector('#pagination');

searchForm.addEventListener('submit', onSearchByKeyword);

let query;

function onSearchByKeyword(e) {
  // console.log(5);
  e.preventDefault();

  query = e.target.value.trim();
  if (!query) {
    return;
  }
  let page = 1;

  serviceApi.searchMovie(query).then(res => res);

  renderMovieCards(res);

  if (page === 1) {
    pag.style.display = 'none';
  } else {
    pag.style.display = 'block';
  }

  pagination.on();

  // сповіщення, якщо будемо додавати (якщо будемо, то підключи, будь ласка, бібліотеку нотіфай)
  // функція, яка буде показувати лоадер
}
