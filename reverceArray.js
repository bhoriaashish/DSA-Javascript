function rArray(arr){
    for(let i=arr.length-1;i>=0;i--){
        arr.reverse();
    }
    return arr

}
let arr = [1,2,3,4,5];
rArray(arr)
console.log(arr);
