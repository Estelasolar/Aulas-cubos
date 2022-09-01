const array = [0,1,2,3,4];

// const valorReduce = array.reduce((acumulador, elementoAtual, indice, array)=>{
//     return acumulador + elementoAtual
// })

// console.log(valorReduce)

const valorReduce2 = array.reduce((acumulador, elementoAtual, indice, array)=>{
    acumulador = acumulador + elementoAtual;
    return acumulador
},10)

console.log(valorReduce2)

//---------------------------------------------------

const array2 = [
    [0,1],
    [2,3,4],
    [14,22,98]
];

const arrayReduzido = array.reduce((acumulador, elementoAtual,indice, array)=>{

    return[... acumulador, ...elementoAtual];

},[])

console.log(arrayReduzido);