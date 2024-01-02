
const product = {
  name: 'fan',
  price: 12,
  rating: {
    star: 4.7,
    count: 90
  },
  a_method: function fun() {
    console.log('this is a function')
  },
  method() {
    console.log('this is a function using shorthand method');
  }

};
product.method();

let productStr = JSON.stringify(product); //it converts to json string so that it can be used universally
let productParse = JSON.parse(productStr);


/* let productFromStorage = JSON.parse(localStorage.getItem('product')); // used to get the json back from local storage. Need to convert back to js object to use in javascript ( using JSON.parse() )

localStorage.setItem('product', JSON.stringify(product)); // is used to store json in local storage
local storage cannot be used in node js it can be used when in an html script tag
 */
console.log(product);
console.log(productStr + ' as you can see the json stringify doesnt have method');
console.log('because json doesnt supports method as obj does');
console.log('////////////////////////////////////////////////////////////////////');
console.log(productParse);
console.log(`this is the parse method to convert string back to js object.
you can see we lost the functions that were in the obj before.`);


