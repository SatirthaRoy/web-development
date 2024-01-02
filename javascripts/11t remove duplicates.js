function removeDupli (arr) {
  let count = 0
  let uniqueArr = [];
  arr.forEach(name => {
    let isIn = false;
    uniqueArr.forEach(element => {
      (element == name) ? isIn = true : count++ ;
    });
    (!isIn) ? uniqueArr.push(name) : count++;
  });

  return uniqueArr;
}

console.log(removeDupli([1,4,2,1,2,4,5,6,5,5,6,6,7,8,9,8,7]));