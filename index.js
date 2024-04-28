const dayWeeks = ['sun', 'mon', 'tue', 'wen', 'thu', 'fri', 'sat'] 
console.log(dayWeeks.pop());
console.log(dayWeeks.pop());
console.log(dayWeeks.pop()); 
console.log(dayWeeks.unshift('sun', 'sun'));
console.log(dayWeeks.push('fri'));
console.log(dayWeeks.unshift());

console.log(dayWeeks.splice('sun'));

//const divisor = Math.floor(color.length / 2);
const color = ['red', 'white', 'black', 'white', 'pink', 'aqua'];
console.log(color.splice(2, 0, 'green'));
console.log(color.splice(-1, 1, 'blue'));
console.log(color.splice(1, 0, 'mangenta','fucsia'));
console.log(color.splice(-3));

console.log(color);
console.log(color.indexOf('red'));
console.log(color.lastIndexOf('white'));

const elem = 7;

const fromIndex = 2;
const arrNum3 = [1, 2, 5, 7, 78, 8, 9, 60, 98, 92];
const indexFirstElement = arrNum3.indexOf(elem, fromIndex); //vou começar ver apartir de index 2
const indexLastElement = arrNum3.lastIndexOf(elem, fromIndex); //from index, se necessario! começa pesquisar em reverse(de fim para inicio)


/**slice()
slice(start)
slice(start, end)
*/
const arrNum3Copy = arrNum3.slice(); // criamos copia de arrNum3, novo all array
arrNum3Copy.splice(0, 1, 77);

const startIndex = 3;
const endIndex = 7;
const arrNum3CopyPart = arrNum3.slice(1);// copia apartir de startIndex

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]




/**Початковий список покупок 
const shoppingList = ["milk", "eggs", "bread"];
Всі завдання виконувати в наведеному порядку, після кожного завдання логувати отриманий результат
Використовувати лише перелічені методи: pop, push, shift, unshift, slice, splice, indexOf, lastIndexOf
- Додайте новий елемент в кінець списку 
- Видаліть останній елемент зі списку
- Додайте новий елемент на початок списку 
- Видаліть перший елемент зі списку
- Створіть повну копію списку покупок 
- Знайдіть індекс  "bread"
- Заменіть "bread" на "muffin"
- Знайдіть індекс  "bread" останнє входження
- Після молока додайте "meat", "fish"
- Видаліть "eggs"
*/

const shoppingList = ['milk', 'eggs', 'bread'];
//Додайте новий елемент в кінець списку    (push; splice)
console.log(shoppingList.push('cookies'));
//console.log(shoppingList.splice(-1,0,'cookies'));

// Видаліть останній елемент зі списку
console.log(shoppingList.pop());
//console.log(shoppingList.splice(-1,1));
//console.log(shoppingList(shoppingList.length, 1));

//Додайте новий елемент на початок списку 
console.log(shoppingList.unshift('potato'));
//console.log(shoppingList.splice(0,0,'potato'));

// Видаліть перший елемент зі списку
console.log(shoppingList.shift());
//console.log(shoppingList.splice(0, 1));

//Створіть повну копію списку покупок 
const shoppingListCopy = shoppingList.slice()
console.log(shoppingListCopy);

//Знайдіть індекс  "bread"
console.log(shoppingList.indexOf('bread'));

//Заменіть "bread" на "muffin"
console.log(shoppingList.splice(2, 1, 'muffin'));

//Знайдіть індекс  "bread" останнє входження
console.log(shoppingList.lastIndexOf('bread'));

//Після молока додайте "meat", "fish"
console.log(shoppingList.splice(0, 0, 'meat', 'fish'));

//Видаліть "eggs"
//console.log(shoppingList);     in console: (5) ['meat', 'fish', 'milk', 'eggs', 'muffin']
console.log(shoppingList.splice(-2, 1));

/**or 
console.log(shoppingList.indexOf('eggs'));     in console: index3
console.log(shoppingList.splice(3, 1));
*/

