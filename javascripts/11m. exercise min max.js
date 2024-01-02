function minmax(arr) {
  let min = arr[0];
  let max = arr[0];
  min = arr.length == 0 && null;
  max =  arr.length == 0 && null;
  arr.forEach(element => {
    if(element < min) {
      min = element;
    }

    if(element >= max) {
      max = element;
    }
  });

  return {min, max};
}

console.log(minmax([1,2,-1]));