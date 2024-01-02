function regularFun (param) {
  console.log(param);
}

regularFun('regular function');

const regular = function (param) {
  console.log(param);
};

regular('regular');

// arrow function works as a regular fucntion but with less writing

const arrowFun = (param) => {
  console.log(param);
};

arrowFun('arrow function');

// if it has one parameter then first brackets are optional

const oneParam = param => {
  console.log(param);
};

oneParam('it has one parameter');

// if it can be written in one line then second brackets and return statement are not needed

const oneLine = x => x+2;

console.log(oneLine(5));

// IMPORTANT 
// ARROW functions can only be called after declaring the function unlike normal functions. cannot be hoisted



