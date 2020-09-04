function tickets(val){
    let uangKas = val[0];
    let hargaTiket = 25;
    let bool = true;
    let pecahanDuaLima = 0;
    let pecahanLimaPuluh = 0;
    let pecahanSeratus = 0;
    if(uangKas==25){
        pecahanDuaLima += 1
    }else if(uangKas==50){
        pecahanLimaPuluh += 1
    }else{
        pecahanSeratus +=1
    }

    for(let i = 1 ; i < val.length ; i++){
        if(val[i]==25){
            pecahanDuaLima++
        }else if(val[i]==50){
            if(pecahanDuaLima>0){
                pecahanDuaLima--
                pecahanLimaPuluh++
            }else if(pecahanLimaPuluh==0){
                bool = false;
                return `NO. Vasya tidak punya uang kembalian yang cukup untuk 25 dollar`
            }
        }else if(val[i]==100){
            if(pecahanLimaPuluh>0&&pecahanDuaLima>0){
                pecahanDuaLima--
                pecahanLimaPuluh--
            }else if(pecahanDuaLima==3){
                pecahanDuaLima -= 3 ;
            }else{
                bool = false ;
                return `NO. Vasya tidak punya uang kembalian yang cukup untuk 75 dollar`
            }
        }
        }
        if(bool==true){
             return 'YES'
        }
}

console.log(tickets([100,50]))
