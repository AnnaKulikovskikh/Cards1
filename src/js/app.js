// TODO: write code here
import defineSystem from './define';
import validLuhn from './luhn';
import removeError from './removeError';

const validateBtn = document.querySelector('.validate_btn');

validateBtn.addEventListener('click', removeError);
validateBtn.addEventListener('click', defineSystem);
validateBtn.addEventListener('click', validLuhn);

document.querySelector('.number').addEventListener('focus', () => {
  removeError();
});
