'use strict';
//declaration
function test1(params) {
    console.log('test1', this);
}
window.test1()
test1()


//expression  ============>>>>>>> use for arrow
const test2 = function() {
   console.log('test2',this); 
}
test2()

const obj = {
    prop: 45,
    testObj: function () {
        console.log('testObj',this);
    },
    testObj:test1
}
obj.testObj()

//arrow (onde foi criada)
const test3 = () => {
console.log('test3',this);
}
test3()
const site = {
    title: 'my site',
    heading: ['About us', 'Contact', 'News'],
    logHeadings: function () {
        this.heading.forEach(function(head) {
            console.log(head);
        })
    }
}
//site.logHeadings(head, '|', this)




//4 solution => write name of site in windows (JS|freshcode)

//solution 1 = (SAFE CONTEXT)  ======   NOT USED!!!!
const site1 = {
    title: 'my site',
    headings: ['About us', 'Contact', 'News'],
    logHeadings: function () {
        console.log(this)
        const self = this;
        this.headings.forEach(function (head) {
            console.log(head, '|', self.title);
        });
    },
};
site1.logHeadings();

//solution 2 = (peredaty context ====> for method of array (mdn -> method forEah()))
    /**method forEach acept parameter1-function====>
(function () {this.headings.forEach(function (head, index)console.log(head, '|', self.title);});
parameter2 - context(this)*/

const site2 = {
    title: 'my site',
    headings: ['About us', 'Contact', 'News'],
    logHeadings: function () {
        this.headings.forEach(function (head, index) {
            console.log(index, head, '|', self.title);
        }, this);
    },
};
site2.logHeadings();

//solution 3 = (Call function,and function call content from help methods of functions )
//function is a Object; and object have instance methods:
// call( arg1, arg2, arg3 , arg 4, ,);  
// apply(thisArg, [argsArray]);


// bind(thisArg, arg1, arg2, arg3); end return new function with CONTENT-this
// we used help-function logHead3
const logHead3 = function (head,index) {
    console.log(index + 1, head, '|', this.title);  
    
}
const site3 = {
    title: 'my site',
    headings: ['About us', 'Contact', 'News'],
    logHeadings: function () {
        this.headings.forEach(logHead3.bind(this));
    },
};
site3.logHeadings();



//solution 4 = arrow =>        ========   =>
const site4 = {
    title: 'my site',
    headings: ['About us', 'Contact', 'News'],
    logHeadings: function () {
        console.log(this)
        const self = this;
        this.headings.forEach((head) => {
            console.log(head, '|', this.title);
        });
    },
};
site4.logHeadings();



//EXAMPLES
const dataProto = {
  addFrom: function(){
    this.users.forEach((user)=>{
      user.from = this.from;
    })
  }
};

const data = {
  error: null,
  from: 'db',
  users: [
    { id: 100, login: 'qwe1', isMale: true },
    { id: 200, login: 'qwe21', isMale: true },
    { id: 101, login: 'asd', isMale: false },
    { id: 178, login: 'sss', isMale: false },
    { id: 10, login: 'max', isMale: true },
  ],
  __proto__: dataProto,
};
data.addFrom();
console.table(data.users)

//EXAMPLE2         SUMMA1 === SUMMA2
const sum1 = function (number1=3, number2=5) {
    return number1 + number2;
};
/**
 * 
 * @param {number} number1 
 * @param {number} number2 
 * @returns {number}
 */
const sum2 = (number1 = 4, number2 = 6) => number1 + number2;


//EXAMPLE3    arrow=>  this not need here
const sum3 = function (number1 = 3, number2 = 5) {
    if (typeof number1 !== 'number' || typeof number2!=='number') {
        return NaN;   
    }
    return number1 + number2;
};

//ARGUMENTS
//used with loop for


const sumNumbers1 = function(){
  console.log(arguments);
  let summa = 0;
  for (let index = 0; index < arguments.length; index++) {
    const element = arguments[index];
    summa += element;
  }
  return summa;
}

const result = sumNumbers1(1,2,3);

console.log(result);

//WITH METHOD FROM CREATE ARRAY 
const sumNumbers2 = function() {
    console.log(arguments);
    const arrArguments = Array.from(arguments);
    console.log(arrArguments);
    let summa = 0;
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        summa += element;
        
    }
    return summa;
}
const result2 = sumNumbers2(3, 4, 1);
console.log(result2);



// ARRAY METHOD REDUCE
const sumNumbers3 = function () {
    //console.log(arguments);
    // const arrArgs = Array.from(arguments);
    //console.log(arrArgs);
    return Array.from(arguments).reduce((summa, element)=>summa+element);
}
const result3 = sumNumbers3(3, 2, 1, 5, 1);
console.log(result3);

// ARRAY METHOD REDUCE
// optimization   
// ...rest

// 2015

const sumNumbers4 = (...rest) => rest.reduce((summa, elem) => summa + elem);
const result4 = sumNumbers4(3, 2, 1);
console.log(result4);


//REST FOR FUNCTION           LESSON 39_2 => 51.40min 
const sumNumbers12 = function(...rest) {
    return rest.reduce((summa, elem) => summa + elem);
}
const result12 = sumNumbers4(3, 2, 3, 2, 1);
console.log(result12);



// REST:ARGUMENTS
// num1 = is argument(have name);
// ...rest = other element (did not have names)


const sumNumbers22 = (num1, ...rest) => {
    //console.log(arguments);============== deprecated
    console.log(num1);
    console.log(rest);
    return rest.reduce((summa, elem) => summa + elem);
}
const result22 = sumNumbers22(5, 2, 3, 4);  //=9 summa rest=2+3+4, 5=num1=argument
console.log(result22);

//from ARGUMENTS DID NOT POSSIBLE USED arrow =>;   NEED USED FUNCTION!!!
const sumNumbersWithArguments = function (num1, ...rest) {
    console.log(arguments);
    console.log(num1);
    console.log(rest);
    return rest.reduce((summa, elem) => summa + elem, num1);
}
const result33 = sumNumbersWithArguments(4, 2, 7, 9, 3, 4);//summa rest=2+7+9+3+4   4=num1=argument
console.log(result33);


// SPRED
const arrNumb44 = [5, 7, 9];

console.log(arrNumb44);
console.log(arrNumb44[0], arrNumb44[1], arrNumb44[2]);
// 5=arrNumb44[0]
// 7=arrNumb44[1] 
// 9=arrNumb44[2]
console.log(...arrNumb44);    //--spred

console.log(Math.max(7, 3, 45)) //45
console.log(Math.max(...arrNumb44))//9 

console.log(sumNumbersWithArguments(...arrNumb44));// 21  summa elements

//spred
const arrayNumbers1 = [1, 1, 1,];
const arrayNumbers2 = [2, 2, 2,];
const arrayNumbers3 = [3, 3, 3,];
//concat
const arrayNumbersConcat = arrayNumbers1.concat(arrayNumbers2, arrayNumbers3);
console.log(arrayNumbersConcat);

const arrayNumbersSpred = [...arrayNumbers1, ...arrayNumbers2, ...arrayNumbers3];

const copyArrayNumbers1 = [...arrayNumbers1];  //other array like=== arrayNumbers1



 //Існує масив:
const products = [
    { id: 1, name: "Молоко", price: 25, quantity: 14, category: "Молочні продукти" },
    { id: 2, name: "Хліб", price: 12, quantity: 100, category: "Хлібобулочні вироби" },
    { id: 3, name: "Яйця", price: 20, quantity: 12, category: "Птахоферма" },
    { id: 4, name: "Масло", price: 35, quantity: 31, category: "Молочні продукти" },
    { id: 5, name: "Цукор", price: 15, quantity: 44, category: "Кондитерські вироби" },
    { id: 6, name: "Картопля", price: 10, quantity: 50, category: "Овочі та фрукти" },
    { id: 7, name: "Помідори", price: 30, quantity: 71, category: "Овочі та фрукти" },
    { id: 8, name: "Індичка", price: 40, quantity: 10, category: "М'ясо та м'ясні вироби" },
    { id: 9, name: "Яловичина", price: 25, quantity: 120, category: "М'ясо та м'ясні вироби" },
    { id: 10, name: "Макарони", price: 18, quantity: 140, category: "Макаронні вироби" },
    { id: 11, name: "Сир", price: 50, quantity: 19, category: "Молочні продукти" },
    { id: 12, name: "Печиво", price: 22, quantity: 56, category: "Кондитерські вироби" },
    { id: 13, name: "Куряче філе", price: 40, quantity: 12, category: "М'ясо та м'ясні вироби" },
    { id: 14, name: "Банани", price: 18, quantity: 63, category: "Овочі та фрукти" },
    { id: 15, name: "Свинина", price: 60, quantity: 3, category: "М'ясо та м'ясні вироби" },
    { id: 16, name: "Чай чорний", price: 30, quantity: 5, category: "Чай та кава" },
    { id: 17, name: "Кава", price: 50, quantity: 8, category: "Чай та кава" },
    { id: 18, name: "Сода", price: 8, quantity: 2, category: "Безалкогольні напої" },
    { id: 19, name: "Сметана", price: 25, quantity: 18, category: "Молочні продукти" },
    { id: 20, name: "Яблука", price: 20, quantity: 88, category: "Овочі та фрукти" }
];

// Exercise1.1
/** Розрахувати загальну кількість(quantity) продуктів з категорії  "Овочі та фрукти"
 * @param {array} products - The array of products
 * @returns {number} - The total quantity of products from the category "Vegetables and Fruits"
 */
const quantityOfVegetablesFruit = products.reduce((summa, product) => {
    if (product.category === "Овочі та фрукти") {
        summa += product.quantity;
    }
    return summa;
},
    0);

console.log('загальна кількість продуктів з категорії  "Овочі та фрукти": ', quantityOfVegetablesFruit);
    
//Exercise1.2
/**
 * @param {array} products - The array of products ===>
 * ===> filter the array of products based on the category "Овочі та фрукти"(filter)
 * @returns {number} The total quantity of products from the category "Vegetables and Fruits"(reduce)
 */
const quantityOfVegetablesAndFruits = products
  .filter(product => product.category === "Овочі та фрукти")
  .reduce((summa, product) => summa + product.quantity, 0);

console.log('Загальна кількість продуктів в категорії "Овочі та фрукти": ', quantityOfVegetablesAndFruits);



//Exercise2.
/**Розрахувати загальну вартість(quantity*price) продуктів з категорії  "Молочні продукти"
 * @param {array} products - The array of products ===>
 * ===> filter the array of products based on the category "Молочні продукти"(filter)
 * @returns { number } - The total price of products from the category "Молочні продукти"(reduce)
 */
const milkCategoryTotalPrice = products
    .filter(product => product.category === "Молочні продукти") 
    .reduce((total, product) => total + product.price * product.quantity, 0); 

console.log('Загальна вартість продуктів з категорії "Молочні продукти": ', milkCategoryTotalPrice);


//Exercise3
/**Повернути новий масив з відсортованими продуктами в порядку зменшення quantity (джерельний масив не змінювати)/**
 * @param {array} products 
 * @param {array} copyProducts(new array) ===>>> sorting the array in descending order (sort)
 * @returns {array} sortedProducts 
 */
const sortProductsByQuantity = (products) => {
    const copyProducts = [...products];
    copyProducts.sort((product1, product2) => product2.quantity - product1.quantity);
    return copyProducts;
}
const sortedProducts = sortProductsByQuantity(products);
console.log(sortedProducts);


//Exercise4
/**Знайти найдешевший та найдорожчий продукти
 * @param {array} arrPriceOfProducts - New array with prices of products.
 * @returns {number} minPrice - The minimum price (price at index 0 of the sorted array).
 * @returns {number} maxPrice - The maximum price (price at the last index of the sorted array).
 */

const arrPriceOfProducts = products.map(products => products.price);
arrPriceOfProducts.sort((price1, price2) => price1 - price2);

const minPrice = arrPriceOfProducts[0];
const maxPrice = arrPriceOfProducts[arrPriceOfProducts.length - 1];

console.log('minimal price of product:', minPrice);
console.log('maximal price of product:', maxPrice);

//Exercise5
/**
 * Розрахувати середню ціну продуктів з категорії  "М'ясо та м'ясні вироби"
 * 
 * 1. filter the array of products based on the category "М'ясо та м'ясні вироби"
 * 2. apply the reduce method to sum up the prices of these filtered products
 * 3. filter the array of products (category "М'ясо та м'ясні вироби") and find length of array
 * 4. divide the total sum by the length of the filtered products array to get the average price
 * @param {array} products - The array of products
 * @returns {number} - The average price of products in the specified category
 */

const averageMeatPrice = products
    .filter(product => product.category === "М'ясо та м'ясні вироби")
    .reduce((total, product) => (total + product.price), 0) /
    products.filter(product => product.category === "М'ясо та м'ясні вироби").length; 

console.log('Average meat price: ', averageMeatPrice);

