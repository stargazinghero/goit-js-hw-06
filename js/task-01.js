const categoriesItemsRef = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesItemsRef.length);

const categoriesTitlesRef = document.querySelectorAll('h2');

categoriesTitlesRef.forEach(element => {
  console.log(`Category: ${element.textContent}`);
  console.log(`Elements: ${element.nextElementSibling.children.length}`);
});
