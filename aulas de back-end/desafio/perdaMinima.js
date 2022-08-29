const precos = [5 , 10, 3]
let perdaMinima=9999999999;

for(let indice = 0; indice < precos.length; indice++){
    for(let j = indice++; j < precos.length; j++ ){
        const compra = precos[indice];
        const venda = precos[j];
        const prejuizo= compra - venda
        if(prejuizo > 0 && prejuizo< perdaMinima){
            // realmente e um prejuizo
            perdaMinima = prejuizo
        }
    }

}
console.log(perdaMinima)


// for(let indice = 0; indice < precos.length; indice++){
//     for(let item of precos){
//         perdaMinima.push(item - )

//     }

// }
// console.log(perdaMinima)