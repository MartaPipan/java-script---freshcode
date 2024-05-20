'use strict';

// lesson 42-1
/**function-constructor for properties   (vlastyvosti)
 * @param {*} fname 
 * @param {*} lname 
 * @param {*} age 
 */
function User(fname,lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
}

/**function-prototype (every functional)
 * 
 */
function UserPrototype() {
    this.fullname = function () {
        return `${this.fname} ${lname}`;
    }
}

/**
 * static properties ====properties of our function-constructor
 */

User.prototype = new UserPrototype();

const user1 = new User('Tom', 'Rot', 59);

