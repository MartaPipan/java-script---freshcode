'use strict';


 //Існує масив:
const products = [
    { id: 1, name: "Молоко", price: 25, quantity: 14, category: "Молочні продукти" },
    { id: 2, name: "Хліб", price: 12, quantity: 100, category: "Хлібобулочні вироби" },
    { id: 3, name: "Яйця", price: 20, quantity: 12, category: "Птахоферма" },
    { id: 4, name: "Масло", price: 35, quantity: 31, category: "Молочні продукти" },
    { id: 5, name: "Цукор", price: 15, quantity: 44, category: "Кондитерські вироби" },
    { id: 6, name: "Картопля", price: 10, quantity: 50, category: "Овочі та фрукти" },
    { id: 7, name: "Помідори", price: 30, quantity: 71, category: "Овочі та фрукти" },
    { id: 8, name: "Індичка", price: 40, quantity: 10, category: "М'ясо та м'ясні вироби" },
    { id: 9, name: "Яловичина", price: 25, quantity: 120, category: "М'ясо та м'ясні вироби" },
    { id: 10, name: "Макарони", price: 18, quantity: 140, category: "Макаронні вироби" },
    { id: 11, name: "Сир", price: 50, quantity: 19, category: "Молочні продукти" },
    { id: 12, name: "Печиво", price: 22, quantity: 56, category: "Кондитерські вироби" },
    { id: 13, name: "Куряче філе", price: 40, quantity: 12, category: "М'ясо та м'ясні вироби" },
    { id: 14, name: "Банани", price: 18, quantity: 63, category: "Овочі та фрукти" },
    { id: 15, name: "Свинина", price: 60, quantity: 3, category: "М'ясо та м'ясні вироби" },
    { id: 16, name: "Чай чорний", price: 30, quantity: 5, category: "Чай та кава" },
    { id: 17, name: "Кава", price: 50, quantity: 8, category: "Чай та кава" },
    { id: 18, name: "Сода", price: 8, quantity: 2, category: "Безалкогольні напої" },
    { id: 19, name: "Сметана", price: 25, quantity: 18, category: "Молочні продукти" },
    { id: 20, name: "Яблука", price: 20, quantity: 88, category: "Овочі та фрукти" }
];

// Exercise1.1
/** Розрахувати загальну кількість(quantity) продуктів з категорії  "Овочі та фрукти"
 * @param {array} products - The array of products
 * @returns {number} - The total quantity of products from the category "Vegetables and Fruits"
 */
const quantityOfVegetablesFruit = products.reduce((summa, product) => {
    if (product.category === "Овочі та фрукти") {
        summa += product.quantity;
    }
    return summa;
},
    0);

console.log('загальна кількість продуктів з категорії  "Овочі та фрукти": ', quantityOfVegetablesFruit);
    
//Exercise1.2
/**
 * @param {array} products - The array of products ===>
 * ===> filter the array of products based on the category "Овочі та фрукти"(filter)
 * @returns {number} The total quantity of products from the category "Vegetables and Fruits"(reduce)
 */
const quantityOfVegetablesAndFruits = products
  .filter(product => product.category === "Овочі та фрукти")
  .reduce((summa, product) => summa + product.quantity, 0);

console.log('Загальна кількість продуктів в категорії "Овочі та фрукти": ', quantityOfVegetablesAndFruits);



//Exercise2.
/**Розрахувати загальну вартість(quantity*price) продуктів з категорії  "Молочні продукти"
 * @param {array} products - The array of products ===>
 * ===> filter the array of products based on the category "Молочні продукти"(filter)
 * @returns { number } - The total price of products from the category "Молочні продукти"(reduce)
 */
const milkCategoryTotalPrice = products
    .filter(product => product.category === "Молочні продукти") 
    .reduce((total, product) => total + product.price * product.quantity, 0); 

console.log('Загальна вартість продуктів з категорії "Молочні продукти": ', milkCategoryTotalPrice);


//Exercise3
/**Повернути новий масив з відсортованими продуктами в порядку зменшення quantity (джерельний масив не змінювати)/**
 * @param {array} products 
 * @param {array} copyProducts(new array) ===>>> sorting the array in descending order (sort)
 * @returns {array} sortedProducts 
 */
const sortProductsByQuantity = (products) => {
    const copyProducts = [...products];
    copyProducts.sort((product1, product2) => product2.quantity - product1.quantity);
    return copyProducts;
}
const sortedProducts = sortProductsByQuantity(products);
console.log(sortedProducts);


//Exercise4
/**Знайти найдешевший та найдорожчий продукти
 * @param {array} arrPriceOfProducts - New array with prices of products.
 * @returns {number} minPrice - The minimum price (price at index 0 of the sorted array).
 * @returns {number} maxPrice - The maximum price (price at the last index of the sorted array).
 */

const arrPriceOfProducts = products.map(products => products.price);
arrPriceOfProducts.sort((price1, price2) => price1 - price2);

const minPrice = arrPriceOfProducts[0];
const maxPrice = arrPriceOfProducts[arrPriceOfProducts.length - 1];

console.log('minimal price of product:', minPrice);
console.log('maximal price of product:', maxPrice);

//Exercise5
/**
 * Розрахувати середню ціну продуктів з категорії  "М'ясо та м'ясні вироби"
 * 
 * 1. filter the array of products based on the category "М'ясо та м'ясні вироби"
 * 2. apply the reduce method to sum up the prices of these filtered products
 * 3. filter the array of products (category "М'ясо та м'ясні вироби") and find length of array
 * 4. divide the total sum by the length of the filtered products array to get the average price
 * @param {array} products - The array of products
 * @returns {number} - The average price of products in the specified category
 */

const averageMeatPrice = products
    .filter(product => product.category === "М'ясо та м'ясні вироби")
    .reduce((total, product) => (total + product.price), 0) /
    products.filter(product => product.category === "М'ясо та м'ясні вироби").length; 

console.log('Average meat price: ', averageMeatPrice);

