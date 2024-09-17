'use strict';
// document.querySelector('#plyr').textContent = pscore;
// document.querySelector('#update').textContent = player;
let pscore = 0;
let compscore = 0;

function uploadpic(pc, cm) {
  if (pc === 1) {
    document.querySelector('.run-img').src = 'img/1-solid.svg';
  }
  if (pc === 2) {
    document.querySelector('.run-img').src = 'img/2-solid.svg';
  }
  if (pc === 3) {
    document.querySelector('.run-img').src = 'img/3-solid.svg';
  }
  if (pc === 4) {
    document.querySelector('.run-img').src = 'img/4-solid.svg';
  }
  if (pc === 5) {
    document.querySelector('.run-img').src = 'img/5-solid.svg';
  }
  if (pc === 6) {
    document.querySelector('.run-img').src = 'img/6-solid.svg';
  }
  if (cm === 1) {
    document.querySelector('.c-run').src = 'img/1-solid.svg';
  }
  if (cm === 2) {
    document.querySelector('.c-run').src = 'img/2-solid.svg';
  }
  if (cm === 3) {
    document.querySelector('.c-run').src = 'img/3-solid.svg';
  }
  if (cm === 4) {
    document.querySelector('.c-run').src = 'img/4-solid.svg';
  }
  if (cm === 5) {
    document.querySelector('.c-run').src = 'img/5-solid.svg';
  }
  if (cm === 6) {
    document.querySelector('.c-run').src = 'img/6-solid.svg';
  }
}
let p = 1;
let c = 0;
function checkscore(pl, cm) {
  if (pl > cm) {
    document.querySelector('#update').textContent = 'P';
  } else if (pl < cm) {
    document.querySelector('#update').textContent = 'C';
  }
}
document.querySelector('.check').addEventListener('click', function () {
  const player = Number(document.querySelector('.guess').value);
  console.log(player);
  const comp = Math.trunc(Math.random() * 6 + 1);
  console.log(comp);
  uploadpic(player, comp);
  if (p === 1 && c === 0) {
    if (player != comp) {
      pscore += player;
    }
    document.querySelector('#plyr').textContent = pscore;
    document.querySelector('#update').textContent = player;
    if (player === comp) {
      // document.querySelector('#plyr').textContent = pscore;
      document.querySelector('#update').textContent = 'out';
      p = 0;
      c = 1;
    }
  } else if (c === 1 && p === 0) {
    if (player != comp) {
      // pscore += player;
      compscore += comp;
    }
    document.querySelector('#cmp').textContent = compscore;
    document.querySelector('#update').textContent = comp;
    if (pscore < compscore) {
      document.querySelector('#cmp').textContent = compscore;
      document.querySelector('#update').textContent = comp;
      alert('comp win');
      location.replace(location.href.split('#')[0]);
    }
    if (player === comp) {
      // document.querySelector('#plyr').textContent = pscore;
      document.querySelector('#update').textContent = 'out';
      // checkscore(player, comp);
      if (pscore < compscore) {
        document.querySelector('#cmp').textContent = compscore;
        // document.querySelector('#update').textContent = comp;
        alert('comp win');
      } else {
        alert('p win');
      }
      location.replace(location.href.split('#')[0]);
      // document.querySelector('.c-run').src = 'img/';
      c = 0;
      // c = 1;
    }
  }
});
// ('use strict');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
