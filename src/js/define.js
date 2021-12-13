import defineProc from './defineProc';

export default function defineSystem() {
  const exActive = document.querySelector('.active');
  if (exActive) exActive.classList.remove('active');

  const number = document.querySelector('.number');
  const first = number.value.slice(0, 1);

  defineProc(first);

  if (!document.querySelector('.form-error')) {
    alert('Принято!');
  }
}
