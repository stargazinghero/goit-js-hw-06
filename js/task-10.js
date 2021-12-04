const refs = {
  input: document.querySelector('input'),
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  blockBoxes: document.getElementById('boxes'),
};

refs.createButton.addEventListener('click', onCreateButton);
refs.destroyButton.addEventListener('click', destroyBoxes);

function onCreateButton() {
  const boxes = createBoxes(refs.input.value);
  refs.blockBoxes.append(...boxes);
}

function destroyBoxes() {
  refs.blockBoxes.innerHTML = '';
}

function createBoxes(amount) {
  const elements = [];
  let widthElement = 30;
  let heightElement = 30;
  for (let i = 1; i <= amount; i += 1) {
    const element = document.createElement('div');
    element.style.width = `${widthElement}px`;
    element.style.height = `${heightElement}px`;
    widthElement += 10;
    heightElement += 10;
    element.style.backgroundColor = getRandomHexColor();
    elements.push(element);
  }
  return elements;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
