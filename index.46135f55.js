!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired7e4;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired7e4=o),o.register("cZ2Ha",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}})),o("kgw3z");var i=o("1VFfL");o("kgw3z");var s=document.querySelector("#pagination"),c=new(e(i))(s,{totalItems:2e4,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn current-color tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}),r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){if(null==e)return{};var n,a,o=d.default(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o};var l,d=(l=o("cZ2Ha"))&&l.__esModule?l:{default:l};var u=o("kgw3z");var v=document.querySelector(".movie-switcher__button.active").dataset.period||"day";function p(e){var t=e.map((function(e){return function(e){var t=e.id,n=e.poster,a=e.title,o=e.genres,i=e.release,s=e.vote_average,c=n||"https://dummyimage.com/395x574/000/fff.jpg&text=no+poster",r=o.slice(0,2);o.length>2&&r.push("Others");var l=i||null;return'<li class="gallery__item">\n             <a class="gallery__link" href="#" data-modal-open data-id="'.concat(t,'">\n              <img class="gallery__image" src="').concat(c,'" alt="').concat(a,' movie poster" loading="lazy">\n             <div class="info">\n              <h3 class="info__item">').concat(a,'</h3>\n               <div class="info-detail">\n                <p class="info-detail__item">').concat(r.join(", "),'</p>\n  <p class="info-detail__item">').concat(l,'<span class="info-detail__rating">&#9733;</span><span class="film-rating">').concat(null==s?void 0:s.toFixed(1),"</span></p>\n               </div>\n             </div>\n            </a>\n           </li>")}(e)}));document.querySelector(".gallery").innerHTML=t.join("")}function m(t){var n={};t.forEach((function(t){var a=t.id,o=e(r)(t,["id"]);n[a]=o})),localStorage.setItem("listMovies",JSON.stringify(n))}u.serviceApi.getListMovies(v).then((function(e){m(e.listMovies),p(e.listMovies)})).catch((function(e){return console.log(e)})),c.on("afterMove",(function(e){var t=e.page;u.serviceApi.getListMovies(v,t).then((function(e){m(e.listMovies),p(e.listMovies)})).catch((function(e){return console.log(e)})),window.scrollTo(0,0)}));var f=document.querySelector("[data-modal]"),g=document.querySelector(".gallery"),h=document.querySelector("[data-modal-close]"),b=document.querySelector("body"),y=document.querySelector(".modal"),w="watchedMovies",L="listQueue",_=null;function M(){f.classList.add("is-hidden"),window.removeEventListener("keydown",S),b.style.overflow="auto"}function S(e){"Escape"===e.code&&M()}function k(e,t){return e in JSON.parse(localStorage.getItem(t))}function T(e,t){var n="null";switch(t){case w:n=k(e,w)?"remove from Watched":"add to Watched";break;case L:n=k(e,L)?"remove from queue":"add to queue"}return n}function x(e,t){if(e){var n,a=document.querySelector("[".concat(e,"]")),o=a.closest(".content-modal").dataset.id,i=null!==(n=JSON.parse(localStorage.getItem(t)))&&void 0!==n?n:{};o in i?delete i[o]:i[o]=_,localStorage.setItem(t,JSON.stringify(i)),a.textContent=T(o,t)}}g.addEventListener("click",(function(e){e.preventDefault();var t=e.target.closest("[data-modal-open]");t&&(f.classList.remove("is-hidden"),window.addEventListener("keydown",S),b.style.overflow="hidden",function(e){_=JSON.parse(localStorage.getItem("listMovies"))[e],localStorage.getItem(w)||localStorage.setItem(w,JSON.stringify({})),localStorage.getItem(L)||localStorage.setItem(L,JSON.stringify({}));var t=_.poster,n=_.title,a=_.vote_average,o=_.vote_count,i=_.popularity,s=_.original_title,c=_.genres,r=_.overview,l=document.querySelector(".modal-content-container");l&&(l.innerHTML='\n      <div class="modal-photo-container">\n        <picture>\n          <img src="'.concat(t,'" width="" class="statistick-img" alt="" />\n        </picture>\n      </div>\n      <div class="content-modal" data-id=\'').concat(e,'\'>\n        <h2 class="modal-title">').concat(n,'</h2>\n        <div class="statistic-container">\n           <ul class="list">\n              <li>\n                <div class="statistic-wraper">\n                  <p class="first-item-statistic">Vote / Votes</p>\n                  <p><span class="statistic-vote">').concat(a,'</span>/<span class="statistic-votes">').concat(o,'</span></p>\n                </div>\n              </li>\n              <li>\n                <div class="statistic-wraper">\n                  <p class="first-item-statistic">Popularity</p>\n                  <p>').concat(i,'</p>\n                </div>\n              </li>\n              <li>\n                <div class="statistic-wraper">\n                  <p class="first-item-statistic">Original Title</p>\n                  <p>').concat(s,'</p>\n                </div>\n              </li>\n              <li>\n                <div class="statistic-wraper">\n                  <p class="first-item-statistic">Genre</p>\n                  <p>').concat(c.join(", "),'</p>\n                </div>\n              </li>\n            </ul>\n        </div>\n        <h3 class="content-modal-title">About</h3>\n        <p class="content-modal">').concat(r,'</p>\n        <div class="modal-btn-container">\n\x3c!--          <button class="modal-btn btn-add-watched" data-btn-watch>add to Watched</button>--\x3e\n          <button class="modal-btn btn-add-watched" data-btn-watch>').concat(T(e,w),'</button>\n\x3c!--          <button class="modal-btn btn-add-queue" data-btn-queue>add to queue</button>--\x3e\n          <button class="modal-btn btn-add-queue" data-btn-queue>').concat(T(e,L),"</button>\n        </div>\n      </div>\n    "))}(t.dataset.id))})),h.addEventListener("click",M),f.addEventListener("click",(function(e){e.currentTarget===e.target&&M()})),y.addEventListener("click",(function(e){var t=e.target;t.closest("[data-btn-watch]")&&x("data-btn-watch",w);t.closest("[data-btn-queue]")&&x("data-btn-queue",L)}));var q=document.querySelector(".loader");window.addEventListener("load",(function(){q.classList.add("done")})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#toTop");window.addEventListener("scroll",(function(){window.pageYOffset>100?e.classList.add("show"):e.classList.remove("show")})),e.onclick=function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}}));var E,O=o("bpxeT"),A=o("2TvXO"),I=(u=o("kgw3z"),document.querySelector("#search-form"));document.querySelector("#pagination");function j(e){return B.apply(this,arguments)}function B(){return(B=e(O)(e(A).mark((function t(n){var a;return e(A).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),E=n.target.searchQuery.value.trim()){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,u.serviceApi.searchMovie(E);case 6:a=e.sent,console.log(a),m(a.listMovies),p(a.listMovies),c.reset(a.total_pages),c.on("afterMove",(function(e){var t=e.page;j?u.serviceApi.searchMovie(E,t).then((function(e){return p(e.listMovies)})):u.serviceApi.getListMovies("week",t).then((function(e){return p(e.listMovies)})),window.scrollTo(0,0)}));case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}I.addEventListener("submit",j);O=o("bpxeT"),A=o("2TvXO"),u=o("kgw3z");var C=document.querySelector("#dayBtn"),N=document.querySelector("#weekBtn");function H(){return(H=e(O)(e(A).mark((function t(){return e(A).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"day",e.next=3,u.serviceApi.getListMovies("day");case 3:p(e.sent.listMovies);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}C.addEventListener("click",e(O)(e(A).mark((function t(){var n,a;return e(A).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C.classList.add("active"),N.classList.remove("active"),N.innerText="This Week",n="day",e.next=6,u.serviceApi.getListMovies(n);case 6:m((a=e.sent).listMovies),p(a.listMovies),c.reset(a.total_pages),c.on("afterMove",(function(e){var t=e.page;u.serviceApi.getListMovies(n,t).then((function(e){m(e.listMovies),p(e.listMovies)})).catch((function(e){return console.log(e)})),window.scrollTo(0,0)}));case 11:case"end":return e.stop()}}),t)})))),N.addEventListener("click",e(O)(e(A).mark((function t(){var n,a;return e(A).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N.classList.add("active"),C.classList.remove("active"),C.innerText="Today",n="week",e.next=6,u.serviceApi.getListMovies(n);case 6:m((a=e.sent).listMovies),p(a.listMovies),c.reset(a.total_pages),c.on("afterMove",(function(e){var t=e.page;u.serviceApi.getListMovies(n,t).then((function(e){m(e.listMovies),p(e.listMovies)})).catch((function(e){return console.log(e)})),window.scrollTo(0,0)}));case 11:case"end":return e.stop()}}),t)})))),function(){H.apply(this,arguments)}();var P=document.querySelector("#theme-switch-toggle"),J="light-theme",z="dark-theme";function D(){document.body.classList.toggle(z),document.body.classList.toggle(J),document.body.classList.contains(J)?(P.setAttribute("checked",!1),localStorage.setItem("active-theme",J)):document.body.classList.contains(z)&&(P.setAttribute("checked",!0),localStorage.setItem("active-theme",z))}document.body.classList.add(J),P.addEventListener("change",D),localStorage.getItem("active-theme")===z&&D();var W=document.querySelector(".loading");function F(){W.classList.add("loading--hiden")}function V(){W.style.display="none"}window.onload=function(){setTimeout(F,1500),setTimeout(V,2e3)};var G=document.createElement("ul"),Q=document.createElement("h2");modalBackdrop.firstElementChild.innerHTML="",G.innerHTML="",Q.innerHTML="",Q.classList.add("team__modal-title"),Q.insertAdjacentHTML("beforeend","GoIT team 5"),modalBackdrop.firstElementChild.insertAdjacentElement("beforeend",Q),modalBackdrop.firstElementChild.insertAdjacentElement("beforeend",G),modalBackdrop.firstElementChild.insertAdjacentHTML("beforeend",'\n<button class="modal__btn-close btn__close-modal">\n      <svg\n\n      </svg>\n    </button>\n'),G.classList.add("team__modal-list"),team.map((function(e){var t='<li class="team__modal-item">\n\t\t<img src="'.concat(e.img,'" class="team__modal-pic">\n\t\t<h2 class="team__modal-member">').concat(e.name,'</h2>\n    <p class="team__modal-role">').concat(e.role,'</p>\n\t\t<div>\n\t\t<a href="').concat(e.social,'" target="_blank" class="team__modal-link">\n        <svg class="icon-github"></svg>\n        </a>\n\t\t</div>\n\t\t</li>');modalTeamList.insertAdjacentHTML("beforeend",t)})),openModal(),modalBackdrop.firstElementChild.classList.add("team-modal"),modalBackdrop.firstElementChild.classList.remove("modal-open")}();
//# sourceMappingURL=index.46135f55.js.map
