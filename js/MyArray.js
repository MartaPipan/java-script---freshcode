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
  // others....
  // this.pop = function () {};
  // this.forEach = function () {};

//конструктор для данних (для сутності інстанса)
function MyArray() {
  this.length = 0;
}
// зв'язок між конструктором для данних та об'єктом проптотипу
MyArray.prototype = new MyArrayPrototype(); 

// MyArray._proto_ = new MyArrayPrototype();//para literal

