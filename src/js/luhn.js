import Error from './error';
import removeError from './removeError';
import luhnPorc from './luhnProc';

export default function validLuhn() {
  const number = document.querySelector('.number');
  const value = number.value.replace(/\D/g, '');
  if (value.length < 9) {
    removeError();
    return Error('Слишком короткий номер!');
  }
  luhnPorc(value);
  return 'Номер подходящей длины';
}
