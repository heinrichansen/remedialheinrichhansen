function segitaGanjil(val){
    var x='';
    angka = 1;
    for (let i = 0 ; i < val ; i++) {
        for (let j = i ; j<val ; j++) {
            x += '  '
        }
        for (let k=0 ; k<i+1 ; k++) {
            x += `${angka}  `
            angka += 2;
        }
        x += '\n'
    }
    return x;
}

function segitigaGanjilTambah(val){
    var x = 1;
    var limit = 100;
    var jawaban=[];
    for(let i = 0; i<limit ; i++){
        var penjumlahan = 0;
        for(let j = 0; j<i ; j++){
            penjumlahan += x;
            x += 2
        }
        jawaban.push(penjumlahan)
    }
    return `Jumlahnya ${jawaban[val]}`
}
console.log(segitaGanjil(5))
console.log(segitigaGanjilTambah(3))