function countWords (arr) {
  let arrNames = [];
  let countWordsObj = {};
  arr.forEach(name => {
    let isIn = false;
    arrNames.forEach(element => {
      (element == name) ? isIn = true : console.log() ;
    });
    (!isIn) ? arrNames.push(name) : console.log();
  });

  arrNames.forEach(element => {
    let count = 0;
    arr.forEach(name => {
      (element == name) && count++;
    });
    countWordsObj[element] = count;
  });


  return countWordsObj;
}

console.log(countWords(['apple','grape','apple','lici','apple','lici']));