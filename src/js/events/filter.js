import { serviceApi } from '../services/service-api';
import { renderListMovies } from '../events/renderGalleryCard';

const dayBtn = document.querySelector('#dayBtn');
const weekBtn = document.querySelector('#weekBtn');

dayBtn.addEventListener('click', async () => {
  dayBtn.classList.add('active');
  weekBtn.classList.remove('active');
  weekBtn.innerText = 'This Week';

  // Get movies for selected period and render them
  const period = 'day';
  const movies = await serviceApi.getListMovies(period);
  renderListMovies(movies.listMovies);
});

weekBtn.addEventListener('click', async () => {
  weekBtn.classList.add('active');
  dayBtn.classList.remove('active');
  dayBtn.innerText = 'Today';

  // Get movies for selected period and render them
  const period = 'week';
  const movies = await serviceApi.getListMovies(period);
  renderListMovies(movies.listMovies);
});

// Render initial movies
async function initialize() {
  // Render initial movies
  const initialPeriod = 'day';
  const initialMovies = await serviceApi.getListMovies(initialPeriod);
  renderListMovies(initialMovies.listMovies);
}

initialize();
