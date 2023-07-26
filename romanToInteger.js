function convertRomanToInteger(str){
    let myMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let result = 0;
    for(let i=0;i<str.length;i++){
        let curr = myMap[str[i]];
        let next = myMap[str[i+1]];
        if(curr<next){
            result -= curr - next;
            i++;
        
        }
        else{
            result += curr;
            
        }
    }
    return result
    
}
let str = "VXLIMD";
let output = convertRomanToInteger(str)
console.log(output);