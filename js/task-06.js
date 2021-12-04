const refs = {
  input: document.querySelector('input'),
};

refs.input.addEventListener('blur', onInputBlur);

function onInputBlur(e) {
  if (e.currentTarget.value.length >= e.currentTarget.dataset.length) {
    refs.input.classList.add('valid');
    refs.input.classList.remove('invalid');
  } else {
    refs.input.classList.remove('valid');
    refs.input.classList.add('invalid');
  }
}
