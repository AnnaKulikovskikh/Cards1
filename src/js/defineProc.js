export default function defineProc(first) {
  let answer;
  switch (first) {
    case '':
      answer = 'no number';
      break;
    case '2':
      answer = 'mir';
      break;
    case '3':
      answer = 'american';
      break;
    case '4':
      answer = 'visa';
      break;
    case '5':
      answer = 'mastercard';
      break;
    default:
      answer = 'no define';
  }
  return answer;
}
