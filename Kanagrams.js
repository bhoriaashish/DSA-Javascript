
function findAnagram(str1,str2,k){
    if(str1.length !== str2.length){
        return "false";
    }
    let sortedStr1 = str1.split('').sort().join('')
    let sortedStr2 = str2.split('').sort().join('')
    let replacing = 0;
    for(let i= 0;i<sortedStr1.length;i++){
        if(sortedStr1[i] != sortedStr2[i]){
            replacing++;
        }
    }
    return replacing <= k;
}
let str1 = "anagram";
let str2 = "nagaram";
let k = 3;
let getK = findAnagram(str1,str2,k)
console.log(getK);