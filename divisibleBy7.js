function dividing(num){
    if(num < 0){
        return 0;
    }
    if(num == 0 && num == 7){
        return 1;
    }
    if(num < 10){
        return 0;
    }
    return (num/7);
}
let num = "21"
let find  = dividing(num)
console.log(find);