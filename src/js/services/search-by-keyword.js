import { serviceApi } from './service-api';
import {
  renderListMovies,
  setFilmsToLocalStorage,
} from '../events/renderGalleryCard';
import { pagination } from '../pagination';
// import { loader }

const searchForm = document.querySelector('#search-form');
const pag = document.querySelector('#pagination');

searchForm.addEventListener('submit', onSearchByKeyword);

let query;

async function onSearchByKeyword(e) {
  e.preventDefault();

  query = e.target.searchQuery.value.trim();
  if (!query) {
    return;
  }
  let page = 1;

  const res = await serviceApi.searchMovie(query);
  console.log(res);
  setFilmsToLocalStorage(res.listMovies);
  renderListMovies(res['listMovies']);

  if (page === 1) {
    pag.style.display = 'visible';
  } else {
    pag.style.display = 'block';
  }

  pagination.on('afterMove', res);

  // функція, яка буде показувати лоадер
}
