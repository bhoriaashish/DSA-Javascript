function kthSmallest(k,arr){
    for(let i= arr.length-1;i>= 0;i--){
        for(let j=0;j<i;j++){
            if(arr[j] > arr[j+1]){
               let temp = arr[j+1]
               arr[j+1] = arr[j]
               arr[j] = temp
            }
        }
    }
    return arr[k-1];
}
let arr = [4567,422,4557676,3,455,2,1234,67,87];
let output = kthSmallest(1,[4567,422,4557676,3,455,2,1234,67,87])
console.log(output);