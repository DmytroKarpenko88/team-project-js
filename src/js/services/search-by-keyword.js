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

  const res = await serviceApi.searchMovie(query);
  console.log(res);
  setFilmsToLocalStorage(res.listMovies);
  renderListMovies(res['listMovies']);

  
  pagination.reset(res.total_pages);
  pagination.on('afterMove', event => {
    const currentPage = event.page;
    if (onSearchByKeyword) {
      serviceApi.searchMovie(query, currentPage).then(res => {
        return renderListMovies(res['listMovies']);
      });
    } else {
      serviceApi
        .getListMovies('week', currentPage)
        .then(res => renderListMovies(res.listMovies));
    }
    window.scrollTo(0, 0);
  });

  // функція, яка буде показувати лоадер
}
