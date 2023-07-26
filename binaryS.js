// function binerySearch(arr,target){
//     let leftIndex = 0;
//     let rightIndex = arr.length-1;
//     while(leftIndex<=rightIndex){
//         let mid = Math.floor((leftIndex+rightIndex)/2);
//         if(target === arr[mid]){
//             return mid;
//         }
//         if(target<arr[mid]){
//             rightIndex = mid-1;
//         }
//         else{
//             leftIndex = mid+1
//         }
//     }
// }
// let arr = [-5,2,4,6,10];
// binerySearch([-5,2,4,6,10],6)
// console.log(binerySearch([-5,2,4,6,10],6));

function binerySearch(arr, number){
   let count = 0;
   let newArray = [];
//    let number = 1;
    for(let i=0;i<arr.length;i++){
        if(arr[i] === number){
            count = count + 1;
            newArray.push(i);
        }
    }
    return newArray;
}
let arr = [1,1,2,2,2,2,3,4,5,6];
binerySearch(arr,2)
console.log(binerySearch(arr,2));
// let arr = [1,1,2,2,2,2,3,4];
// let x= 2;
// binerySearch([1,1,2,2,2,2,3,4],2)
// console.log(binerySearch([1,1,2,2,2,2,3,4],2));
