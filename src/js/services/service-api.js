const API_KEY = '221af12348c3ca060963c8b12f5995d3';

export default class ServiceApi {
  constructor() {
    this.allGenres = null;
    this.config = null;

    this.getGenre().then(({ genres }) => {
      this.allGenres = genres;
    });
    this.getConfig().then(({ images }) => {
      this.config = { ...images };
    });
  }

  #BASE_URL = 'https://api.themoviedb.org/3';

  async getResource(url) {
    return await fetch(`${this.#BASE_URL}${url}api_key=${API_KEY}`).then(res =>
      res.json()
    );
  }

  getListMovies = async (page = 1) => {
    const res = await this.getResource(`/trending/all/day?page=${page}&`);
    return this.transformListMovies(res);
  };
  getMovie = async movieId => {
    return await this.getResource(`/movie/${movieId}?`);
  };
  searchMovie = async query => {
    return await this.getResource(`/search/movie?query=${query}&`);
  };
  getTrailer = async movieId => {
    return await this.getResource(`/movie/${movieId}/videos?`);
  };
  transformListMovies = res => {
    // console.log(res);
    const { page, total_results, results } = res;

    const pages = total_results / results.length;
    const totalPages = pages === Math.floor(pages) ? pages : Math.ceil(pages);

    const listMovies = results.map(item => {
      console.log(item);
      const { id, backdrop_path, title, name, release_date, genre_ids } = item;
      const genres = this.allGenres
        .filter(item => genre_ids.includes(item['id']))
        .map(item => item['name']);
      const poster = `${this.config['base_url']}w440_and_h660_face${backdrop_path}`;

      const d = release_date && new Date(Date.parse(release_date));
      const release = release_date ? d.getFullYear() : null;

      return {
        id,
        genres,
        poster,
        release,
        title: title || name,
      };
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
  getConfig = async () => {
    return await this.getResource(`/configuration?`);
  };
}
