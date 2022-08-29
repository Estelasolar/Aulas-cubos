const dados = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,56,48,25,98,78,34,26,0,0]

console.log(dados.length)

function filtrar80(dados){
    const startIndex = Math.round (dados.length * 10/100);
    const endIndex = Math.floor (dados.length * 90/100);

   const fatia = dados.slice(startIndex, endIndex)

   console.log(fatia);

}

filtrar80(dados);