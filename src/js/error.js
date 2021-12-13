export default function error(txt) {
  const number = document.querySelector('.number');
  const errorF = document.createElement('div');
  errorF.className = 'form-error';
  errorF.dataset.id = 'error';
  errorF.style.top = `${number.offsetTop + number.offsetHeight}px`;
  number.offsetParent.appendChild(errorF);
  errorF.textContent = txt;
  errorF.style.left = `${(number.offsetLeft + number.offsetWidth - errorF.offsetWidth) / 2}px`;
}
