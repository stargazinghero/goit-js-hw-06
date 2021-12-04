const refs = {
  inputName: document.getElementById('name-input'),
  outputName: document.getElementById('name-output'),
};

refs.inputName.addEventListener('input', onInputChange);

function onInputChange(e) {
  e.currentTarget.value
    ? (refs.outputName.textContent = e.currentTarget.value)
    : (refs.outputName.textContent = 'Anonymous');
}
