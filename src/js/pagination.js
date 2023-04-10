import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import { serviceApi } from './services/service-api';
import {
  renderListMovies,
  setFilmsToLocalStorage,
} from './events/renderGalleryCard';

const container = document.querySelector('#pagination');
const options = {
  totalItems: 20000,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn current-color tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

export const pagination = new Pagination(container, options);

pagination.on('afterMove', event => {
  const currentPage = event.page;
  console.log(currentPage);
  serviceApi
    .getListMovies('week', currentPage)
    .then(res => {
      renderListMovies(res.listMovies);
      setFilmsToLocalStorage(res.listMovies);
    })
    .catch(error => console.log(error));
});
