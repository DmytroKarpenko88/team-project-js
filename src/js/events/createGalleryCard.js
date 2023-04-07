const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

// Rendering cards
export function renderMovieCards(movies, gallery) {
  const gallery = document.querySelector('.gallery');
  const movieGalleryMarkup = movies
    .map(movie => createMovieMarkup(movie))
    .join('');

  gallery && appendMarkup();

  function appendMarkup() {
    gallery.innerHTML = movieGalleryMarkup;
  }
}

// Creating cards markup
export function createGalleryMarkup(movie) {
  const { title, genre_ids, release_date, poster_path, id } = movie;

  let year = '';
  if (typeof release_date !== undefined && release_date.length > 4) {
    year = release_date.slice(0, 4);
  }

  // Get a list of movie genres
  const movieGenresList = getMovieGenresList(genre_ids).join(', ');

  // If the poster is missing, use a plug
  if (poster_path === null) {
    return `<li>
            <a class="gallery__link" href="#">
              <img class="gallery__image" data-id="${id}" src="https://dummyimage.com/395x574/000/fff.jpg&text=no+poster" alt="${title} movie poster" loading="lazy">
            
            <div class="info">
              <p class="info__item">${title}</p>
              <div class="info-detail">
                <p class="info-detail__item">${movieGenresList}</p>
                <p class="info-detail__item">${year}</p>
              </div>
            </div>
            </a>
          </li>`;
  }

  return `<li>
            <a class="gallery__link" href="#">
              <img class="gallery__image" data-id="${id}" src="${BASE_IMG_URL}${poster_path}" alt="${title} movie poster" loading="lazy">
            
            <div class="info">
              <h3 class="info__item">${title}</h3>
              <div class="info-detail">
                <p class="info-detail__item">${movieGenresList}</p>
                <p class="info-detail__item">${year}</p>
              </div>
            </div>
            </a>
          </li>`;
}

// // Get a list of ID movie genres
export function getMovieGenresList(genresIdsList) {
  let movieGenres = genres.reduce((acc, { id, name }) => {
    if (genresIdsList.includes(id)) {
      acc.push(name);
    }
    return acc;
  }, []);
  if (movieGenres.length > 3) {
    movieGenres = movieGenres.slice(0, 2);
    movieGenres.push('Other');
  }
  return movieGenres;
}
