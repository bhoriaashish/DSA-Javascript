function bubbleSort(arr){
    for(let i= arr.length-1;i>= 0;i--){
        for(let j=0;j<i;j++){
            if(arr[j] > arr[j+1]){
               let temp = arr[j+1]
               arr[j+1] = arr[j]
               arr[j] = temp
            }
        }
    }
    return arr;
}

let outputArray = bubbleSort([19,23,511,4,35,6,7,3])
console.log(outputArray);


// function rArray(arr){
//     let revst = [];
//     for(let i=arr.length-1;i>=0;i--){
//         revst += arr[i];
//     }
//     return revst

// }
// let newArray= rArray([1,2,3,4,5])
// console.log(newArray);