const pessoa = {
    nome: "estela",
   idade: 20,
   cidade:"caruaru",
   profissão:"Dev",
};
// const nome= pessoa.nome;
// const idade=pessoa.idade;

const {nome,idade, ...outros} = pessoa

console.log(nome,idade);
console.log(outros);