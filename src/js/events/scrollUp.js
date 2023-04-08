document.addEventListener('DOMContentLoaded', function () {
  let btn = document.querySelector('#toTop');
  window.addEventListener('scroll', function () {
    window.pageYOffset > 100
      ? btn.classList.add('show')
      : btn.classList.remove('show');
  });

  btn.onclick = function (click) {
    click.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
});
