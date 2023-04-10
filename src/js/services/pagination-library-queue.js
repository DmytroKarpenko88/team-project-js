import Pagination from 'tui-pagination';

const listQueue = JSON.parse(localStorage.getItem('listQueue'));

const totalItems = listQueue ? Object.keys(listQueue).length : 0;
const currentPage = 1;

const options = {
  totalItems: totalItems,
  itemsPerPage: 4,
  visiblePages: 5,
  page: currentPage,
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

const pagination = new Pagination('pagination', options);

pagination.on('beforeMove', function () {
  pagination.setTotalItems(totalItems);
});

pagination.setTotalItems(totalItems);
pagination.movePageTo(currentPage);
