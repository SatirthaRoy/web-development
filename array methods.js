let array = ['himu','satirtha','roy',{firstName: 'satirtha', lastName: 'roy'},true,9];

array.forEach((value,index) => {  // foreach is a build in js array method, which takes a function which takes value and index as parameters.
  console.log(`value: ${value}, index: ${index}`); // inside the function you can manipulate each value of an array.
});


console.log(); console.log();

// foreach doesnt support continue.But we can use return to get the same result in foreach.
array.forEach((value, index) => {
  if(value == 'roy') {
    return;
  }
  console.log(`value: ${value}, index: ${index}`); // gets the same result like continue
});


/*  IMPORTANT
  forEach method also doesnt supports break. If we need to use break in a loop then we cannont use forEach method.
  WE HAVE TO USE NORMAL FOR OR WHILE LOOP TO USE BREAK
*/

let nums = [1,-3,5];

nums = nums.filter((num, index)=> num >= 0 ); // it filters an array. if the function in filter method returns false the value will be removed else will be kept

console.log(nums);


nums = nums.map((value,index)=> 10 + value); // it will replace the value with the returned value of the function inside map method

console.log(nums);