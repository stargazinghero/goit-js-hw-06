let counterValue = 0;

const refs = {
  btnDecrement: document.querySelector('[data-action="decrement"]'),
  btnIncrement: document.querySelector('[data-action="increment"]'),
  value: document.getElementById('value'),
};

refs.btnDecrement.addEventListener('click', onDecrementBtn);
refs.btnIncrement.addEventListener('click', onIncrementBtn);

function onDecrementBtn() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}

function onIncrementBtn() {
  counterValue += 1;
  refs.value.textContent = counterValue;
}
