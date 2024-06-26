// pop, push, shift, unshift, slice, splice, forEach(196), includes(270), some(276),find(282), filter(), 
// map(), sort(), indexOf, lastIndexOf, at
pop()
//видаляє останній елемент із масиву та повертає цей елемент. Цей метод змінює довжину масиву.

push()
//додає вказані елементи в кінець масиву та повертає нову довжину масиву.

shift()
//видаляє перший елемент із масиву та повертає цей видалений елемент. Цей метод змінює довжину масиву.

unshift()
//додає  вказані елементи на початок масиву та повертає нову довжину масиву.

slice()
//повертає поверхневу копію частини масиву в новий об’єкт масиву, вибраний з start до end ( end не включено), де start і end представляє індекс елементів цього масиву. Вихідний масив не буде змінено.

splice()
//змінює вміст масиву шляхом видалення або заміни існуючих елементів та/або додавання нових елементів на місці .

forEach()
//виконує надану функцію один раз (за послідовністю) для кожного елемента масиву

incluides()
//INCLUDES визначає, чи містить масив певне значення серед своїх записів, повертаючи true чи false відповідно in console

some()
//перевіряє, чи принаймні один елемент у масиві проходить перевірку, реалізовану наданою функцією. Він повертає true, якщо в масиві знаходить елемент, для якого надана функція повертає true; інакше він повертає false. Це не змінює масив.

EVERY()
//перевіряє, чи всі елементи в масиві проходять перевірку, реалізовану наданою функцією.Він повертає логічне значення.

FIND ()
//повертає перший елемент у наданому масиві, який задовольняє надану функцію тестування. Якщо жодне значення не задовольняє тестову функцію, undefined повертається.

FILTER()
//створює копію частини даного масиву, відфільтровану лише до елементів із даного масиву, які проходять перевірку, реалізовану наданою функцією.

map()
//створює новий масив, заповнений результатами виклику наданої функції для кожного елемента в масиві, що викликає.    

sort()
//cортує елементи масиву на місці та повертає посилання на той самий масив, тепер відсортований

toSorted()
//є версією методу для sort() . Він повертає новий масив з елементами, відсортованими в порядку зростання.



indexOf()
//екземплярів повертає перший індекс, за яким даний елемент можна знайти в масиві, або -1,якщо його немає.
toUpperCase()    //----method.toUpperCase----- result='HELLO';

toLowerCase(); //result:   hi maria, how are you?

At()
//Метод at()екземплярів Arrayприймає ціле значення та повертає елемент із цим індексом, враховуючи додатні та від’ємні цілі числа. Від’ємні цілі числа починаються від останнього елемента в масиві.


'Hello my dear friend'.split() // method.split()------result: ['Hello my dear friend']------result:
// (20)['H', 'e', 'l', 'l', 'o', 'm', 'y', 'd', 'e', 'a', 'r', 'f', 'r', 'i', 'e', 'n', 'd']
 
'Hello my dear friend'.split('') //----('') - escolha todas palavras:
// (4) ['Hello', 'my', 'dear', 'friend']

indexFirstElement()



Array.of()
Array.of(element1)
Array.of(element1, element2)
Array.of(element1, element2, /* …, */ elementN)

indexOf()
indexOf(searchElement)
indexOf(searchElement, fromIndex)
// повертає перший індекс, за яким даний елемент можна знайти в масиві, або -1,якщо його немає.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1

lastIndexOf()
//lastIndexOf(elem, fromIndex); começa pesquisar em reverse (de fim para inicio)
console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1
push()
//Метод push() додає вказані елементи в кінець масиву та повертає нову довжину масиву.
beasts.push('rabbit');
beasts.push('chickens', 'cats', 'dogs');

pop()
beasts.pop();

unshift()
//додає  вказані елементи на початок масиву та повертає нову довжину масиву.
beasts.unshift('wolf', 'fox')

slice()
//повертає поверхневу копію частини масиву в новий об’єкт масиву, вибраний з start до end ( end не включено), де start і end представляє індекс елементів цього масиву. Вихідний масив не буде змінено.
slice(start)
slice(start, end)
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
console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
splice()
//Приклади
//Видаліть 0 (нуль) елементів перед індексом 2 і вставте "drum"
const myFis = ["angel", "clown", "mandarin", "sturgeon"];
const removedFis = myFis.splice(2, 0, "drum");
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]

//Видаліть 0 (нуль) елементів перед індексом 2 і вставте 'drum' і 'guitar'
const myFish1 = ["angel", "clown", "mandarin", "sturgeon"];
const removedFish1 = myFish1.splice(2, 0, "drum", "guitar");
// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]

//Видаліть 0 (нуль) елементів з індексом 0 і вставте "ангел"
//splice(0, 0, ...elements)вставляє елементи на початку масиву = unshift();
const myFish2 = ["clown", "mandarin", "sturgeon"];
const removedmyFish2 = myFish2.splice(0, 0, "angel");
// myFish is ["angel", "clown", "mandarin", "sturgeon"]
// no items removed
//Видалити 0(нуль) елементів за останнім індексом і вставити "осетрин"
//splice(array.length, 0, ...elements)вставляє елементи в кінець масиву = push().
const myFish3 = ["angel", "clown", "mandarin"];
const removed3 = myFish3.splice(myFish.length, 0, "sturgeon");
// myFish is ["angel", "clown", "mandarin", "sturgeon"]
// no items removed
//Видалити 1 елемент з індексом 3
const myFish4 = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed4 = myFish4.splice(3, 1);
// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]
//Видаліть 1 елемент під індексом 2 і вставте "труба"
const myFish5 = ["angel", "clown", "drum", "sturgeon"];
const removed5 = myFish5.splice(2, 1, "trumpet");
// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]
//Видаліть 2 елементи з індексу 0 і вставте "папуга", "анемон" і "синій"
const myFish6 = ["angel", "clown", "trumpet", "sturgeon"];
const removed6 = myFish6.splice(0, 2, "parrot", "anemone", "blue");
// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]
//Видаліть 2 елементи, починаючи з індексу 2
const myFish7 = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
const removed7 = myFish7.splice(2, 2);
// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]
//Видалити 1 елемент з індексу -2
const myFish8 = ["angel", "clown", "mandarin", "sturgeon"];
const removed8 = myFish8.splice(-2, 1);
// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]
//Видалити всі елементи, починаючи з індексу 2
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2);
// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]
forEach()
const arrNum = [4, 8, 2, 3, 6, 7]
/** 
for (let index = 0; index < arrNum.length; index++) {
    const element = arrNum[index];
    if (element%2) {
        console.log(element);
    }
}

for (let index = 0; index < arrNum.length; index++) {
    console.log(arrNum[index]**2); 
}
*/
forEach()
const arrNum1 = [4, 8, 2, 3, 6, 7]
//EXAMPLE1
//STEP1
function logOdd(element) {
    if (element%2) {
        console.log(element);
    }
}
//STEP2
arrNum1.forEach(logOdd);
//STEP3
arrNum1.forEach(function(element) {console.log(element%2)})
//EXAMPLE2
//STEP1
function logPow2(element) {
    console.log(element**2);
}
//STEP2
arrNum1.forEach(logPow2);
//STEP3
arrNum1.forEach(function (element) { console.log(element ** 2) })
//exemple adicion subscribe for other users
const users = [
    { id: 100, login: 'qwer1', isMale: true },
    { id: 200, login: 'qnjker', isMale: true },
    { id: 101, login: 'qwenmnr', isMale: false },
    { id: 178, login: 'qw86er', isMale: false },
    { id: 10, login: 'qweeadr', isMale: true },
    { id: 111, login: 'qwesaaszr', isMale: true },
]
users.forEach(function(user) {
    user.isSubscribe = true;
    user.wichList = [];
})
console.table(users);
//INCLUDES визначає, чи містить масив певне значення серед своїх записів, повертаючи true чи false відповідно in console
const arrNum10 = [1, 5, 9, 4, 6];
console.log(arrNum10.includes(56)); // key===
console.log(arrNum10.includes('5'));   //key '5'!== 5 //false
console.log(arrNum10.includes(5));     //key5 === 5 in object // true
//SOME
//EXAMPLE1
console.log(arrNum10.some(function (element) { return element > 10 })); //false for arrNum10
console.log(arrNum10.some(function (element) { return element === 6 })); // true
//EXAMPLE2
arrNum10.some(function (element) {
    return element % 3 === 0;
});
//EVERY
//перевіряє, чи всі елементи в масиві проходять перевірку, реалізовану наданою функцією. Він повертає логічне значення.
if (arrNum10.every(function name(element) {
    return element > 6;
})
){ console.log('10%') }
//FIND 
//повертає перший елемент у наданому масиві, який задовольняє надану функцію тестування. Якщо жодне значення не задовольняє тестову функцію, undefined повертається.
console.log(
    arrNum10.find(function (element) {
    return element > 3;
})
);
console.log(
    arrNum10.findIndex(function (element) {
    return element > 3;
})
);
console.log(
    arrNum10.findLast(function (element) {
    return element > 3;
})
);
console.log(
    arrNum10.findLastIndex(function (element) {
    return element >3;
})
);
// FILTER
//створює копію частини даного масиву, відфільтровану лише до елементів із даного масиву, які проходять перевірку, реалізовану наданою функцією.
const arrNum11 = [1, 5, 9, 4, 6];
const newArrNum10 = arrNum10.filter(function (element) {
    return element > 3;
});
console.log(arrNum10);
console.log(newArrNum10);

const users1 = [
    { id: 100, login: 'qwerr', isMale: true },
    { id: 200, login: 'qseipor', isMale: true },
    { id: 101, login: 'opklda', isMale: false },
    { id: 178, login: 'robvear', isMale: false },
    { id: 10, login: 'gumilo', isMale: true }, 
]
users.forEach(function(user) {
    user.isSubscribe = Math.random()>0.5
})
console.table(users1);

const userWithSubscribe = users1.filter(function (user) {
    return user.isSubscribe === true;
})
console.table(userWithSubscribe);

//escolher womans de  users
const userWomans = users1.filter(function (user) {
    return user.isMale===false;
})
console.table(userWomans);

const arrNum11 = [1, 5, 2, 4, 6];

//map
//створює новий масив, заповнений результатами виклику наданої функції для кожного елемента в масиві, що викликає.

function incrementElem(elem) {
    return ++elem;
}
const newArrNum11 = arrNum11.map(incrementElem);
console.log(newArrNum11);

const users = [
    { id: 100, login: 'qwerr', isMale: true },
    { id: 200, login: 'qseipor', isMale: true },
    { id: 101, login: 'opklda', isMale: false },
    { id: 178, login: 'robvear', isMale: false },
    { id: 10, login: 'gumilo', isMale: true }, 
]
// recolher so logins: 
const logins = users.map(function (user) {
    return user.login; 
})
console.log(logins);

//recolher so id dos users:
const userId = users.map(function (user) {
    return user.id; 
})
console.log(userId);
console.log(users);

//Exercise1     /=Exercise2/
//recolher logins dos homens
const men = users.map(function (user) {
    return user.isMale;
})
console.table(men);
const menLogins = men.map(function (user) {
    return user.login;
})
console.log(menLogins);


//Exercise2    /= Exercise1  
const menLogins2 = users
    .filter(function (user) {
        return user.isMale;
    })
    .map(function (user) {
        return user.login;
    });
console.log(menLogins2); 


//Exercise 3
const products = [
  { name: "Молоко", price: 25, currency: "грн", quantity: 29 },
  { name: "Хліб", price: 12, currency: "грн", quantity: 37 },
  { name: "Яйця", price: 20, currency: "грн", quantity: 12 },
  { name: "Сир", price: 45, currency: "грн", quantity: 14 },
  { name: "Сік", price: 33, currency: "грн", quantity: 32 },
  { name: "Печиво", price: 7, currency: "грн", quantity: 120 },
];
//recolher products this prise < 20
const productPriceMinus20 = products
    .filter(function (product) {
        return product < 20;
    })
    .map(function (product) {
        return product.name;
    });
console.log(productPriceMinus20);




sort()
//cортує елементи масиву на місці та повертає посилання на той самий масив, тепер відсортований

const arrNum22 = [1, 7, 12.101, 124, 5, 2, 4, 6];
//arrNum22.sort();
//console.log(arrNum22);
// console:(8) [1, 12.101, 124, 2, 4, 5, 6, 7]  ----from code ASCI
arrNum22.sort(compareNumbers);       
console.log(arrNum22);

// function compareNumbers(a,b) {
//     return a - b;
// }
// //console:(8) [1, 2, 4, 5, 6, 7, 12.101, 124]


function compareNumbers(a,b) {
    return b - a;
}
console.log();
//(8) [124, 12.101, 7, 6, 5, 4, 2, 1]


const users = [
    { id: 100, login: 'qwerr', isMale: true },
    { id: 200, login: 'qseipor', isMale: true },
    { id: 101, login: 'opklda', isMale: false },
    { id: 178, login: 'robvear', isMale: false },
    { id: 10, login: 'gumilo', isMale: true }, 
]
console.table(users);

users.sort(function(user1, user2) {
    if (user1.login < user2.login) return -1;
    if (user1.login > user2.login) return 1;
    return 0;
})
console.table(users);


users.sort(function (user1, user2) {
    return user1.id - user2.id;
})
console.table(users);

// sort product of price:
console.table(products);

products.sort(function (item1, item2) {
    return item1.price - item2.price;
})
console.table(products);



//to sorted
//є версією методу для sort() . Він повертає новий масив з елементами, відсортованими в порядку зростання.
const newArrNum22 = arrNum22.toSorted(compareNumbers)     
console.log(arrNum22);


//at
//Метод at()екземплярів Array приймає ціле значення та повертає елемент із цим індексом, враховуючи додатні та від’ємні цілі числа. Від’ємні цілі числа починаються від останнього елемента в масиві.
// Our array with items
const cart = ["apple", "banana", "pear"];

// A function which returns the last item of a given array
function returnLast(arr) {
  return arr.at(-1);
}

// Get the last item of our array 'cart'
const item1 = returnLast(cart);
console.log(item1); // 'pear'

// Add an item to our 'cart' array
cart.push("orange");
const item2 = returnLast(cart);
console.log(item2); // 'orange'








const userSubscriber = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6', 'user7', 'user8', 'user9', 'user10', 'user11', 'user12', 'user13', 'user14', 'user15', 'user16', 'user17', 'user18', 'user19', 'user20', 'user21', 'user22', 'user23', 'user24', 'user25', 'user26', 'user27', 'user28'];
const congratsIfMoreThan100 = userSubscriber;
if (userSubscriber.length > 100) {
    alert('WELCOME!');
}
