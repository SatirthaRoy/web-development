function alphanumeric(string){
  let strArr = string.split('');
  //console.log(strArr.length);
  let alpha = true;
  alpha = (strArr.length == 0) ? false : true;
  strArr.forEach(char => {
    if(!((char.charCodeAt() >= 48 && char.charCodeAt() <= 57) || (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) || (char.charCodeAt() >= 97 && char.charCodeAt() <= 122))) {
      alpha = false;
      console.log(char);
    }
  });
  
  return alpha;
}

console.log(alphanumeric('PassW0rd'))