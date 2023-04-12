import * as basicLightbox from 'basiclightbox';
import dmytroUrl from '/src/images/team.images/dmytro-karpenko.jpg';
import maiiaUrl from '/src/images/team.images/maiia-robeiko.jpg';
import ruslanUrl from '/src/images/team.images/ruslan-boyko.jpg';
import halynaUrl from '/src/images/team.images/halyna-tulchii.jpg';
import mariaUrl from '/src/images/team.images/maria-shymanska.jpg';
import ludmylaUrl from '/src/images/team.images/ludmyla-chumak.jpg';
import artemUrl from '/src/images/team.images/artem-liaschenko.jpg';
import sergiiUrl from '/src/images/team.images/sergii-podobrii.jpg';
import andreiiUrl from '/src/images/team.images/andreii-pokotilo.jpg';
import yuraUrl from '/src/images/team.images/yura-doloban.jpg';
import marynaUrl from '/src/images/team.images/maryna-molchanova.jpg';
import tetyanaUrl from '/src/images/team.images/tetyana-karlova.jpg';
import kirillUrl from '/src/images/team.images/kirill-parasochka.jpg';
import spriteUrl from '/src/images/icons-sprite.svg';
/*
const markup = `<div class="team-wrapper">
<div class="team-card">
    <img src="${dmytroUrl}" alt="Dmytro" class="team-image">
    <p class="team-name">Dmytro Karpenko</p>
    <p class="team-role">Team Lead</p>
    <a href="https://www.linkedin.com/in/dmytro-karpenko-95a6221a" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#linkedin"></use>
    </svg>
    </a>
</div>
<div class="team-card">
    <img src="${maiiaUrl}" alt="Maiia" class="team-image">
    <p class="team-name">Maiia Robeiko</p>
    <p class="team-role">Scrum Master</p>
    <a href="https://www.linkedin.com/in/maiiaro/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#linkedin"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${ruslanUrl}" alt="Ruslan" class="team-image">
    <p class="team-name">Ruslan Boiko</p>
    <p class="team-role">Developer</p>
    <a href="https://www.linkedin.com/in/ruslan-boiko/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#linkedin"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${halynaUrl}" alt="Halyna" class="team-image">
    <p class="team-name">Halyna Tulchii</p>
    <p class="team-role">Developer</p>
    <a href="https://www.linkedin.com/in/halyna-tulchii-869569271/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#linkedin"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${mariaUrl}" alt="Maria" class="team-image">
    <p class="team-name">Maria Shymanska</p>
    <p class="team-role">Developer</p>
    <a href="https://www.linkedin.com/in/maria-shymanska-aa8277251/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#linkedin"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${ludmylaUrl}" alt="Ludmyla" class="team-image">
    <p class="team-name">Ludmyla Chumak</p>
    <p class="team-role">Developer</p>
    <a href="https://www.linkedin.com/in/liudmyla-chumak-30732a164/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#linkedin"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${artemUrl}" alt="Artem" class="team-image">
    <p class="team-name">Artem Liaschenko</p>
    <p class="team-role">Developer</p>
    <a href="https://www.linkedin.com/in/artem-liaschenko-658819271" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#linkedin"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${sergiiUrl}" alt="Sergii" class="team-image">
    <p class="team-name">Sergii Podobrii</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/Mamont777" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#linkedin"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${andreiiUrl}" alt="Andreii" class="team-image">
    <p class="team-name">Andreii Pokotilo</p>
    <p class="team-role">Developer</p>
    <a href="https://www.linkedin.com/in/andrii-pokotilo/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#linkedin"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${yuraUrl}" alt="Yura" class="team-image">
    <p class="team-name">Yura Doloban</p>
    <p class="team-role">Developer</p>
    <a href="https://www.linkedin.com/in/yurii-doloban-055410254/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#linkedin"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${marynaUrl}" alt="Maryna" class="team-image">
    <p class="team-name">Maryna Molchanova</p>
    <p class="team-role">Developer</p>
    <a href="https://www.linkedin.com/in/maryna-molchanova-7a0772227/" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#linkedin"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${tetyanaUrl}" alt="Tetyana" class="team-image">
    <p class="team-name">Tetyana Karlova</p>
    <p class="team-role">Developer</p>
    <a href="https://www.linkedin.com/in/tetiana-karlova-083784270" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#linkedin"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${kirillUrl}" alt="Kirill" class="team-image">
    <p class="team-name">Kirill Parasochka</p>
    <p class="team-role">Developer</p>
    <a href="https://www.linkedin.com/in/кирилл-парасочка-825b2b134" target="_blank" class="team-git"><svg class="logo__icon" width="24" height="24">
      <use href="${spriteUrl}#linkedin"></use>
    </svg></a>
</div>
</div>`;

*/

//
const markup = `
<div class="backdrop-modal modal-open">
  <div class="team-modal">
    <h2 class="team__modal-title">GoIT team 5</h2>

    <button class="modale__btn-close btn__close-modal">
      <svg class="modal__btn-icon" width="18" height="18">
        <use href="./images/icons-sprite.svg#icon-close"></use>
      </svg>
    </button>
    <div class="team__modal-leader">
      <img
        class="team__modal-pic"
        src="/src/images/team.images/Dmytro_Karpenko.png"
        alt="Developer"
      />
      <p class="team__modal-member">Dmytro Karpenko</p>
      <p class="team__modal-role">Team Lead</p>
      <div class="social-icon">
        <a
          href="https://github.com/DmytroKarpenko88"
          class="team__modal-link"
          target="_blank"
        >
          <svg class="icon-github" width="25" height="25">
            <use href="/src/images/icons-sprite.svg#icon-github"></use>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/dmytro-karpenko-95a6221a/"
          class="team__modal-link"
          target="_blank"
        >
          <svg class="icon-linkedin" width="25" height="25">
            <use href="/src/images/icons-sprite.svg#icon-linkedin"></use>
          </svg>
        </a>
      </div>
    </div>
    <ul class="team__modal-list list">
      <li class="team__modal-item">
        <img
          class="team__modal-pic"
          src="/src/images/team.images/Maiia.png"
          alt="Developer"
        />
        <p class="team__modal-member">Maiia Robeiko</p>
        <p class="team__modal-role">Scrum Master</p>
        <div class="social-icon">
          <a
            href="https://github.com/MaiiaHa"
            class="team__modal-link"
            target="_blank"
          >
            <svg class="icon-github" width="25" height="25">
              <use href="/src/images/icons-sprite.svg#icon-github"></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/maiiaro/"
            class="team__modal-link"
            target="_blank"
          >
            <svg class="icon-linkedin" width="25" height="25">
              <use href="/src/images/icons-sprite.svg#icon-linkedin"></use>
            </svg>
          </a>
        </div>
      </li>
      <li class="team__modal-item">
        <img
          class="team__modal-pic"
          src="/src/images/team.images/Ruslan_Boyko.png"
          alt="Developer"
        />
        <p class="team__modal-member">Ruslan Boiko</p>
        <p class="team__modal-role">Developer</p>
        <div class="social-icon">
          <a
            href="https://github.com/marseille78"
            class="team__modal-link"
            target="_blank"
          >
            <svg class="icon-github" width="25" height="25">
              <use href="/src/images/icons-sprite.svg#icon-github"></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ruslan-boiko/"
            class="team__modal-link"
            target="_blank"
          >
            <svg class="icon-linkedin" width="25" height="25">
              <use href="/src/images/icons-sprite.svg#icon-linkedin"></use>
            </svg>
          </a>
        </div>
      </li>
      <li class="team__modal-item">
        <img
          class="team__modal-pic"
          src="/src/images/team.images/Halyna_Tulchii.png"
          alt="Developer"
        />
        <p class="team__modal-member">Halyna Tulchii</p>
        <p class="team__modal-role">Developer</p>
        <div class="social-icon">
          <a
            href="https://github.com/Maria-Shymanska"
            class="team__modal-link"
            target="_blank"
          >
            <svg class="icon-github" width="25" height="25">
              <use href="/src/images/icons-sprite.svg#icon-github"></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/maria-shymanska-aa8277251/"
            class="team__modal-link"
            target="_blank"
          >
            <svg class="icon-linkedin" width="25" height="25">
              <use href="/src/images/icons-sprite.svg#icon-linkedin"></use>
            </svg>
          </a>
        </div>
      </li>
      <li class="team__modal-item">
        <img
          class="team__modal-pic"
          src="/src/images/team.images/Ludmyla_Chumak.png"
          alt="Developer"
        />
        <p class="team__modal-member">Ludmila Chumak</p>
        <p class="team__modal-role">Developer</p>
        <div class="social-icon">
          <a
            href="https://github.com/ludmila121"
            class="team__modal-link"
            target="_blank"
          >
            <svg class="icon-github" width="25" height="25">
              <use href="/src/images/icons-sprite.svg#icon-github"></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/liudmyla-chumak-30732a164/"
            class="team__modal-link"
            target="_blank"
          >
            <svg class="icon-linkedin" width="25" height="25">
              <use href="/src/images/icons-sprite.svg#icon-linkedin"></use>
            </svg>
          </a>
        </div>
      </li>
      <li class="team__modal-item">
        <img
          class="team__modal-pic"
          src="/src/images/team.images/Artem_Liaschenko.png"
          alt="Developer"
        />
        <p class="team__modal-member">Artem Liaschenko</p>
        <p class="team__modal-role">Developer</p>
        <div class="social-icon">
          <a
            href="https://github.com/Artem4535"
            class="team__modal-link"
            target="_blank"
          >
            <svg class="icon-github" width="25" height="25">
              <use href="/src/images/icons-sprite.svg#icon-github"></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/artem-liaschenko-658819271"
            class="team__modal-link"
            target="_blank"
          >
            <svg class="icon-linkedin" width="25" height="25">
              <use href="/src/images/icons-sprite.svg#icon-linkedin"></use>
            </svg>
          </a>
        </div>
      </li>
      <li class="team__modal-item">
        <img
          class="team__modal-pic"
          src="/src/images/team.images/Sergii.png"
          alt="Developer"
        />
        <p class="team__modal-member">Sergii Podobrii</p>
        <p class="team__modal-role">Developer</p>
        <div class="social-icon">
          <a
            href="https://github.com/Mamont777"
            class="team__modal-link"
            target="_blank"
          >
            <svg class="icon-github" width="25" height="25">
              <use href="/src/images/icons-sprite.svg#icon-github"></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/andrii-pokotilo/"
            class="team__modal-link"
            target="_blank"
          >
            <svg class="icon-linkedin" width="25" height="25">
              <use href="/src/images/icons-sprite.svg#icon-linkedin"></use>
            </svg>
          </a>
        </div>
      </li>
      <li class="team__modal-item">
        <img
          class="team__modal-pic"
          src="/src/images/team.images/Andreii_Pokotilo.png"
          alt="Developer"
        />
        <p class="team__modal-member">Andrii Pokotilo</p>
        <p class="team__modal-role">Developer</p>
        <div class="social-icon">
          <a
            href="https://github.com/AndreyPokotilo"
            class="team__modal-link"
            target="_blank"
          >
            <svg class="icon-github" width="25" height="25">
              <use href="/src/images/icons-sprite.svg#icon-github"></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/andrii-pokotilo/"
            class="team__modal-link"
            target="_blank"
          >
            <svg class="icon-linkedin" width="25" height="25">
              <use href="/src/images/icons-sprite.svg#icon-linkedin"></use>
            </svg>
          </a>
        </div>
      </li>
      <li class="team__modal-item">
        <img
          class="team__modal-pic"
          src="/src/images/team.images/Yura_Doloban.png"
          alt="Developer"
        />
        <p class="team__modal-member">Yura Doloban</p>
        <p class="team__modal-role">Developer</p>
        <div class="social-icon">
          <a
            href="https://github.com/YuDo-fsd"
            class="team__modal-link"
            target="_blank"
          >
            <svg class="icon-github" width="25" height="25">
              <use href="/src/images/icons-sprite.svg#icon-github"></use>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/yurii-doloban-055410254/">
            <svg class="icon-linkedin" width="25" height="25">
              <use href="/src/images/icons-sprite.svg#icon-linkedin"></use>
            </svg>
          </a>
        </div>
      </li>
      <li class="team__modal-item">
        <img
          class="team__modal-pic"
          src="/src/images/team.images/Maryna_Molchanova.png"
          alt="Developer"
        />
        <p class="team__modal-member">Maryna Molchanova</p>
        <p class="team__modal-role">Developer</p>
        <div class="social-icon">
          <a
            href="https://github.com/MarynaMolchanova"
            class="team__modal-link"
            target="_blank"
          >
            <svg class="icon-github" width="25" height="25">
              <use href="/src/images/icons-sprite.svg#icon-github"></use>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/me?trk=p_mwlite_feed_updates-secondary_nav"
            class="team__modal-link"
            target="_blank"
          >
            <svg class="icon-linkedin" width="25" height="25">
              <use href="/src/images/icons-sprite.svg#icon-linkedin"></use>
            </svg>
          </a>
        </div>
      </li>
      <li class="team__modal-item">
        <img
          class="team__modal-pic"
          src="/src/images/team.images/Tetyana_Karlova-.png"
          alt="Developer"
        />
        <p class="team__modal-member">Tetiana Karlova</p>
        <p class="team__modal-role">Developer</p>
        <div class="social-icon">
          <a
            href="htths://github.com/Yanat58"
            class="team__modal-link"
            target="_blank"
          >
            <svg class="icon-github" width="25" height="25">
              <use href="/src/images/icons-sprite.svg#icon-github"></use>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/tetiana-karlova-083784270">
            <svg class="icon-linkedin" width="25" height="25">
              <use href="/src/images/icons-sprite.svg#icon-linkedin"></use>
            </svg>
          </a>
        </div>
      </li>
      <li class="team__modal-item">
      <img
        class="team__modal-pic"
        src="/src/images/team.images/Kirill.png"
        alt="Developer"
      />
      <p class="team__modal-member">Kirill Parasochka</p>
      <p class="team__modal-role">Developer</p>
      <div class="social-icon">
        <a
          href="https://github.com/kirill-pka"
          class="team__modal-link"
          target="_blank"
        >
          <svg class="icon-github" width="25" height="25">
            <use href="/src/images/icons-sprite.svg#icon-github"></use>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/кирилл-парасочка-825b2b134"
          class="team__modal-link"
          target="_blank"
        >
          <svg class="icon-linkedin" width="25" height="25">
            <use href="/src/images/icons-sprite.svg#icon-linkedin"></use>
          </svg>
        </a>
      </div>
    </li>
  </ul>
</div>
</div>
      `;
//
const container = document.querySelector('.js-team-modal');
// const markup2 = `<img src="${kirillUrl}"/>`;

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
