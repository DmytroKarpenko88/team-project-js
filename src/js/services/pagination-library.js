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
console.log('storedWatchedMovies:', storedWatchedMovies);

const itemsPerPage = 10;
const totalPages = Math.ceil(storedWatchedMovies.length / itemsPerPage);
const currentPage = 1;
function displayMovies(page) {
  moviesList.innerHTML = '';

  // Обчислюємо початковий та кінцевий індекси елементів для поточної сторінки
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Виводимо фільми на поточній сторінці
  for (
    const i = startIndex;
    i < endIndex && i < storedWatchedMovies.length;
    i++
  ) {
    const movie = storedWatchedMovies[i];
    const listItem = document.createElement('li');
    listItem.textContent = movie.title;
    moviesList.appendChild(listItem);
  }

  // Виводимо пагінацію
  // const pagination = document.querySelector('.pagination');

  // pagination.innerHTML = '';

  // Додаємо кнопки "Попередня" та "Наступна" до пагінації
  const prevButton = document.createElement('button');
  prevButton.textContent = 'Попередня';
  prevButton.addEventListener('click', function () {
    if (currentPage > 1) {
      currentPage--;
      displayMovies(currentPage);
    }
  });
  pagination.appendChild(prevButton);

  const nextButton = document.createElement('button');
  nextButton.textContent = 'Наступна';
  nextButton.addEventListener('click', function () {
    if (currentPage < totalPages) {
      currentPage++;
      displayMovies(currentPage);
    }
  });
  pagination.appendChild(nextButton);

  // Виводимо номер поточної сторінки та загальну кількість сторінок
  const pageInfo = document.createElement('');
  pageInfo.textContent = 'Сторінка ' + currentPage + ' з ' + totalPages;
  pagination.appendChild(pageInfo);
}
