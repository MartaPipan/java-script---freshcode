function writeUserInformation() {
  const userInput = prompt();
  const massage = userInput ? 'thank' : 'Error';
  return massage
}

// function writeUserInformation = function getAnswerUserInput

function getAnswerUserInput() {
  return prompt('enter any') ? 'thank' : 'error';
}
//тернарний
// умова ? правдивий варіант : неправдивий варіант;
//false 0 '' null undefined

//написати функцію яка запитує у користувача ввод будь чого
//і повертає рядок thanks, якщо користувач щось то ввів
//інакше повертає рядок 'Error'

// 1 - вигадати ім'я для функції
// 2 - а чи приймає функція аргументи
// 3 - запитати данні у користувача
// 4 - перевірити данні
// 5 - повернути результат

function getAnswerUserInput() {
  return prompt('enter any') ? 'thanks' : 'error';
}
const summa =3456;
//bad practice
const sale = summa > 100000 ? 10 : 
              summa > 10000 ? 5 : 
                summa > 1000 ? 2 : 0;

//good practice
let sale2=0;
if( summa > 100000){
  sale2 = 10;
} else if( summa > 10000){
  sale2 = 5;
} else if( summa > 1000){
  sale2 = 2;
}