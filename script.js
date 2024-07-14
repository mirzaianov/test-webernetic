const dialog = document.querySelector('.dialog');
const closeModal = document.querySelector('.modal__close');
const buttons = document.querySelectorAll('.modal__buttons');
const anchor = document.querySelector('.modal__restore');

dialog.showModal();

closeModal.addEventListener('click', () => {
  dialog.close();
});

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    dialog.close();
  });
});

anchor.addEventListener('click', () => {
  dialog.close();
});

dialog.addEventListener('click', ({ target: dialog }) => {
  if (dialog.nodeName === 'DIALOG') {
    dialog.close('dismiss');
  }
});
