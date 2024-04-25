// пропонуємо розв'язати приклад з множення з двома випадковими числами від [0-10] до тих пір поки юзер не наведе правильну відповідь
//вивести в промпті приклад множення з двома випадковими числами від [0-10]
//відловити помилки '' null string wrong answer
//якщо правильно - похвалити
function getRandomIntInclusive(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function isErrorUserInputNumber(value) {
  return value === '' || value === null || Number.isNaN(Number(value));
}
const MAX_AMOUNT = 300;
for (let i = 0; i < MAX_AMOUNT; i++) {
  const randomNumber1 = getRandomIntInclusive();
  const randomNumber2 = getRandomIntInclusive();
  const rightResult = randomNumber1 * randomNumber2;
  const strTask = `Обчисліть вираз і введіть результат
${randomNumber1} * ${randomNumber2} = `;
  while (true) {
    const userResult = prompt(strTask);
    if (isErrorUserInputNumber(userResult)) {
      continue;
    }
    if (rightResult === Number(userResult)) {
      alert('win');
      break;
    }
  }
}

//ключем об'єкта може бути рядок або символ
const nameProperty1 = 'fname';
const nameProperty2 = 'sname';
const user = {
  fname: 'Brad',
  sname: 'Pitt',
  age: 60,
  'two word': 'qwerty asdfgh',
  45: 333,
};
console.log(user.fname);
console.log(user[nameProperty1]);
console.log(user['fname']);
console.log(user[nameProperty2]);
function getPropValue(nameProp, obj) {
  return obj[nameProp];
}
console.log(getPropValue('age', user));
console.log(getPropValue('fname', user));
console.log(getPropValue(nameProperty2, user));
console.log(user['two word']);
console.log(user['age']);
console.log(user[45]);
console.log(user['45']);

key: undefined;
show: function () {
    return 'show';
}
for (const key in user) {
  console.log(key, ':', user[key]);
}

// key in obj
console.log('fname' in user);
console.log('fullname' in user);
console.log('key' in user);
console.log(45 in user);
console.log('45' in user);
console.log('show' in user);

const prop = '45';
if (prop in user) {
  console.log(typeof user[prop] === 'function' ? user[prop]() : user[prop]);
}

//ключем об'єкта може бути рядок або символ
/*
const multTable = {
  '1 * 1 = ': 1,
  '1 * 2 = ': 2,
  '1 * 3 = ': 3,
  '1 * 4 = ': 4,
  '1 * 5 = ': 5,
  '1 * 6 = ': 6,
}
*/
function getMultTable(firstNumber = 1) {
  const multTable = {};
  for (let i = 1; i <= 10; i++) {
    multTable[`${firstNumber} * ${i} = `] = firstNumber * i;
  }
  return multTable;
}
console.log(getMultTable(5));
const userTask = '5 * 3 = ';
const multTable = getMultTable(5);

console.log(multTable[userTask]);

function getMultTableMany(min = 1, max = 9) {
  const multTable = {};  //address references
  for (let firstNumber = min; firstNumber <= max; firstNumber++) {
    for (let i = 1; i <= 10; i++) {
      multTable[`${firstNumber} * ${i} = `] = firstNumber * i;
    }
  }
  return multTable;  //address references
}

console.log(getMultTableMany());