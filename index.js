// const array1 = new Array();
// const array3 = Array();
// const array2 = [];
// 4 - length array - amount empty cell
const array1 = new Array(4);
// '2' - element with index 0
const array3 = Array('2');
const array5 = ['2'];
const array4 = new Array(2,4,7);
const array2 = [2, 4, 7];

const arrNums = [5, 2, 9];
console.log(arrNums);
console.log(arrNums.length); //3
console.log(arrNums[2]);
//arrNums.length = 7;
arrNums[arrNums.length] = 11;//arrNums[3] = 11
console.log(arrNums.length); //4
arrNums[arrNums.length] = 51;//arrNums[4] = 51
arrNums.push(44);
arrNums.push(101,102,103);


console.log(arrNums);

console.log(arrNums instanceof Array);
console.log(arrNums instanceof Number);

console.log(Array.isArray(arrNums));