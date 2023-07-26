function countDistinct(str){
    let newStr = new Set(str);
    for(let i=0;i<str.length;i++){
        let subString = "";
        for(let j=i;j<str.length;j++){
            subString = newStr + str[j];
            Set.add(str);
        }
    }
    return (str.Size())
}
let str = "abab"
let input = countDistinct(str)
console.log(input);
