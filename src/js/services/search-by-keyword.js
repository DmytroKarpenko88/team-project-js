import { serviceApi } from './service-api';
import {
  renderListMovies,
  setFilmsToLocalStorage,
} from '../events/renderGalleryCard';
import { pagination } from '../pagination';
// import { loader }

const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', onSearchByKeyword);
let totalResults;
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
  
  
  pagination._options.totalItems = res.totalResults;
  pagination.reset(res.totalResults);
  pagination.off();
  
  pagination.on('afterMove', event => {
    const currentPage = event.page;
    
      serviceApi.searchMovie(query, currentPage)
      .then(res => {return renderListMovies(res['listMovies']);
      });
     
    window.scrollTo(0, 0);
  });
  
  // функція, яка буде показувати лоадер
}

export {totalResults}

