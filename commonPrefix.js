function findLongestCommonPrefix(string){
    if(string.length === 0){
        return "";
    }
    let longestPrefix = string[0];
    for(let i=0; i<string.length;i++){
        let currentString = string[i];
        let j = 0;
        while (j<longestPrefix.length && j<currentString.length && longestPrefix[j] === currentString[j]){
            j++;
        }
        longestPrefix = longestPrefix.substring(0,j);

        if(longestPrefix === ""){
            return "";
        }
    }
    return longestPrefix;
}   
let string = ['geeks','geek','geezer'];
let comPri = findLongestCommonPrefix(string)
console.log(comPri);