const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);
const info = categories.forEach(category => {
    const title = category.firstElementChild.textContent;
    console.log(`Category: ${title}`);
    const elements = category.lastElementChild.childElementCount;
    console.log(`Elements: ${elements}`);
});