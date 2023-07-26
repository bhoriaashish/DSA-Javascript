// function rotateTwoPlace(str1,str2){
//     if(str1.length !== str2.length){
//         return false;
//     }
//     let rotatestr = str1.slice(2) + str2.slice(0, 2);
//     return rotatestr === str2;
// }
// let str1 = "hello";
// let str2 = "lohel";
// let afterTwoRotation = rotateTwoPlace(str1,str2)
// console.log(afterTwoRotation);

function isRotatedString(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    const rotatedStr = str1.slice(2) + str1.slice(0, 2);
  
    for (let i = 0; i < str2.length; i++) {
      if (str2 === rotatedStr) {
        return true;
      }
  
      // Rotate the string by 1 place
      rotatedStr = rotatedStr.slice(1) + rotatedStr[0];
    }
  
    return false;
  }
  
  // Example usage:
  const string1 = "hello";
  const string2 = "lohel";
  
  console.log(isRotatedString(string1, string2)); 