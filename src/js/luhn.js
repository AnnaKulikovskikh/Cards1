import Error from './error';
import removeError from './removeError';
import luhnPorc from './luhnProc';

export default function validLuhn() {
  const number = document.querySelector('.number');
  const value = number.value.replace(/\D/g, '');

  const luhnCheck = luhnPorc(value);

  if (luhnCheck === 'short') {
    removeError();
    Error('Слишком короткий номер!');
  } else if (luhnCheck === 'long') {
    removeError();
    Error('Слишком длинный номер!');
  } else if (!luhnCheck) {
    removeError();
    Error('Номер не валиден');
  }
  if (!document.querySelector('.form-error')) {
    alert('Принято!');
  }
}
