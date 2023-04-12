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

  try {
    const res = await serviceApi.searchMovie(query);

    setFilmsToLocalStorage(res.listMovies);
    renderListMovies(res['listMovies']);

    pagination._options.totalItems = res.totalResults;
    pagination.reset(res.totalResults);
    pagination.off();

    if (!query) {
      return Notify.failure(
        'Sorry, we didn`t find anything. Please, type something'
      );
    } else if (res.totalResults < 1) {
      return Notify.failure(
        'Sorry, we didn`t find anything. Please, try again'
      );
    } else if (res.totalResults > 1) {
      return Notify.success(`Hooray, we found ${res.totalResults} films`);
    }
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
