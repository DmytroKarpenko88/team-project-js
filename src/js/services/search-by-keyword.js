import { serviceApi } from './service-api';
import { renderMoviesCard } from '../events/renderGalleryCard';
import { pagination } from '../pagination';
// import { loader }

const searchForm = document.querySelector('.header__input');
const pag = document.querySelector('#pagination');

searchForm.addEventListener('input', onSearchByKeyword);

let query;

async function onSearchByKeyword(e) {
  console.log(5);
  e.preventDefault();

  query = e.target.value.trim();
  if (!query) {
    return;
  }
  let page = 1;

  const res = await serviceApi.searchMovie(query);
  console.log(res);

  renderMoviesCard(res);

  if (page === 1) {
    pag.style.display = 'visible';
  } else {
    pag.style.display = 'block';
  }

  pagination.on('afterMove', res);

  // сповіщення, якщо будемо додавати (якщо будемо, то підключи, будь ласка, бібліотеку нотіфай)
  // функція, яка буде показувати лоадер
}
