const pessoa = {
    nome: "estela",
    altura: 1.73,
    idade: 23,
    cnh: true,
    apelido: ["luz", "ester", "barbie"]
};
// ternario funciona em tres partes: condição ? valorVerdadeiro : valorFalso
const textoCNH = (pessoa.cnh ? "possui CNH" : "não possui CNH" );

// if(pessoa.cnh){
//     textoCNH = "possui CNH";
// }else{
//     textoCNH = "não possui CNH"
// }

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura} m de altura,${textoCNH} e tem os seguintes apelidos:` );
for(let item of pessoa.apelido){
    console.log(`- ${item}`)
}