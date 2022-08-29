const stringCorrompida = "*Canis %lupus )familiaris"

let dadoPurificado=''

for(let caracter of stringCorrompida){
    if(caracter === '!' || caracter === '@' ||caracter === '#' || caracter === '$' || caracter === '%' ||caracter === '&' || caracter === '*' || caracter === '(' || caracter === ')' || caracter === '.'){

    }else{
dadoPurificado = dadoPurificado + caracter;
    }
}
console.log(dadoPurificado)