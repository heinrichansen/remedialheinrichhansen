let hasilBool = false;
function allEqual(val){
    for(let i = 0 ; i < val.length ; i++){
        if(val[i]==val[i-1]){
            hasilBool = true
        }
        else{
           hasilBool = false;
        }
    }
    if(hasilBool==true){
        return true
    }
    else if(val.length==1){
        return true
    }
    else{
        return false
    }
}
console.log(allEqual([1, 2, 3, 4, 5, 6]));
console.log(allEqual([12, 12, 12, 12]));
console.log(allEqual([12]));