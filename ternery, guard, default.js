// vote eligibility check

let age = 8;
let name = 'himu';

function checkEligibility (age) {
  /*if(age > 18) {
    return true;
  } else {
    return false;
  }*/
  // shortcut for above code is ternery operator
  return age > 18 ? true : false;
}

function guessNum(n) {
  let guess = 1;
  /*if(guess == n) {
    console.log('YOU WON');
  }*/
  // the following is called guard operator if the left part is true then it checks the right part
  // else it doesnt check the right part
  guess == n && console.log('YOU WON');
}

// Default operator
let message = 0 || 'hellow';
console.log(message); // if the left condition is false it sets a default code that is on right.
// ( 0 null Nan undefined '' false ) are falsy values
let currency = 'EUR' || 'USD';
console.log('currency: ' + currency);
currency = undefined || 'USD';
console.log('currency default: ' + currency); // it works like setting a default value if the left part is falsy


console.log(`${name}'s eligibility to vote: ${checkEligibility(age)}`);
guessNum(1);
