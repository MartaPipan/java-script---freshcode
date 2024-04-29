//конструктор для прототипу
function MyArrayPrototype() {
  this.push = function (value) {
    this[this.length] = value;
    this.length++;
    return this.length;
  };

  this.push = function (value) {
    this[this.length] = value;
    this.length++;
    return this.length;
  };
}

// this.pop = function () {
//     if (this.length===0) {
//       return
//     }
//   const LastItem = this[this.length - 1];
//   this.length--;
//   return LastItem;

  // this.forEach = function (func) {
  //   if (typeof !== 'function') {
  //     console.log(typeof func, func, 'not function');
  //     return;
  //   }
  //   for (let index = 0; index < this.length; index++) {
  //     const element = array[index];
  //     func(element);
  //   }
  // };
  //};
  



//конструктор для данних (для сутності інстанса)
function MyArray() {
  this.length = 0;
}
// зв'язок між конструктором для данних та об'єктом проптотипу
MyArray.prototype = new MyArrayPrototype(); 

// MyArray._proto_ = new MyArrayPrototype();//para literal

const myArrNum1 = new MyArray();
myArrNum1.push(9);
myArrNum1.push(8);
myArrNum1.push(7);


