const modalCloseBtn = `
<button class="modal__btn-close btn__close-modal">
      <svg

      </svg>
    </button>
`;

const teamListModal = document.createElement('ul');
const teamTitle = document.createElement('h2');

function onModalTeam(e) {
  e.preventDefault();
}

renderTeamModal();
openModal();
modalBackdrop.firstElementChild.classList.add('team-modal');
modalBackdrop.firstElementChild.classList.remove('modal-open');

function renderTeamModal() {
  modalBackdrop.firstElementChild.innerHTML = '';
  teamListModal.innerHTML = '';
  teamTitle.innerHTML = '';
  teamTitle.classList.add('team__modal-title');
  teamTitle.insertAdjacentHTML('beforeend', 'GoIT team 5');
  modalBackdrop.firstElementChild.insertAdjacentElement('beforeend', teamTitle);

  modalBackdrop.firstElementChild.insertAdjacentElement(
    'beforeend',
    teamListModal
  );
  modalBackdrop.firstElementChild.insertAdjacentHTML(
    'beforeend',
    modalCloseBtn
  );
  teamListModal.classList.add('team__modal-list');
  team.map(member => {
    const markup = `<li class="team__modal-item">
		<img src="${member.img}" class="team__modal-pic">
		<h2 class="team__modal-member">${member.name}</h2>
    <p class="team__modal-role">${member.role}</p>
		<div>
		<a href="${member.social}" target="_blank" class="team__modal-link">
        <svg class="icon-github"></svg>
        </a>
		</div>
		</li>`;
    modalTeamList.insertAdjacentHTML('beforeend', markup);
  });
}
