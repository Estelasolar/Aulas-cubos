const fruta = ['abacaxi', 'manga', 'melancia'];

const resultado= fruta.every((elementoAtual)=>{
    return elementoAtual!== 'banana';
})
console.log(resultado)