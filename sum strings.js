function sumStrings (a,b) {
  let aReversedArray = a.split('').reverse();
  let bReversedArray = b.split('').reverse();
  let resultReversed = [];
  let result = '';
  let maxIteration = aReversedArray.length > bReversedArray.length ? aReversedArray.length : bReversedArray.length;

  let onHand = 0;
  for(i = 0; i < maxIteration ; i++) {
    let sum = (Number(aReversedArray[i]) || 0) + (Number(bReversedArray[i]) || 0) + onHand;
    if(sum >= 10 && i != maxIteration - 1) {
      !(i == maxIteration - 1 && sum == 0) && resultReversed.push(sum - 10);
      onHand = 1;
    } else {
      !(i == maxIteration - 1 && sum == 0) && resultReversed.push(sum);
      onHand = 0;
    }
  }
  resultReversed = resultReversed.reverse();
  resultReversed.forEach(element => {
    result += element;
  });
  return result;
}

/*
  EASY SOLUTION

  function sumStrings(a,b) { 
  return (BigInt(a) + BigInt(b)).toString();
}
*/

console.log(sumStrings('800', '9567'));

