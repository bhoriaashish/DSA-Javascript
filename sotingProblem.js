function ascendingOrder(arr){
    for(let i=arr.length;i>=0;i--){
        for(let j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
let arr = [9,8,7,6,5,4,3,2,1];
ascendingOrder(arr)
console.log(ascendingOrder(arr));