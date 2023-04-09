const addToWatchedButton = document.querySelector('.btn-add-watched');

addToWatchedButton.addEventListener('click', function () {
  const watchedList = JSON.parse(localStorage.getItem('watchedMovies')) || [];
  console.log('watchedList:', watchedList);

  const newMovie = {
    title: 'oneLove',
    vote_average: 7.5,
    vote_count: 1000,
    popularity: 123.45,
    original_title: 'Original Title 1',
    genres: ['Drama', 'Action'],
    overview: 'good kino',
    poster_path: null,
  };

  watchedList.push(newMovie);

  localStorage.setItem('watchedMovies', JSON.stringify(watchedList));

  alert('Movie added to Watched!');
});
