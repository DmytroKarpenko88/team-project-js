import { serviceApi } from './service-api';
import {
  renderListMovies,
  setFilmsToLocalStorage,
} from '../events/renderGalleryCard';
import { pagination } from '../pagination';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', onSearchByKeyword);
let totalResults;
let query;

async function onSearchByKeyword(e) {
  e.preventDefault();

  query = e.target.searchQuery.value.trim();
  if (!query) {
    return Notify.failure('Please, type something');
  }

  try {
    const res = await serviceApi.searchMovie(query);

    setFilmsToLocalStorage(res.listMovies);
    renderListMovies(res['listMovies']);

    pagination._options.totalItems = res.totalResults;
    pagination.reset(res.totalResults);
    pagination.off();
  } catch (err) {
    console.error(err.message);
  }

  pagination.on('afterMove', event => {
    const currentPage = event.page;

    serviceApi
      .searchMovie(query, currentPage)
      .then(res => {
        return renderListMovies(res['listMovies']);
      })
      .catch(console.error);

    window.scrollTo(0, 0);
  });
}
