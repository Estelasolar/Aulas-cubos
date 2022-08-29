const numeros= [1,3,2,1]

const jogadores= numeros.length
let soma= 0


for(let numero of numeros ){
    soma+=numero
}

let posicao= soma

while(posicao > jogadores){
    posicao-= jogadores
}


console.log(posicao)