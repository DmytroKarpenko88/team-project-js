function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},i={},o=t.parcelRequired7e4;null==o&&((o=function(e){if(e in s)return s[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return s[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequired7e4=o),o("gwtqX");var a=o("fb9GJ");const n=document.querySelector("#pagination"),c=new(e(a))(n,{totalItems:0,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn current-color tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}});o("axbZj"),o("bfxWz"),o("gjiCh"),o("ivttf");var l=o("gwtqX"),r=o("axbZj");let d;document.querySelector("#search-form").addEventListener("submit",(async function(e){if(e.preventDefault(),d=e.target.searchQuery.value.trim(),!d)return;const t=await l.serviceApi.searchMovie(d);console.log(t),(0,r.setFilmsToLocalStorage)(t.listMovies),(0,r.renderListMovies)(t.listMovies),c._options.totalItems=t.totalResults,c.reset(t.totalResults),c.off(),c.on("afterMove",(e=>{const t=e.page;l.serviceApi.searchMovie(d,t).then((e=>(0,r.renderListMovies)(e.listMovies))),window.scrollTo(0,0)}))}));l=o("gwtqX"),r=o("axbZj");async function u(e){const t=await l.serviceApi.getListMovies(e);(0,r.setFilmsToLocalStorage)(t.listMovies),(0,r.renderListMovies)(t.listMovies),c._options.totalItems=t.totalResults,c.reset(t.totalResults),c.off(),c.on("afterMove",(t=>{const s=t.page;l.serviceApi.getListMovies(e,s).then((e=>{(0,r.setFilmsToLocalStorage)(e.listMovies),(0,r.renderListMovies)(e.listMovies)})).catch((e=>console.log(e))),window.scrollTo(0,0)}))}const v=document.querySelector("#dayBtn"),g=document.querySelector("#weekBtn");v.addEventListener("click",(function(){v.classList.add("active"),g.classList.remove("active"),g.innerText="This Week";g.addEventListener&&g.removeEventListener("click",(function(){})),u("day")})),g.addEventListener("click",(function(){g.classList.add("active"),v.classList.remove("active"),v.innerText="Today";v.addEventListener&&v.removeEventListener("click",(function(){})),u("week")})),async function(){u("day")}();const p=document.querySelector("#theme-switch-toggle"),f="light-theme",m="dark-theme";function y(){document.body.classList.toggle(m),document.body.classList.toggle(f),document.body.classList.contains(f)?(p.setAttribute("checked",!1),localStorage.setItem("active-theme",f)):document.body.classList.contains(m)&&(p.setAttribute("checked",!0),localStorage.setItem("active-theme",m))}document.body.classList.add(f),p.addEventListener("change",y),localStorage.getItem("active-theme")===m&&y(),o("iQjKg"),o("1VOaQ");
//# sourceMappingURL=index.26b9c08b.js.map
