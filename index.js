
//INCLUDES визначає, чи містить масив певне значення серед своїх записів, повертаючи true чи false відповідно in console
const arrNum10 = [1, 5, 9, 4, 6];
console.log(arrNum10.includes(56)); // key===
console.log(arrNum10.includes('5'));   //key '5'!== 5 //false
console.log(arrNum10.includes(5));     //key5 === 5 in object // true


//SOME
//перевіряє, чи принаймні один елемент у масиві проходить перевірку, реалізовану наданою функцією. Він повертає true, якщо в масиві знаходить елемент, для якого надана функція повертає true; інакше він повертає false. Це не змінює масив.
//comfirmar se existe element >10
console.log(arrNum10.some(function (element) { return element > 10 })); //false for arrNum10
console.log(arrNum10.some(function (element) { return element === 6 })); // true

arrNum10.some(function (element) {
    return element % 3 === 0;
});

//EVERY
перевіряє, чи всі елементи в масиві проходять перевірку, реалізовану наданою функцією.Він повертає логічне значення.
if arrNum10.every(function name(element) {
    returnelement > 6; 
}) {
    console.log('10%');
}