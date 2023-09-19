const categoriesEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesEl.length}`);

const titleEl = document.querySelectorAll('li.item h2');
titleEl.forEach(elem => console.log(`Category: ${elem.innerText}`));

const liEl = document.querySelectorAll('li.item ul');
liEl.forEach(elem => console.log(`Elements: ${elem.children.length}`));
