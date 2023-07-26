function recursion(n){
    if(n==0){
        return 1;
    }
    else {
        let res = n*recursion(n-1);
        return res;
    }
    
        
}
let num = 10;
let factorial = recursion(num)
console.log(factorial);