const pessoa = {
    nome: "estela",
    altura: 1.73,
    peso: 60,
};
// um objeto

// pessoa.nome="pedro"
pessoa['nome']="pedro";
pessoa['altura']=1.80;
pessoa['peso']= 70;

// console.log(pessoa)
console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.altura}m e peso ${pessoa.peso}kg`);