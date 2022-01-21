let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');

let selectedPlanBtn = document.querySelectorAll('.plan button');

for (let i = 0; i < selectedPlanBtn.length; i++) {
  selectedPlanBtn[i].addEventListener('click', () => {
    // backdrop.style.display = 'block';
    // modal.style.display = 'block';

    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

let negativeBtn = document.querySelector('.modal__actions button');

negativeBtn.addEventListener('click', () => {
  // backdrop.style.display = 'none';
  // modal.style.display = 'none';

  modal.classList.remove('open');
  backdrop.classList.remove('open');
});
