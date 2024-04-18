function writeUserInformation() {
  const userInput = prompt();
  const massage = userInput ? 'thank' : 'Error';
  return massage
}
console.log(writeUserInformation);

// function writeUserInformation = function getAnswerUserInput

function getAnswerUserInput() {
  return prompt('enter any') ? 'thank' : 'error';
}
