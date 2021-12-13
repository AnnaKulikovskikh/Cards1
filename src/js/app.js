// TODO: write code here
import defineSystem from './define';
import validLuhn from './luhn';
import removeError from './removeError';

const validateBtn = document.querySelector('.validate_btn');

validateBtn.addEventListener('click', validLuhn);
validateBtn.addEventListener('click', defineSystem);

document.querySelector('.number').addEventListener('focus', () => {
  removeError();
});
