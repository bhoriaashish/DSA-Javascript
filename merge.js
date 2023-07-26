function merge(a1,a2){

    let k = 0;
    let a3 = [];
    let i = 0;
    let j = 0;
    while(i<a1.length && j<a2.length){
        // console.log('while')
        if(a1[i]<a2[j]){
            a3[k] = a1[i];
            i++;
            k++;
            // console.log('if', a3);
        }
        else{
            a3[k] = a2[j];
            j++;
            k++;
        }
        
    }
    while(i<a1.length){
        a3[k] = a1[i]
        i++;
        k++;

    }
    while(j<a2.length){
        a3[k] = a2[j]
        j++;
        k++;
    }
    // console.log('result', a3)
    return a3;

};
let a1 = [1,1,7,9,12,78,87];
let a2 = [5,8,10];
let Merge = merge(a1,a2);
console.log(Merge)