const arr = [1,3,5,6,2,4,5,6,10,23,122,3,4,54,6,54];
const maxNum = arr.reduce((initial, current) => Math.max(initial, current), -Infinity);
console.log(maxNum);
// reduce method takes an initial value. the return of the call back is stored in the initial value