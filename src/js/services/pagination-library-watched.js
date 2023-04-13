// import Pagination from 'tui-pagination';

// const listWatched = JSON.parse(localStorage.getItem('watchedMovies'));

// const totalItems = listWatched ? Object.keys(listWatched).length : 0;
// const currentPage = 1;

// const options = {
//   totalItems: totalItems,
//   itemsPerPage: 4,
//   visiblePages: 5,
//   page: currentPage,
//   centerAlign: true,
//   firstItemClassName: 'tui-first-child',
//   lastItemClassName: 'tui-last-child',
//   template: {
//     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//     currentPage:
//       '<strong class="tui-page-btn current-color tui-is-selected">{{page}}</strong>',
//     moveButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</a>',
//     disabledMoveButton:
//       '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</span>',
//     moreButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//       '<span class="tui-ico-ellip">...</span>' +
//       '</a>',
//   },
// };

// pagination.on('beforeMove', function (eventData) {
//   const newPage = eventData.page;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);
//   pagination.setTotalItems(totalPages * itemsPerPage);
// });

// pagination.movePageTo(currentPage);

// pagination.on('afterMove', function (eventData) {
//   const newPage = eventData.page;
//   const startIndex = (newPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const objectsToDisplay = listWatched
//     ? Object.values(listWatched).slice(startIndex, endIndex)
//     : [];
//   updateList(objectsToDisplay);
// });