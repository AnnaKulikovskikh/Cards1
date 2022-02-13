import defineProc from './defineProc';
import Error from './error';

export default function defineSystem() {
  const exActive = document.querySelector('.active');
  if (exActive) exActive.classList.remove('active');

  const number = document.querySelector('.number');
  const first = number.value.slice(0, 1);
  const system = defineProc(first);

  switch (system) {
    case 'no number':
      Error('Номер не введен!');
      break;
    case 'mir':
      document.querySelector('[data-id ="mir"]').classList.add('active');
      break;
    case 'american':
      document.querySelector('[data-id ="american"]').classList.add('active');
      break;
    case 'visa':
      document.querySelector('[data-id ="visa"]').classList.add('active');
      break;
    case 'mastercard':
      document.querySelector('[data-id ="mastercard"]').classList.add('active');
      break;
    default:
      Error('Платежная система не определена!');
  }
}
