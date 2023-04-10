import { serviceApi } from './service-api';
import { renderListMovies } from '../events/renderGalleryCard';
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
  // console.log(res)
  
  renderListMovies(res['listMovies']);
  

  // функція, яка буде показувати лоадер
}
