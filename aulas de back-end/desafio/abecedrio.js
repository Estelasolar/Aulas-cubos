const letra= "m"
const palavras= ["mamao","maca", "melao","melancia", "Laranja" ]
let erros = 0;

for(let palavra of palavras){
    const primeiraLetra= palavra[0];
    if ( primeiraLetra !== letra){
        erros++
    }
}
console.log(erros);



// for(let i = 0; i< palavras.length; i++){
//     for(let item of palavras[i]){
//         console.log(item[0])
//     }


// } 



// for(let item of palavras){
//    for(let letras of item){
//     console.log(letras)
//     // if(letras == letra ){
    
//     // }
//    }
    
// }
// console.log(palavras.length - acertos)




//determinar a letra
//analisar a primeira letra
//