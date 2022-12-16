const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

let openSkillsNum = 0;

function toggleSkills() {
  for (let i = 0; i < skillsContent.length; i += 1) {
    if (this.parentNode === skillsContent[i]) {
      if (i === openSkillsNum) {
        openSkillsNum = -1;
        skillsContent[i].className = 'skills__content skills--closed';
      } else {
        openSkillsNum = i;
        skillsContent[i].className = 'skills__content skills--opened';
      }
    } else {
      skillsContent[i].className = 'skills__content skills--closed';
    }
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});

const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

function openModal() {
  for (let i = 0; i < modalBtns.length; i += 1) {
    if (this === modalBtns[i]) {
      modalViews[i].classList.add('modal--active');
    }
  }
}

modalBtns.forEach((modalBtn) => {
  modalBtn.addEventListener('click', openModal);
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('modal--active');
    });
  });
});

// eslint-disable-next-line no-undef, no-unused-vars
const swiper = new Swiper('.swiper', {

  cssMode: true,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  mouseWheel: true,
  keyboard: true
});

function redirect() {
  const name = document.querySelector('.contact__input[type="text"]').value;
  const email = document.querySelector('.contact__input[type="email"]').value;
  const encodedCommand = btoa(`{"name": "${name}", "email": "${email}"}`).slice(0, 64);
  window.open(`https://t.me/my_super_boss_for_contact_bot?start=${encodedCommand}`, '_blank');
}

const sendMessage = document.querySelector('.send-message__button');
sendMessage.addEventListener('click', redirect);
