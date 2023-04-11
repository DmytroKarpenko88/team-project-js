import { serviceApi } from './service-api';
import {
  renderListMovies,
  setFilmsToLocalStorage,
} from '../events/renderGalleryCard';
import { pagination } from '../pagination';
// import { loader }

const searchForm = document.querySelector('#search-form');

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
  pagination.off();
  // pagination.setTotalItems(res.total_results);
  pagination.on('afterMove', event => {
    const currentPage = event.page;
    
      serviceApi.searchMovie(query, currentPage).then(res => {
        if(res.page > res.totalPages) {
          alert(`Sorry, this is last page ${res.totalPages}`)
          return
        }
        return renderListMovies(res['listMovies']);
      });
     
    window.scrollTo(0, 0);
  });
 return totalItems = res.total_results;
  // функція, яка буде показувати лоадер
}
