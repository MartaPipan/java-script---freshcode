//pop, push, shift, unshift, slice, splice, foreach(196), includes(270), some(276), indexOf, lastIndexOf
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
    
indexOf()
//екземплярів повертає перший індекс, за яким даний елемент можна знайти в масиві, або -1,якщо його немає.


toUpperCase()    //----method.toUpperCase----- result='HELLO';

toLowerCase(); //result:   hi maria, how are you?

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
// removed is [], no elements removed


//Видаліть 0 (нуль) елементів перед індексом 2 і вставте 'drum' і 'guitar'
const myFish1 = ["angel", "clown", "mandarin", "sturgeon"];
const removedFish1 = myFish1.splice(2, 0, "drum", "guitar");
// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed


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
console.table(users)


// STRING method exemple:
'hello'.toUpperCase()    //----method.toUpperCase----- result='HELLO';
let num2 = 'Hi Maria,how are you?';
console.log(num2.toUpperCase()); //result:   HI MARIA, HOW ARE YOU?

console.log(num2.toLowerCase()); //result:   hi maria, how are you?

'Hello my dear friend'.split() // method.split()------result: ['Hello my dear friend']------result:
// (20)['H', 'e', 'l', 'l', 'o', 'm', 'y', 'd', 'e', 'a', 'r', 'f', 'r', 'i', 'e', 'n', 'd']
 
'Hello my dear friend'.split('') //----('') - escolha todas palavras:
// (4) ['Hello', 'my', 'dear', 'friend']


//NUMBER method example:
let num3 = 67.78990;
let num4 = null;
console.log(num3.toFixed); //result num3 = 68;
console.log(num3 - num4);  //result 67.78990 - 0 = 67.78990;

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
перевіряє, чи всі елементи в масиві проходять перевірку, реалізовану наданою функцією. Він повертає логічне значення.


const userSubscriber = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6', 'user7', 'user8', 'user9', 'user10', 'user11', 'user12', 'user13', 'user14', 'user15', 'user16', 'user17', 'user18', 'user19', 'user20', 'user21', 'user22', 'user23', 'user24', 'user25', 'user26', 'user27', 'user28'];
const congratsIfMoreThan100 = userSubscriber;
if (userSubscriber.length > 100) {
    alert('WELCOME!');
}







