тернарний
// умова ? правдивий варіант : неправдивий варіант;
//false 0 '' null undefined

//написати функцію яка перевіряє на повноліття використовуючи тернарник
//функція приймає вік людини(число) і повертає рядок!!! 'adult'  'not adult'
//написати функцію яка запитує у користувача ввод будь чого
//і повертає рядок thanks, якщо користувач щось то ввів
//інакше повертає рядок 'Error'

/**
 *
 * @param {number} age
 * @returns {string}
 */
function getStatusAdultUser(age) {
  // if (age >= 18) {
  //   return 'adult';
  // }
  // return 'not adult';
  return age >= 18 ? 'adult' : 'not adult';
}
// 1 - вигадати ім'я для функції
// 2 - а чи приймає функція аргументи
// 3 - запитати данні у користувача
// 4 - перевірити данні
// 5 - повернути результат

function getAnswerUserInput() {
  return prompt('enter any') ? 'thanks' : 'error';
}


