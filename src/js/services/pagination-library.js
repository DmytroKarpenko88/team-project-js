// Sample array of movies in Watched list

const watchedMovies = [
  {
    title: 'TOPGUN',
    vote_average: 7.5,
    vote_count: 1000,
    popularity: 123.45,
    original_title: 'Original Title 1',
    genres: ['Drama', 'Action'],
    overview: 'good kino',
    poster_path: null,
  },
  {
    title: 'Jurasic Park',
    vote_average: 8.0,
    vote_count: 1500,
    popularity: 234.56,
    original_title: 'Original Title 2',
    genres: ['Comedy', 'Adventures'],
    overview: 'fantastic kino',
    poster_path: null,
  },
  {
    title: 'Gone',
    vote_average: 6.5,
    vote_count: 800,
    popularity: 345.67,
    original_title: 'Original Title 3',
    genres: ['Horror', 'Thriller'],
    overview: 'Опис фільму 3',
    poster_path: null,
  },
];

const watchedString = JSON.stringify(watchedMovies);
localStorage.setItem('watchedMovies', watchedString);

// Sample array of movies in Queue list

const queueMovies = [
  {
    title: 'American Express',
    vote_average: 7.5,
    vote_count: 1000,
    popularity: 123.45,
    original_title: 'Original Title 1',
    genres: ['Drama', 'Action'],
    overview: 'good kino',
    poster_path: null,
  },
  {
    title: 'To the Moon and Back',
    vote_average: 8.0,
    vote_count: 1500,
    popularity: 234.56,
    original_title: 'Original Title 2',
    genres: ['Comedy', 'Adventures'],
    overview: 'fantastic kino',
    poster_path: null,
  },
  {
    title: 'Hannibal',
    vote_average: 6.5,
    vote_count: 800,
    popularity: 345.67,
    original_title: 'Original Title 3',
    genres: ['Horror', 'Thriller'],
    overview: 'Опис фільму 3',
    poster_path: null,
  },
];

const queueString = JSON.stringify(queueMovies);
localStorage.setItem('queueMovies', queueString);

// =========================================================
// =========================================================
// =========================================================

const storedWatchedMovies = JSON.parse(localStorage.getItem('watchedMovies'));

const itemsPerPage = 10;
const totalPages = Math.ceil(storedWatchedMovies.length / itemsPerPage);
const currentPage = 1;

const prevButton = document.querySelector('#prevButton');
const firstPageButton = document.querySelector('#firstPageButton');
const prev5Button = document.querySelector('#prev5Button');
const pageNumberButtons = document.querySelectorAll('.pageNumberButton');
const next5Button = document.querySelector('#next5Button');
const totalPagesButton = document.querySelector('#totalPagesButton');
const nextButton = document.querySelector('#nextButton');

prevButton.addEventListener('click', goToPrevPage);
firstPageButton.addEventListener('click', goToFirstPage);
prev5Button.addEventListener('click', goToPrev5Pages);
next5Button.addEventListener('click', goToNext5Pages);
nextButton.addEventListener('click', goToNextPage);

function goToPrevPage() {
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
  }
}

function goToFirstPage() {
  if (currentPage !== 1) {
    currentPage = 1;
    updatePagination();
  }
}

function goToPrev5Pages() {
  if (currentPage > 5) {
    currentPage -= 5;
    updatePagination();
  } else {
    goToFirstPage();
  }
}

function goToNext5Pages() {
  if (currentPage + 5 <= totalPages) {
    currentPage += 5;
    updatePagination();
  } else {
    goToLastPage();
  }
}

function goToNextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    updatePagination();
  }
}

function goToPage(event) {
  currentPage = parseInt(event.target.textContent);
  updatePagination();
}

function goToLastPage() {
  currentPage = totalPages;
  updatePagination();
}

pageNumberButtons.forEach(button => {
  button.addEventListener('click', goToPage);
});

function updatePagination() {
  if (currentPage === 1) {
    prevButton.classList.add('disabled');
    firstPageButton.classList.add('disabled');
  } else {
    prevButton.classList.remove('disabled');
    firstPageButton.classList.remove('disabled');
  }

  if (currentPage === totalPages) {
    nextButton.classList.add('disabled');
  } else {
    nextButton.classList.remove('disabled');
  }

  pageNumberButtons.forEach(button => {
    const pageNumber = parseInt(button.textContent);
    if (pageNumber === currentPage) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });

  totalPagesButton.textContent = totalPages;

  if (currentPage > 5) {
    prev5Button.style.display = 'inline-block';
  } else {
    prev5Button.style.display = 'none';
  }

  if (currentPage + 4 < totalPages) {
    next5Button.style.display = 'inline-block';
  } else {
    next5Button.style.display = 'none';
  }
}
