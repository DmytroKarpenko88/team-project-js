import serviceApi from '../services/service-api';



const gallery = document.querySelector('.gallery');

//  ЖАНРИ ДО LOCALSTORAGE
serviceApi
  .getGenre()
  .then(({ genres }) => {
    localStorage.setItem('genre', JSON.stringify(genres));
    // console.log(genres);
  })
  .catch(error => console.log(error));

// ВІДОБРАЖЕННЯ РОЗМІТКИ
serviceApi
  .getListMovies()
  .then(movies => {
    renderMovieCards(movies.listMovies);
    localStorage.setItem('movie', JSON.stringify(movies));
    console.log(movies);
  })
  .catch(error => {
    console.log(error.message);
  });

// Get a list of movie genres by ID
export const getMovieGenresList = async genresIdsList => {
  const genres = await serviceApi.getGenre();
  const { genres: allGenres } = genres;

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

// Якщо не приходить зображення
function setPosters(poster_path) {
  if (poster_path === null || poster_path === undefined) {
    return 'https://dummyimage.com/395x574/000/fff.jpg&text=no+poster';
  }
  return `${BASE_IMG_URL}${poster_path}`;
}

export async function renderMovieCards(movies) {
  const movieGalleryMarkup = await Promise.all(
    movies.map(
      async ({ id, title, name, genre_ids, release_date, poster_path }) => {
        let year = '';
        if (typeof release_date !== 'undefined' && release_date.length > 4) {
          year = release_date.slice(0, 4);
        }
        const movieGenres = await getMovieGenresList(genre_ids);
        return `<li class="gallery__item">        <a class="gallery__link" href="#">
          <img class="gallery__image" data-id="${id}" src="${setPosters(
          poster_path
        )}" alt="${title} movie poster" loading="lazy">

        <div class="info">
          <h3 class="info__item">${title || name}</h3>
          <div class="info-detail">
             <p class="info-detail__item">${movieGenres.join(', ')}</p>
             <p class="info-detail__item">${year}</p>
           </p>
           </div>
         </div>
         </a>
       </li>`;
      }
    )
  );
  console.log(movieGalleryMarkup);
  return insertMoviesMarkup(movieGalleryMarkup.join(''));

  // Функція для вставки розмітки в контейнер
  function insertMoviesMarkup(filmsMarkup) {
    if (gallery) {
      gallery.insertAdjacentHTML('beforeend', filmsMarkup);
    }
    console.log('filmsMarkup:', filmsMarkup);
  }
}

// const renderMovieCards = async movies => {
//   const movieGalleryMarkup = await Promise.all(
//     movies
//       .map(async movie => {
//         const { id, title, genre_ids, release_date, backdrop_path } = movie;
//         const genres = await serviceApi.getGenre();
//         const config = await serviceApi.getConfig();
//         const { allGenres } = genres;
//         const { base_url } = config.images;

//         let movieGenresList = '';
//         if (allGenres) {
//           movieGenresList = allGenres
//             .filter(item => genre_ids.includes(item['id']))
//             .map(item => item['name'])
//             .join(', ');
//         }

//         let year = '';
//         if (typeof release_date !== 'undefined' && release_date.length > 4) {
//           year = release_date.slice(0, 4);
//         }

//         const poster_path = backdrop_path
//           ? `${base_url}w440_and_h660_face${backdrop_path}`
//           : 'https://dummyimage.com/395x574/000/fff.jpg&text=no+poster';

//         return `<li class="gallery__item">
//         <a class="gallery__link" href="#">
//           <img class="gallery__image" data-id="${id}" src="${poster_path}" alt="${title} movie poster" loading="lazy">

//         <div class="info">
//           <h3 class="info__item">${title}</h3>
//           <div class="info-detail">
//             <p class="info-detail__item">${movieGenresList}</p>
//             <p class="info-detail__item">${year}</p>
//           </div>
//         </div>
//         </a>
//       </li>`;
//       })
//       .join('')
//   );
//   console.log('movieGalleryMarkup:', movieGalleryMarkup);
//   gallery.innerHTML = movieGalleryMarkup;
// };

// // Get a list of movie genres by ID
// export const getMovieGenresList = async genresIdsList => {
//   const genres = await serviceApi.getGenre();
//   const { allGenres } = genres;

//   let movieGenres = allGenres.reduce((acc, { id, name }) => {
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
// };

// serviceApi
//   .getListMovies()
//   .then(movies => {
//     renderMovieCards(movies.listMovies);
//     console.log(movies);
//   })
//   .catch(error => {
//     console.log(error.message);
//   });
