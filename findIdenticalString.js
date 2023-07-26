// function identocalNotSame(str1,str2){
//     if(str1.length != str2.length){
//         return "false";
//     }
//     let charMap1 = new Map();
//     let charMap2 = new Map();
//     for(let i=0;i<str1.length;i++){
//         char1 = str1[i];
//         char2 = str2[i];
//         if(charMap1.has(char1) && charMap1.get(char1) !== char2){
//             return "false";
//         }
//         if(charMap2.has(char2) && charMap2.get(char2) !== char1){
//             return "false";
//         }
//         charMap1.set(char1,char2);
//         charMap2.set(char2,char1);
//     }
//     return true;
    
   
// }
// let str1 = "for";
// let str2 = "ensd";
// let output = identocalNotSame(str1,str2)
// console.log(output);

function sameLength(str1,str2){
    if(str1.length !== str2.length){
        return "false";
    }
    let charMap1 = new Map();
    let charMap2 = new Map();
    for(let i=0;i<str1.length;i++){
        char1 =  str1[i];
        char2 = str2[i];
        if(charMap1.has(char1) && charMap2.get(char1) !== char2){
            return "false";
        }
        if(charMap2.has(char2)&& charMap2.get(char2) !== char1){
            return "false";
        }
        charMap1.set(char1,char2);
        charMap2.set( char2,char1);

    }
    return "true"
}
let str1 = "for";
let str2 = "end";
let output = sameLength(str1,str2)
console.log(output);
