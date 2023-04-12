import { serviceApi } from '../services/service-api';
import { pagination } from '../pagination';
import {
  renderListMovies,
  setFilmsToLocalStorage,
} from '../events/renderGalleryCard';

async function onPagination(period) {
  const movies = await serviceApi.getListMovies(period);
 
  setFilmsToLocalStorage(movies.listMovies);
  renderListMovies(movies.listMovies);

  pagination._options.totalItems = movies.totalResults;
 
  pagination.reset(movies.totalResults);
  pagination.off();
  
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
};

const dayBtn = document.querySelector('#dayBtn');
const weekBtn = document.querySelector('#weekBtn');

dayBtn.addEventListener('click', function onClickDay() {
  dayBtn.classList.add('active');
  weekBtn.classList.remove('active');
  weekBtn.innerText = 'This Week';
 
  // Get movies for selected period and render them
  const period = 'day';
  if(weekBtn.addEventListener) {
    weekBtn.removeEventListener('click', function onClickWeek() {})
  }
  onPagination(period)  
});

weekBtn.addEventListener('click', function onClickWeek() {
  weekBtn.classList.add('active');
  dayBtn.classList.remove('active');
  dayBtn.innerText = 'Today';
 
  // Get movies for selected period and render them
  const period = 'week';
  if(dayBtn.addEventListener) {
    dayBtn.removeEventListener('click', function onClickDay() {})
  }
  onPagination(period);  
});

// Render initial movies
async function initialize() {
  // Render initial movies
  const initialPeriod = 'day';
  onPagination(initialPeriod); 
}

initialize();
