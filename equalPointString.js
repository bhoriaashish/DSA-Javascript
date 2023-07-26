
function findEqualString(str){
    let openBracket = 0;
    let closeBracket = 0;
    for(let i=0;i<str.length;i++){
        if(str[i] === "("){
           openBracket++;
        }else if(str[i] === ")"){
            closeBracket++
        }
        if(openBracket === closeBracket){
            return i;
        }
        

    }
    return -1
}
let str = "(()))()()()()((";
let matchingString = findEqualString(str)
console.log(matchingString);