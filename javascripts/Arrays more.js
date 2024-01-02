const arr = [1, 'himu', false, {name : 'himu', roll : 202226050}, ['satirtha', 'roy']];

arr[0] = 10;
console.log(arr);
console.log(typeof arr); // an array is an special type of object

console.log(Array.isArray(arr)); //to check array use Array

console.log(arr.length); // length is a property of an array as array is an special type of object
arr.push('my name');
console.log(arr);

arr.splice(0, 2); // used to delete items from an array starting at index and upto number of items
console.log(arr);

arr.pop(); // pops out the last item from an array
console.log(arr);

const array2 = arr.slice(); // this copys arr in array2
console.log(array2);

const arrayDestructuring = [1,3,5];
let [firstValue, secondValue] = arrayDestructuring; // this is array destructuring. puts first value in first value and so on

console.log(firstValue+ ' and ' + secondValue);
