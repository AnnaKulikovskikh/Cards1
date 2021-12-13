import Error from './error';
import removeError from './removeError';

export default function luhnProc(value) {
  let nCheck = 0;
  for (let i = value.length - 1; i >= 0; i -= 1) {
    let nDigit = parseInt(value.charAt(i), 10);
    if (nDigit % 2 !== 0) {
      nDigit *= 2;
      if (nDigit > 9) {
        nDigit -= 9;
      }
    }
    nCheck += nDigit;
  }

  if ((nCheck % 10) !== 0) {
    removeError();
    Error('Номер невалиден!');
    return ('invalid');
  }
  return 'valid';
}
