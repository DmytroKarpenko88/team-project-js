import { serviceApi } from '../services/service-api';

serviceApi
  .getListMovies('week')
  .then(res => renderMoviesCard(res.listMovies))
  .catch(error => console.log(error));

export function renderMoviesCard(movies) {
  const movieCards = movies.map(
    ({ id, genres, poster, release, title, vote_average }) => {
      const posterUrl = `${poster}`;
      return `<li class="gallery__item">
           <a class="gallery__link" href="#">
            <img class="gallery__image" data-id="${id}" src="${posterUrl}" alt="${title} movie poster" loading="lazy">
           <div class="info">
            <h3 class="info__item">${title}</h3>
             <div class="info-detail">
              <p class="info-detail__item">${genres.join(', ')}</p>
               <p class="info-detail__item">${release} <span class="film-rating">${vote_average?.toFixed(
        1
      )}</span></p>
             </div>

           </div>
          </a>
         </li>`;
    }
  );

  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = movieCards.join('');
}

// export async function renderMoviesCard() {
//   try {
//     const { listMovies } = await serviceApi.getListMovies('week');
//     const movieCards = listMovies.map(
//       ({ id, genres, poster, release, title, vote_average }) => {
//         return `<li class="gallery__item">
//          <a class="gallery__link" href="#">
//           <img class="gallery__image" data-id="${id}" src="${poster}" alt="${title} movie poster" loading="lazy">
//          <div class="info">
//           <h3 class="info__item">${title}</h3>
//            <div class="info-detail">
//             <p class="info-detail__item">${genres.join(', ')}</p>
//              <p class="info-detail__item">${release} <span class="film-rating">${vote_average?.toFixed(
//           1
//         )}</span></p>
//            </div>
//          </div>
//         </a>
//        </li>`;
//       }
//     );

//     const gallery = document.querySelector('.gallery');
//     gallery.innerHTML = movieCards.join('');
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// renderMoviesCard();
