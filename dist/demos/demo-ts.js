"use strict";
console.log("Hello World");
const age = 5;
const isBusy = true;
let firstName = "John";
let something = 50;
something = "Hello";
const tab = [1, 2, 3, 4];
let lastName = "Doe";
// Bon typage -> autocomplétion OK.
age.toFixed();
firstName.toLocaleUpperCase();
// Mauvais typage
// something;
// Trouver un élément d'un tableau
const numberToFind = 3;
const element = tab.find((elem) => {
    if (elem === numberToFind) {
        return true;
    }
    else {
        return false;
    }
});
console.log("Element : ", element);
// Trouve la position d'un élement dans un tableau
// Return -1 si il ne trouve pas
const elementIndex = tab.findIndex((elem) => {
    return elem === numberToFind;
});
console.log("Index : ", elementIndex);
// Vérifier si l'élement existe
if (elementIndex !== -1) {
    tab[elementIndex] = 56;
}
console.log(tab);
// Supprimer un élement, inserer des élements à une position SPLICE
tab.splice(0, 1);
console.log(tab);
tab.splice(0, 0, 5);
console.log(tab);
if (elementIndex !== -1) {
    tab.splice(elementIndex, 0, 99);
}
console.log(tab);
const product1 = {
    id: 1,
    name: "Pomme",
    price: 5.5,
    isPromo: false,
    stock: 0,
};
const product2 = {
    id: 2,
    name: "Poire",
    price: 5.3,
    isPromo: true,
};
const product3 = {
    id: 3,
    name: "Fraise",
    price: 1.77,
    isPromo: false,
};
const products = [product1, product2, product3];
// Filtrer les produits n'ayant pas de stock, ne modifie pas le tableau
const productsFilter = products.filter((prod) => {
    var _a;
    return ((_a = prod.stock) !== null && _a !== void 0 ? _a : -1) !== -1;
});
console.log(productsFilter);
products.push({
    id: 5,
    name: "Orange",
    price: 3.77,
    isPromo: false,
    stock: 77,
});
console.log(products);
