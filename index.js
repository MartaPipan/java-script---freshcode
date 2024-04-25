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





const arrNums = [];
arrNums.push(7);
arrNums.push(77);
console.log(arrNums);
const arrNums2 = [];
console.log(arrNums.push === arrNums2.push);

const myArrayPrototype = {};
myArrayPrototype.push = function (value) {
  this[this.length] = value; 
  this.length++;
  return this.length;
};

function MyArray() {
  this.length = 0;
}

MyArray.prototype = myArrayPrototype;


const myArrNums = new MyArray();
myArrNums.push(20);
myArrNums.push(33);
console.log(myArrNums);
const myArrNums2 = new MyArray();
myArrNums2.push(1000);
console.log(myArrNums.push === myArrNums2.push);




// const myArrayPrototype = {
//   push: function (value) {
//     this[this.length] = value;
//     this.length++;
//     return this.length;
//   },
// };

//конструктор для прототипу
function MyArrayPrototype() {
  this.push = function (value) {
    this[this.length] = value;
    this.length++;
    return this.length;
  };
}
//конструктор для данних (для сутності інстанса)
// зв'язок між конструктором для данних та об'єктом проптотипу
MyArray.prototype = new MyArrayPrototype();
console.log(myArrNums.push === myArrNums2.push);