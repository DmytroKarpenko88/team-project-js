const preloader = document.querySelector('.loading');
function preloaderIsHided() {
  preloader.classList.add('loading--hiden');
}
function preloaderDisable() {
  preloader.style.display = 'none';
}

window.onload = function () {
  preloaderIsHided();
  preloaderDisable();
  // setTimeout(preloaderIsHided, 500);
  // setTimeout(preloaderDisable, 2000);
};
