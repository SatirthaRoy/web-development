var addTwoNumbers = function(l1, l2) {
  let l1str = '';
  let l2str = '';
  let reverseArr = [];
  Reverse(l1).forEach(element => {
    l1str += (element);
  });

  Reverse(l2).forEach(element => {
    l2str += (element);
  });
  
  (String(Number(l1str) + Number(l2str)).split('').reverse()).forEach((element)=> {
    reverseArr.push(Number(element));
  });
  return reverseArr;
};

function Reverse(arr) {
  let reversedArr = [];
  for(i = arr.length - 1;i >= 0;i-- ) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

console.log(Reverse([1,2,3]));
console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]));