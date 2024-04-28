

/**
 * Написати функцію, яка буде повертати об'єкт родина.
*Ключ - член родини
*Значення - ім'я
*В родині повинно бути як мінімум 2 особи, можна запитати в користувача скільки особ в його родині.
*І всі данні (і ключ і значення) вносяться через prompt
*const family = {
*    'mather': 'Olena',
*    'cat': 'Ray',
*}
 * @param {number} numberOfMembers
 * @param {string} role
 * @param {string} nome
 * @returns {Object} family
 */


function createFamily() {
    let numberOfMembers;
    while (true) {
        const input = prompt('How many members are there in your family?');
        numberOfMembers = Number(input);
        if (input === null || isNaN(numberOfMembers) || numberOfMembers < 2) {
            console.log('Please enter a valid number (minimum 2).');
        } 
        else {
            break;
        }
    }
    const family = {};
    for (let i = 0; i < numberOfMembers; i++) {
        let role;
        while (true) {
           role = prompt(`What is the role of family member ${i + 1}?`);
            if (!(/^[a-z][a-z]*$/.test(role)) ||
                role === null) {
                console.log('Please enter a valid role (not a number).');
            }
            else {
                break;
            }
        }

        let name;
        while (true) {
            name = prompt(`What is the name of the ${role}?`);
            if (!(/^[A-Z][a-z]*$/.test(name)) ||
                name === null){
                console.log('Invalid input. Please enter a valid name.');
            }
            else {
                break;
            }
        }

        family[role] = name;
    }
    return family;
}
const family = createFamily();
console.log(family);



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

