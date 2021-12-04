const refs = {
  input: document.getElementById('font-size-control'),
  text: document.getElementById('text'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(e) {
  refs.text.style.fontSize = `${e.currentTarget.value}px`;
}
