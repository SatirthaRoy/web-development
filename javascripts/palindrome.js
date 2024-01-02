/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let xstr = String(x);
  let xArr = xstr.split('');
  let xArrstring = JSON.stringify(xArr);
  let xReversed = JSON.stringify(xArr.reverse());
  return (xArrstring == xReversed);
};

console.log(isPalindrome(0));
