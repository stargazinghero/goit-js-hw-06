const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.getElementById('ingredients');
const elements = ingredients.map(value => {
  const ingredientsItemRef = document.createElement('li');
  ingredientsItemRef.textContent = value;
  ingredientsItemRef.classList.add('item');
  return ingredientsItemRef;
});

ingredientsRef.append(...elements);

console.log(ingredientsRef);
