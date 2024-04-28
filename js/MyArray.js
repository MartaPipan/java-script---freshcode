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

// Example
const subscribes = [
  { name: 'user1', age: 20, professional: 'nurse' },
  { name: 'user2', age: 27, professional: 'programmer' }
];
console.log(userArr[1]); // element 2
const haveNewSubscribes = true;
if (haveNewSubscribes) {
  subscribes.push({name:'user3', age: 29, professional: 'teacher'})
}
console.log(subscribes)

