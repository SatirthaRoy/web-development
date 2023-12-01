/*
  ascii (48 - 57) = (0 - 9) in number
  A - Z = 65 - 90 in ascii
  a - z = 97 - 122
*/

let str = '';
console.log(str + 'a');
console.log(str.charCodeAt());
console.log(str.charCodeAt() + 1);
console.log(String.fromCharCode(95));

function rot13(str) {
  let rot_code = '';
  let strArr = str.split('');
  strArr.forEach(element => {
    if((element.charCodeAt() >= 65 && element.charCodeAt() <= 90) || (element.charCodeAt() >= 97 && element.charCodeAt() <= 122)) {
      if(element.charCodeAt() >= 65 && element.charCodeAt() <= 90) {
        (element.charCodeAt() + 13) > 90 ? rot_code += String.fromCharCode((element.charCodeAt() + 13) - 90 + 64) : rot_code += String.fromCharCode(element.charCodeAt() + 13);
      }
  
      if(element.charCodeAt() >= 97 && element.charCodeAt() <= 122) {
        (element.charCodeAt() + 13) > 122 ? rot_code += String.fromCharCode((element.charCodeAt() + 13) - 122 + 96) : rot_code += String.fromCharCode(element.charCodeAt() + 13);
      }
    } else {
      rot_code += element;
    }


  });

  return rot_code;
}

console.log(rot13('This is my first ROT13 excercise!'));