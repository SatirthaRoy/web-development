// function removeDupli (arr) {
//   const unique = [];
//   for(let item of arr) {
//     !unique.includes(item) && unique.push(item);
//   }
//   return unique;
// }

const removeDupli = (arr) => arr.filter((item,i)=>arr.lastIndexOf(item)==i);

console.log(removeDupli(['himu', 'satirtha', 'roy', 'himu', 'satirtha', 'himu', 1,3,2,1,3,4,2,1]));