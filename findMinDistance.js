function findMinDistance(str,word1,word2){
    let index1 = -1;
    let index2 = -1;
    let min = 9;
    for(let i=0;i<str.length;i++){
        if(str[i] === word1){
            index1 = i;
        }
        if(str[i] === word2){
            index2 = i;
        }
        if(index1 != -1 && index2 != -1){
            min = math.min(min,Math.abs(index1 - index2))
        }
    }
    return min;
}
let str = ["the" ,"four" ,"two" ,"three"];
let output = findMinDistance(str,"the","two")
word1 = "the";
word2 = "two";
console.log(output);