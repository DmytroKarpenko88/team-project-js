const loader = document.querySelector('.loader');

if (loader) {
  window.addEventListener('load', () => {
    loader.classList.add('done');
  });
}
