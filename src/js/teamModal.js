import * as basicLightbox from 'basiclightbox';
import dmytroUrl from '../images/team.images/dmytro-karpenko.jpg';
import maiiaUrl from '../images/team.images/maiia-robeiko.jpg';
import ruslanUrl from '../images/team.images/ruslan-boyko.jpg';
import halynaUrl from '../images/team.images/halyna-tulchii.jpg';
import mariaUrl from '../images/team.images/maria-shymanska.jpg';
import ludmylaUrl from '../images/team.images/ludmyla-chumak.jpg';
import artemUrl from '../images/team.images/artem-liaschenko.jpg';
import sergiiUrl from '../images/team.images/sergii-podobrii.jpg';
import andreiiUrl from '../images/team.images/andreii-pokotilo.jpg';
import yuraUrl from '../images/team.images/yura-doloban.jpg';
import marynaUrl from '../images/team.images/maryna-molchanova.jpg';
import tetyanaUrl from '../images/team.images/tetyana-karlova.jpg';
import kirillUrl from '../images/team.images/kirill-parasochka.jpg';
import spriteUrl from '../images/icons-sprite.svg';

const markup = `<div class="team-wrapper">
<div class="team-card">
    <img src="${dmytroUrl}" alt="Dmytro" class="team-image">
    <p class="team-name">Dmytro Karpenko</p>
    <p class="team-role">Team Lead</p>
    <a href="https://github.com/DmytroKarpenko88" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg>
    </a>
</div>
<div class="team-card">
    <img src="${maiiaUrl}" alt="Maiia" class="team-image">
    <p class="team-name">Maiia Robeiko</p>
    <p class="team-role">Scrum Master</p>
    <a href="https://github.com/MaiiaHa" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${ruslanUrl}" alt="Ruslan" class="team-image">
    <p class="team-name">Ruslan Boiko</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/marseille78" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${halynaUrl}" alt="Halyna" class="team-image">
    <p class="team-name">Halyna Tulchii</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/AliaTulchii" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${mariaUrl}" alt="Maria" class="team-image">
    <p class="team-name">Maria Shymanska</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/Maria-Shymanska" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${ludmylaUrl}" alt="Ludmyla" class="team-image">
    <p class="team-name">Ludmyla Chumak</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/ludmila121" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${artemUrl}" alt="Artem" class="team-image">
    <p class="team-name">Artem Liaschenko</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/Artem4535" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${sergiiUrl}" alt="Sergii" class="team-image">
    <p class="team-name">Sergii Podobrii</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/Mamont777" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${andreiiUrl}" alt="Andreii" class="team-image">
    <p class="team-name">Andreii Pokotilo</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/AndreyPokotilo" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${yuraUrl}" alt="Yura" class="team-image">
    <p class="team-name">Yura Doloban</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/YuDo-fsd" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${marynaUrl}" alt="Maryna" class="team-image">
    <p class="team-name">Maryna Molchanova</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/MarynaMolchanova" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${tetyanaUrl}" alt="Tetyana" class="team-image">
    <p class="team-name">Tetyana Karlova</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/Yanat58" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${kirillUrl}" alt="Kirill" class="team-image">
    <p class="team-name">Kirill Parasochka</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/kirill-pka" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
</div>`;
const container = document.querySelector('.js-team-modal');
const markup2 = `<img src="${kirillUrl}"/>`;

container.addEventListener('click', openModal);

const modal = basicLightbox.create(markup);

function openModal(e) {
  modal.show();

  window.addEventListener('keydown', closeModalHandler);

  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}
