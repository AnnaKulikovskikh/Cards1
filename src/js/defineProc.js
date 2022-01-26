import Error from './error';
import removeError from './removeError';

export default function defineProc(first) {
  let answer;
  switch (first) {
    case '':
      removeError();
      Error('Номер не введен!');
      answer = 'no number';
      break;
    case '2':
      document.querySelector('[data-id ="mir"]').classList.add('active');
      answer = 'mir';
      break;
    case '3':
      document.querySelector('[data-id ="american"]').classList.add('active');
      answer = 'american';
      break;
    case '4':
      document.querySelector('[data-id ="visa"]').classList.add('active');
      answer = 'visa';
      break;
    case '5':
      document.querySelector('[data-id ="mastercard"]').classList.add('active');
      answer = 'mastercard';
      break;
    default:
      // removeError();
      Error('Платежная система не определена!');
      answer = 'no define';
  }
  return answer;
}
