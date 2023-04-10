import { serviceApi } from '../services/service-api';
import { pagination } from '../pagination';
import {
  renderListMovies,
  setFilmsToLocalStorage,
} from '../events/renderGalleryCard';

const dayBtn = document.querySelector('#dayBtn');
const weekBtn = document.querySelector('#weekBtn');

dayBtn.addEventListener('click', async () => {
  dayBtn.classList.add('active');
  weekBtn.classList.remove('active');
  weekBtn.innerText = 'This Week';

  // Get movies for selected period and render them
  const period = 'day';
  const movies = await serviceApi.getListMovies(period);
  setFilmsToLocalStorage(movies.listMovies);
  renderListMovies(movies.listMovies);

  pagination.reset(movies.total_pages);

  pagination.on('afterMove', (event) => {
    const currentPage = event.page;
    serviceApi
  .getListMovies(period, currentPage)
  .then(res => {
    setFilmsToLocalStorage(res.listMovies);
    renderListMovies(res.listMovies);
  })
  .catch(error => console.log(error));
   window.scrollTo(0, 0)
  });
});

weekBtn.addEventListener('click', async () => {
  weekBtn.classList.add('active');
  dayBtn.classList.remove('active');
  dayBtn.innerText = 'Today';

  // Get movies for selected period and render them
  const period = 'week';
  const movies = await serviceApi.getListMovies(period);
  setFilmsToLocalStorage(movies.listMovies);
  renderListMovies(movies.listMovies);

  pagination.reset(movies.total_pages);

  pagination.on('afterMove', (event) => {
    const currentPage = event.page;
    serviceApi
  .getListMovies(period, currentPage)
  .then(res => {
    setFilmsToLocalStorage(res.listMovies);
    renderListMovies(res.listMovies);
  })
  .catch(error => console.log(error));
   window.scrollTo(0, 0)
  });
});

// Render initial movies
async function initialize() {
  // Render initial movies
  const initialPeriod = 'day';
  const initialMovies = await serviceApi.getListMovies(initialPeriod);
  renderListMovies(initialMovies.listMovies);
}

initialize();
