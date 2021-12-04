const refs = {
  btnChangeColor: document.querySelector('.change-color'),
  valueColor: document.querySelector('.color'),
};

refs.btnChangeColor.addEventListener('click', onButtonChangeColor);

function onButtonChangeColor() {
  const randomHexColor = getRandomHexColor();
  document.body.style.backgroundColor = randomHexColor;
  refs.valueColor.textContent = randomHexColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
