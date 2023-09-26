const categoriesEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesEl.length}`);

let arrElements = [];
categoriesEl.forEach(elem => {
    arrElements.push(elem.children);
});

let arrTitles = [];
arrElements.forEach(element => {
    arrTitles.push(element[0].textContent);
});

let arrCountElem = [];
arrElements.forEach(el => {
    arrCountElem.push(el[1].children.length);
});

function makeDescription(category, counter) {
    for (let i = 0; i < arrTitles.length; i += 1) {
            console.log(`Category: ${arrTitles[i]}`);
            console.log(`Elements: ${arrCountElem[i]}`);
    }
}
makeDescription(arrTitles, arrCountElem);
