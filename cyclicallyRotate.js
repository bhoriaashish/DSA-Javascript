function rotation(arr){
    let prev = arr[arr.length-1]
    for(let i=arr.length-2;i>=0;i--){
        arr[i+1] = arr[i];
        arr[i] = prev;
        temp  = arr[i];
        prev = temp;
    }
    return arr
}

let arr = [1,2,3,4,5];
rotation(arr);
console.log(arr);