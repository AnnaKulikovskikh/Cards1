export default function error(txt) {
  const label = document.querySelector('label');
  const errorF = document.createElement('div');
  errorF.className = 'form-error';
  errorF.dataset.id = 'error';
  errorF.textContent = txt;
  label.append(errorF);
  errorF.style.top = `${label.offsetTop + label.offsetHeight + 15}px`;
  errorF.style.left = `${label.offsetLeft + (label.offsetWidth - errorF.offsetWidth) / 2}px`;
}
