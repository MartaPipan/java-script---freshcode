const arrNums = [];
arrNums.push(7);
arrNums.push(77);
console.log(arrNums);
const arrNums2 = [];
console.log(arrNums.push === arrNums2.push);


const myArrayPrototype = {
  myArrayPrototype.push = function (value) {
    this[this.length] = value;
    this.length++;
    return this.length;
  },
};

//конструктор для прототипу:   + FORMULA PUSH
function MyArrayPrototype() {
  this.push = function (value) {
    this[this.length] = value;
    this.length++;
    return this.length;
  };
}
//конструктор для данних (для сутності інстанса)
function MyArray() {
  this.length = 0;
}

MyArray.prototype = myArrayPrototype;

// зв'язок між конструктором для данних та об'єктом проптотипу
MyArray.prototype = new MyArrayPrototype();

const myArrNums = new MyArray();
myArrNums.push(20);
myArrNums.push(33);
console.log(myArrNums);
const myArrNums2 = new MyArray();
myArrNums2.push(1000);
console.log(myArrNums.push === myArrNums2.push);



//конструктор для прототипу
function MyArrayPrototype() {
  this.push = function (value) {
    this[this.length] = value;
    this.length++;
    return this.length;
  };
}
//конструктор для данних (для сутності інстанса)
function MyArray() {
  this.length = 0;
}
// зв'язок між конструктором для данних та об'єктом проптотипу
MyArray.prototype = new MyArrayPrototype();


const userFunc = {
  getFullName: function () {
    return `${this.fname} ${this.sname}`;
  },
  getInfo: function () {
    return `${this.sname}, years old ${this.age}`;
  },
};

const user1 = {
  fname: 'Brad',
  sname: 'Pitt',
  age: 60,
};
user1.__proto__ = userFunc;

const user2 = {
  fname: 'Tom',
  sname: 'Rot',
  age: 59,
  __proto__: userFunc,
};




function User(fname, sname, age) {
  this.fname = fname;
  this.sname = sname;
  this.age = age;
}

function UserPrototype() {
  this.sayHello = function (){
    return `hello , I'm  ${this.fname}`;
  }
  this.getFullName = function () {
    return `${this.fname} ${this.sname}`;
  };
  this.getInfo = function () {
    return `${this.sname}, years old ${this.age}`;
  };
}

User.prototype = new UserPrototype();

const user3 = new User('Anna', 'Zeferino', 23);
const user4 = new User('Maria', 'Fox', 23);

