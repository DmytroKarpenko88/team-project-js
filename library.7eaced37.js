!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},s={},i=t.parcelRequired7e4;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in s){var t=s[e];delete s[e];var i={id:e,exports:{}};return a[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){s[e]=t},t.parcelRequired7e4=i),i("kgw3z"),i("iDAcb");var n=i("1VFfL"),l=JSON.parse(localStorage.getItem("listQueue")),o=l?Object.keys(l).length:0,r={totalItems:o,itemsPerPage:4,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn current-color tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},p=new(e(n))("pagination",r);p.on("beforeMove",(function(){p.setTotalItems(o)})),p.setTotalItems(o),p.movePageTo(1),i("bC0sB"),i("kvC6y"),i("4o84i"),i("6xf8B")}();
//# sourceMappingURL=library.7eaced37.js.map
