const e=new class{constructor(){this.getGenre().then(this.setGenres)}#e="https://api.themoviedb.org/3";#t="https://image.tmdb.org/t/p/w500";async getResource(e){return await fetch(`${this.#e}${e}api_key=221af12348c3ca060963c8b12f5995d3`).then((e=>e.json()))}getListMovies=async(e,t=1)=>{const s=await this.getResource(`/trending/movie/${e}?page=${t}&`);return this.transformListMovies(s)};getMovie=async e=>{const t=await this.getResource(`/movie/${e}?`);return await this.transformDataMovie(t)};searchMovie=async e=>{const t=await this.getResource(`/search/movie?query=${e}&`);return this.transformListMovies(t)};getTrailer=async e=>await this.getResource(`/movie/${e}/videos?`);getByGenres=async e=>{await this.getResource(`/movie/${movieId}/videos?`)};transformListMovies=e=>{const{page:t,total_results:s,results:a}=e,i=s/a.length;return{page:t,totalPages:i===Math.floor(i)?i:Math.ceil(i),listMovies:a.map((e=>{const{id:t,poster_path:s,title:a,name:i,release_date:n,genre_ids:r,overview:o}=e,l=JSON.parse(localStorage.getItem("genres")),c=Object.entries(l).filter((e=>r.includes(+e[0]))).map((e=>e[1])),g=s?`${this.#t}${s}`:null,m=n&&new Date(Date.parse(n));return{id:t,genres:c,poster:g,release:n?m.getFullYear():null,title:a||i,overview:o}}))}};getGenre=async()=>await this.getResource("/genre/movie/list?");transformDataMovie=async e=>{const{title:t,vote_average:s,vote_count:a,popularity:i,original_title:n,genres:r,overview:o="",poster_path:l=null}=e;return{title:t,vote_average:s,vote_count:a,popularity:i,original_title:n,genres:r.map((e=>e.name)),overview:o,poster_path:`${this.config.base_url}w440_and_h660_face${l}`}};setGenres=({genres:e})=>{const t={};e.forEach((({id:e,name:s})=>{t[e]=s})),localStorage.setItem("genres",JSON.stringify(t))}},t=document.querySelector(".gallery");e.getListMovies().then((s=>{(async s=>{const a=await Promise.all(s.map((async t=>{const{id:s,title:a,genre_ids:i,release_date:n,backdrop_path:r}=t,o=await e.getGenre(),l=await e.getConfig(),{allGenres:c}=o,{base_url:g}=l.images;let m="";c&&(m=c.filter((e=>i.includes(e.id))).map((e=>e.name)).join(", "));let v="";return void 0!==n&&n.length>4&&(v=n.slice(0,4)),`<li class="gallery__item">\n        <a class="gallery__link" href="#">\n          <img class="gallery__image" data-id="${s}" src="${r?`${g}w440_and_h660_face${r}`:"https://dummyimage.com/395x574/000/fff.jpg&text=no+poster"}" alt="${a} movie poster" loading="lazy">\n\n        <div class="info">\n          <h3 class="info__item">${a}</h3>\n          <div class="info-detail">\n            <p class="info-detail__item">${m}</p>\n            <p class="info-detail__item">${v}</p>\n          </div>\n        </div>\n        </a>\n      </li>`})).join(""));console.log("movieGalleryMarkup:",a),t.innerHTML=a})(s.listMovies),console.log(s)})).catch((e=>{console.log(e.message)}));
//# sourceMappingURL=index.4c15bd2e.js.map
