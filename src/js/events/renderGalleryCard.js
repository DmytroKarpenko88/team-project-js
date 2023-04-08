// const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

// export function renderMovieCards(movies) {
//   const gallery = document.querySelector('.gallery');
//   const movieGalleryMarkup = movies
//     .map(movie => createMovieMarkup(movie))
//     .join('');
//   gallery.innerHTML = movieGalleryMarkup;
// }

// export function createMovieMarkup(movie) {
//   const { title, genre_ids, release_date, poster_path, id } = movie;

//   let year = '';
//   if (typeof release_date !== 'undefined' && release_date.length > 4) {
//     year = release_date.slice(0, 4);
//   }

//   // Get a list of movie genres
//   const movieGenresList = getMovieGenresList(genre_ids).join(', ');

//   if (poster_path === null) {
//     return `<li>
//             <a class="gallery__link" href="#">
//               <img class="gallery__image" data-id="${id}" src="https://dummyimage.com/395x574/000/fff.jpg&text=no+poster" alt="${title} movie poster" loading="lazy">

//             <div class="info">
//               <p class="info__item">${title}</p>
//               <div class="info-detail">
//                 <p class="info-detail__item">${movieGenresList}</p>
//                 <p class="info-detail__item">${year}</p>
//               </div>
//             </div>
//             </a>
//           </li>`;
//   }

//   return `<li>
//             <a class="gallery__link" href="#">
//               <img class="gallery__image" data-id="${id}" src="${BASE_IMG_URL}${poster_path}" alt="${title} movie poster" loading="lazy">

//             <div class="info">
//               <h3 class="info__item">${title}</h3>
//               <div class="info-detail">
//                 <p class="info-detail__item">${movieGenresList}</p>
//                 <p class="info-detail__item">${year}</p>
//               </div>
//             </div>
//             </a>
//           </li>`;
// }

// //  Get a list of movie genres by ID
// export function getMovieGenresList(genresIdsList) {
//   let movieGenres = genres.reduce((acc, { id, name }) => {
//     if (genresIdsList.includes(id)) {
//       acc.push(name);
//     }
//     return acc;
//   }, []);
//   if (movieGenres.length > 3) {
//     movieGenres = movieGenres.slice(0, 2);
//     movieGenres.push('Other');
//   }
//   return movieGenres;
// }

import ServiceApi from '../services/service-api';

const serviceApi = new ServiceApi();
const gallery = document.querySelector('.gallery');
const renderMovieCards = async movies => {
  const movieGalleryMarkup = await Promise.all(
    movies
      .map(async movie => {
        const { id, title, genre_ids, release_date, backdrop_path } = movie;
        const genres = await serviceApi.getGenre();
        const config = await serviceApi.getConfig();
        const { allGenres } = genres;
        const { base_url } = config.images;

        let movieGenresList = '';
        if (allGenres) {
          movieGenresList = allGenres
            .filter(item => genre_ids.includes(item['id']))
            .map(item => item['name'])
            .join(', ');
        }

        let year = '';
        if (typeof release_date !== 'undefined' && release_date.length > 4) {
          year = release_date.slice(0, 4);
        }

        const poster_path = backdrop_path
          ? `${base_url}w440_and_h660_face${backdrop_path}`
          : 'https://dummyimage.com/395x574/000/fff.jpg&text=no+poster';

        return `<li class="gallery__item">
        <a class="gallery__link" href="#">
          <img class="gallery__image" data-id="${id}" src="${poster_path}" alt="${title} movie poster" loading="lazy">

        <div class="info">
          <h3 class="info__item">${title}</h3>
          <div class="info-detail">
            <p class="info-detail__item">${movieGenresList}</p>
            <p class="info-detail__item">${year}</p>
          </div>
        </div>
        </a>
      </li>`;
      })
      .join('')
  );
  gallery.innerHTML = movieGalleryMarkup;
};

// Get a list of movie genres by ID
export const getMovieGenresList = async genresIdsList => {
  const genres = await serviceApi.getGenre();
  const { allGenres } = genres;

  let movieGenres = allGenres.reduce((acc, { id, name }) => {
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
};

serviceApi
  .getListMovies()
  .then(movies => {
    renderMovieCards(movies.listMovies);
    console.log(movies);
  })
  .catch(error => {
    console.log(error.message);
  });
