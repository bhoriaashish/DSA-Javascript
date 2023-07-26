function merge(a1,a2){
    let i=0;
    let j = 0;
    let k = 0;
    let a3 = [];
    while(i<a1.length && j<a2.length){
        if(a1[i]<a2[j]){
            a3[k] = a1[i];
            i++;
            k++;
        }
        else{
            a3[k] = a2[j];
            j++;
            k++;
        }
    }
    while(i<a1.length){
        a3[k] = a1[i];
        i++;
        k++;
    }
    while(j<a2.length){
        a3[k] = a2[j];
        j++;
        k++;
    }
    return a3
}
let a1 = [1,2,3,4,5];
let a2 = [6,7,8,9];
let output = merge(a1,a2);
console.log(output);


function duplicate(arr){
    let newArray  = new Set(arr);
    for(let i=0;i<arr.length;i++){
        if(arr[i+1] == arr[i]){
            i++;
        }
    }
    return newArray;
}
let arr = [1,2,3,4,4,5,6,2,5,6,7,8,9];
duplicate(arr)
console.log(duplicate(arr));