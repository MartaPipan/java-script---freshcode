
const object1 = new Object();
object1.prop1 = 'prop1';
const object2 = Object(7);
const object = {}; //new Object()
const button = {
  text: 'click',
};
const user = {
  //222
  fname: 'Brad',
  sname: 'Pitt',
};
button.width = 50;
button.bgcolor = 'blue';

const activeUser = user; //222
activeUser.age = 60;

const userClient = activeUser; //222
userClient.order = '123';

console.log(button);


const symbol = '*';
//symbol = '-';