export default function error(txt) {
  const number = document.querySelector('.number');
  const errorF = document.createElement('div');
  errorF.className = 'form-error';
  errorF.dataset.id = 'error';
  errorF.textContent = txt;
  number.append(errorF);
  errorF.style.top = `${number.offsetTop + number.offsetHeight}px`;
  errorF.style.left = `${(number.offsetLeft + number.offsetWidth - errorF.offsetWidth) / 2}px`;
}
