function findElement(arr,sum){
    let currentSum = 0;
    for(let i=0;i<arr.length;i++){
        // console.log('')
        currentSum = arr[i];
        for(let j=i+1;j<arr.length;j++){
            // console.log('findi' ,i);
            // console.log('findj' ,j);
            if(currentSum ===sum){
                console.log('Found i' ,i);
                console.log('Found j' ,j);
                // result i //add i
                // res// ad j
                return i, j
            }
            else if(currentSum < sum){
                currentSum = currentSum + arr[j];
            } else {
                break;
            }
        }
    }

    return -1, -1
}


let arr = [9,5,8,2,3,4,1];
let output = findElement(arr,18)
console.log(output);