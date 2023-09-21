const categoriesEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesEl.length}`);

const titleEl = document.querySelectorAll('li.item h2');
let arrTitles = [];
titleEl.forEach(elem => {
    arrTitles.push(elem.innerText);
});

const liEl = document.querySelectorAll('li.item ul');
let arrCountElem = [];
liEl.forEach(elem => arrCountElem.push(elem.children.length));

function makeDescription(category, counter) {
    for (let i = 0; i < arrTitles.length; i += 1) {       
            console.log(`Category: ${arrTitles[i]}`);
            console.log(`Elements: ${arrCountElem[i]}`);
    }
}
makeDescription(arrTitles, arrCountElem);