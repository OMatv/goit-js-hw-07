const categoriesList = document.getElementById('categories');

const categoryItems = categoriesList.querySelectorAll('.item');

console.log('Number of categories:', categoryItems.length);

categoryItems.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;

  const subcategories = item.querySelectorAll('ul li');

  console.log(`${categoryName} - Elements: ${subcategories.length}`);
});
