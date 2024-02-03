function removeDupli (arr) {
  const unique = [];
  for(let item of arr) {
    !unique.includes(item) && unique.push(item);
  }
  return unique;
}

console.log(removeDupli(['himu', 'satirtha', 'roy', 'himu', 'satirtha', 'himu', 1,3,2,1,3,4,2,1]));