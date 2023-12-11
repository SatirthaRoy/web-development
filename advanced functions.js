// functions are values. Thus it can be stored in a variable

const function1 = function greeting () {
  console.log('hellow');
};

console.log(function1);
console.log(typeof function1); // function is a type of value
function1(); // you have to call a function by the name of variable you cannot call by greeting()

// the function name (greeting) is not needed. thus its called an annonymus function
// you cannot call a function before you declare it by this method aka cannon hoist a function like this

function value () {
  console.log('function is a value');
}

function run (param) {
  param();
}

run(value); // as function is a value. We can pass function as parameter in a function. its passing a func into another func

// setTimeout(function, time in milliseconds);  
// it is a function that takes 2 parameters a function and time in millisecods
// it runs the function after the time.

setTimeout(() => { // this is a built in js method and is asynchronus
  console.log('fuck you');
}, 4000);


// a similar function is setInterval() but it keeps on repeating the fucntion inside it after time.

setInterval(() => { // is also asynchronus
  console.log('interval');
}, 2000);





