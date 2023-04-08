const API_KEY = '221af12348c3ca060963c8b12f5995d3';

class ServiceApi {
  constructor() {
    this.getGenre().then(this.setGenres);
  }

  #BASE_URL = 'https://api.themoviedb.org/3';
  #BASE_IMG = 'https://image.tmdb.org/t/p/w500';

  async getResource(url) {
    return await fetch(`${this.#BASE_URL}${url}api_key=${API_KEY}`)
      .then(res => res.json());
  }

  /**
   * Getting list of movies
   * @param period {string: ("day"|"week")} - Period to display popular movies
   * @param page {number} - Number of page of pagination
   * @returns {Promise<{totalPages: (number|number), page, listMovies: *}>}
   */
  getListMovies = async (period, page=1) => {
    const res = await this.getResource(`/trending/movie/${period}?page=${page}&`);
    return this.transformListMovies(res);
  };

  /**
   * Looking for
   * @param movieId
   * @returns {Promise<{overview: string, original_title: *, genres: *, vote_average: *, popularity: *, title: *, vote_count: *, poster_path: string}>}
   */
  getMovie = async (movieId) => {
    const res = await this.getResource(`/movie/${movieId}?`);
    return await this.transformDataMovie(res);
  };

  /**
   * Search a movie from dataBase
   * @param query {string} - string for search
   * @returns {Promise<*>}
   */
  searchMovie = async (query) => {
    const res = await this.getResource(`/search/movie?query=${query}&`);
    return this.transformListMovies(res);
  };

  getTrailer = async (movieId) => {
    return await this.getResource(`/movie/${movieId}/videos?`);
  };

  getByGenres = async (genre) => {
    const res = await this.getResource(`/movie/${movieId}/videos?`);
  }

  /* Adding methods */
  transformListMovies = (res) => {
    const {page, total_results, results} = res;

    const pages = total_results / results.length;
    const totalPages = pages === Math.floor(pages) ? pages : Math.ceil(pages);

    const listMovies = results.map(item => {
      const {id, poster_path, title, name, release_date, genre_ids, overview} = item;
      const keyGenres = JSON.parse(localStorage.getItem('genres'));

      const genres = Object.entries(keyGenres).filter(item => genre_ids.includes(+item[0])).map(item => item[1]);

      const poster = poster_path ? `${this.#BASE_IMG}${poster_path}` : null;

      const d = release_date && new Date(Date.parse(release_date));
      const release = release_date ? d.getFullYear() : null;
      console.log("release:", release)

      return {
        id,
        genres,
        poster,
        release,
        title: title || name,
        overview,
      }
    });

    return {
      page,
      totalPages,
      listMovies,
    };
  };
  getGenre = async () => {
    return await this.getResource(`/genre/movie/list?`);
  };
  transformDataMovie = async (res) => {
    const {
      title,
      vote_average,
      vote_count,
      popularity,
      original_title,
      genres,
      overview="",
      poster_path=null
    } = res;

    return {
      title,
      vote_average,
      vote_count,
      popularity,
      original_title,
      genres: genres.map(item => item['name']),
      overview,
      poster_path: `${this.config['base_url']}w440_and_h660_face${poster_path}`,
    }
  };
  setGenres = ({genres}) => {
    const objGenres = {};
    genres.forEach(({id, name}) => {
      objGenres[id] = name;
    });
    localStorage.setItem('genres', JSON.stringify(objGenres));
  };
}

export const serviceApi = new ServiceApi();