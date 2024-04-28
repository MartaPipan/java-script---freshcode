const dayWeeks = ['sun', 'mon', 'tue', 'wen', 'thu', 'fri', 'sat'] 
console.log(dayWeeks.pop());
console.log(dayWeeks.pop());
console.log(dayWeeks.pop()); 
console.log(dayWeeks.unshift('sun', 'sun'));
console.log(dayWeeks.push(fri));
console.log(dayWeeks.unshift());

console.log(dayWeeks.splice('sun'));

const divisor = Math.floor(color.length / 2);
const color = ['red','white', 'black', 'white', 'pink', 'aqua']
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
const indexFirstElement = arrNum3.indexOf(elem, fromIndex); //vou começar ver apartir de index 4
const indexLastElement = arrNum3.lastIndexOf(elem, fromIndex); //from index, se necessario! começa pesquisar em reverse(de fim para inicio)

const arrNum3Copy = arrNum3.slice(); // criamos copia de arrNum3, novo all array
arrNum3Copy.splice(0, 1, 77);// igual:
arrNum3Copy[0] = 77;

const startIndex = 3;
const endIndex = 7;
const arrNum3CopyPart = arrNum3.slice(1);// copia apartir de startIndex

