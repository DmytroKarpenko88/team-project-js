function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},a=t.parcelRequired7e4;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},t.parcelRequired7e4=a),a("gwtqX");var i=a("fb9GJ"),o=a("gwtqX");o=a("gwtqX");const l=document.querySelector(".movie-switcher__button.active").dataset.period||"day";function c(e){const t=e.map((e=>function(e){const{id:t,poster:n,title:s,genres:a,release:i,vote_average:o}=e,l=n||"https://dummyimage.com/395x574/000/fff.jpg&text=no+poster",c=a.slice(0,2);a.length>2&&c.push("Others");const d=i||null;return`<li class="gallery__item">\n             <a class="gallery__link" href="#" data-modal-open data-id="${t}">\n              <img class="gallery__image" src="${l}" alt="${s} movie poster" loading="lazy">\n             <div class="info">\n              <h3 class="info__item">${s}</h3>\n               <div class="info-detail">\n                <p class="info-detail__item">${c.join(", ")}</p>\n  <p class="info-detail__item">${d}<span class="info-detail__rating">&#9733;</span><span class="film-rating">${o?.toFixed(1)}</span></p>\n               </div>\n             </div>\n            </a>\n           </li>`}(e)));document.querySelector(".gallery").innerHTML=t.join("")}function d(e){const t={};e.forEach((e=>{const{id:n,...s}=e;t[n]=s})),localStorage.setItem("listMovies",JSON.stringify(t))}o.serviceApi.getListMovies(l).then((e=>{d(e.listMovies),c(e.listMovies)})).catch((e=>console.log(e)));const r=document.querySelector("#pagination");console.log();const u=new(e(i))(r,{totalItems:2e4,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn current-color tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}});u.on("afterMove",(e=>{const t=e.page;o.serviceApi.getListMovies("week",t).then((e=>c(e.listMovies))).catch((e=>console.log(e))),window.scrollTo(0,0)}));const m=document.querySelector("[data-modal]"),p=document.querySelector(".gallery"),v=document.querySelector("[data-modal-close]"),g=document.querySelector("body"),f=document.querySelector(".modal");let h=null;function w(){m.classList.add("is-hidden"),window.removeEventListener("keydown",y),g.style.overflow="auto"}function y(e){"Escape"===e.code&&w()}function b(e,t){return e in JSON.parse(localStorage.getItem(t))}function L(e,t){let n="null";switch(t){case"watchedMovies":n=b(e,"watchedMovies")?"remove from Watched":"add to Watched";break;case"listQueue":n=b(e,"listQueue")?"remove from queue":"add to queue"}return n}function _(e,t){if(!e)return;const n=document.querySelector(`[${e}]`),s=n.closest(".content-modal").dataset.id,a=JSON.parse(localStorage.getItem(t))??{};s in a?delete a[s]:a[s]=h,localStorage.setItem(t,JSON.stringify(a)),n.textContent=L(s,t)}p.addEventListener("click",(function(e){e.preventDefault();const t=e.target.closest("[data-modal-open]");t&&(m.classList.remove("is-hidden"),window.addEventListener("keydown",y),g.style.overflow="hidden",function(e){h=JSON.parse(localStorage.getItem("listMovies"))[e],localStorage.getItem("watchedMovies")||localStorage.setItem("watchedMovies",JSON.stringify({})),localStorage.getItem("listQueue")||localStorage.setItem("listQueue",JSON.stringify({}));const{poster:t,title:n,vote_average:s,vote_count:a,popularity:i,original_title:o,genres:l,overview:c}=h,d=document.querySelector(".modal-content-container");d&&(d.innerHTML=`\n      <div class="modal-photo-container">\n        <picture>\n          <img src="${t}" width="" class="statistick-img" alt="" />\n        </picture>\n      </div>\n      <div class="content-modal" data-id='${e}'>\n        <h2 class="modal-title">${n}</h2>\n        <div class="statistic-container">\n           <ul class="list">\n              <li>\n                <div class="statistic-wraper">\n                  <p class="first-item-statistic">Vote / Votes</p>\n                  <p><span class="statistic-vote">${s}</span>/<span class="statistic-votes">${a}</span></p>\n                </div>\n              </li>\n              <li>\n                <div class="statistic-wraper">\n                  <p class="first-item-statistic">Popularity</p>\n                  <p>${i}</p>\n                </div>\n              </li>\n              <li>\n                <div class="statistic-wraper">\n                  <p class="first-item-statistic">Original Title</p>\n                  <p>${o}</p>\n                </div>\n              </li>\n              <li>\n                <div class="statistic-wraper">\n                  <p class="first-item-statistic">Genre</p>\n                  <p>${l.join(", ")}</p>\n                </div>\n              </li>\n            </ul>\n        </div>\n        <h3 class="content-modal-title">About</h3>\n        <p class="content-modal">${c}</p>\n        <div class="modal-btn-container">\n\x3c!--          <button class="modal-btn btn-add-watched" data-btn-watch>add to Watched</button>--\x3e\n          <button class="modal-btn btn-add-watched" data-btn-watch>${L(e,"watchedMovies")}</button>\n\x3c!--          <button class="modal-btn btn-add-queue" data-btn-queue>add to queue</button>--\x3e\n          <button class="modal-btn btn-add-queue" data-btn-queue>${L(e,"listQueue")}</button>\n        </div>\n      </div>\n    `)}(t.dataset.id))})),v.addEventListener("click",w),m.addEventListener("click",(function(e){e.currentTarget===e.target&&w()})),f.addEventListener("click",(function(e){const t=e.target;t.closest("[data-btn-watch]")&&_("data-btn-watch","watchedMovies");t.closest("[data-btn-queue]")&&_("data-btn-queue","listQueue")}));const M=document.querySelector(".loader");window.addEventListener("load",(()=>{M.classList.add("done")})),document.addEventListener("DOMContentLoaded",(function(){let e=document.querySelector("#toTop");window.addEventListener("scroll",(function(){window.pageYOffset>100?e.classList.add("show"):e.classList.remove("show")})),e.onclick=function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}}));o=a("gwtqX");const S=document.querySelector("#search-form");document.querySelector("#pagination");let q;S.addEventListener("submit",(async function e(t){if(t.preventDefault(),q=t.target.searchQuery.value.trim(),!q)return;const n=await o.serviceApi.searchMovie(q);console.log(n),d(n.listMovies),c(n.listMovies),u.reset(n.total_pages),u.on("afterMove",(t=>{const n=t.page;e?o.serviceApi.searchMovie(q,n).then((e=>c(e.listMovies))):o.serviceApi.getListMovies("week",n).then((e=>c(e.listMovies))),window.scrollTo(0,0)}))}));o=a("gwtqX");const k=document.querySelector("#dayBtn"),E=document.querySelector("#weekBtn");k.addEventListener("click",(async()=>{k.classList.add("active"),E.classList.remove("active"),E.innerText="This Week";const e=await o.serviceApi.getListMovies("day");d(e.listMovies),c(e.listMovies)})),E.addEventListener("click",(async()=>{E.classList.add("active"),k.classList.remove("active"),k.innerText="Today";const e=await o.serviceApi.getListMovies("week");d(e.listMovies),c(e.listMovies)})),async function(){c((await o.serviceApi.getListMovies("day")).listMovies)}();const T=document.querySelector("#theme-switch-toggle"),$="light-theme",A="dark-theme";function I(){document.body.classList.toggle(A),document.body.classList.toggle($),document.body.classList.contains($)?(T.setAttribute("checked",!1),localStorage.setItem("active-theme",$)):document.body.classList.contains(A)&&(T.setAttribute("checked",!0),localStorage.setItem("active-theme",A))}document.body.classList.add($),T.addEventListener("change",I),localStorage.getItem("active-theme")===A&&I();const x=document.querySelector(".loading");function O(){x.classList.add("loading--hiden")}function B(){x.style.display="none"}window.onload=function(){setTimeout(O,1500),setTimeout(B,2e3)};const C=document.createElement("ul"),N=document.createElement("h2");modalBackdrop.firstElementChild.innerHTML="",C.innerHTML="",N.innerHTML="",N.classList.add("team__modal-title"),N.insertAdjacentHTML("beforeend","GoIT team 5"),modalBackdrop.firstElementChild.insertAdjacentElement("beforeend",N),modalBackdrop.firstElementChild.insertAdjacentElement("beforeend",C),modalBackdrop.firstElementChild.insertAdjacentHTML("beforeend",'\n<button class="modal__btn-close btn__close-modal">\n      <svg\n\n      </svg>\n    </button>\n'),C.classList.add("team__modal-list"),team.map((e=>{const t=`<li class="team__modal-item">\n\t\t<img src="${e.img}" class="team__modal-pic">\n\t\t<h2 class="team__modal-member">${e.name}</h2>\n    <p class="team__modal-role">${e.role}</p>\n\t\t<div>\n\t\t<a href="${e.social}" target="_blank" class="team__modal-link">\n        <svg class="icon-github"></svg>\n        </a>\n\t\t</div>\n\t\t</li>`;modalTeamList.insertAdjacentHTML("beforeend",t)})),openModal(),modalBackdrop.firstElementChild.classList.add("team-modal"),modalBackdrop.firstElementChild.classList.remove("modal-open");
//# sourceMappingURL=index.a2d1e647.js.map
