indexOf()
//екземплярів повертає перший індекс, за яким даний елемент можна знайти в масиві, або -1,якщо його немає.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1


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


